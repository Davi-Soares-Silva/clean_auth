import { CpAuthenticationToken } from "../../data/usecase/cryptography/cp-authentication-token";
import { HttpResponse } from "../protocols";
import { Middleware } from "../protocols/middleware";

export class AuthMiddleware implements Middleware{
  constructor(private readonly cpAuthenticationToken: CpAuthenticationToken) {}
  async handle(httpRequest: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      const { accessToken } = httpRequest;

      const account = await this.cpAuthenticationToken.decrypt({ accessToken })
      return {
        statusCode: 200,
        body: {
          message: 'Autenticação realizada com sucesso!',
          payload: account,
        }
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: {
          message: 'Internal server error!'
        }
      }
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    accessToken: string;
  }
}