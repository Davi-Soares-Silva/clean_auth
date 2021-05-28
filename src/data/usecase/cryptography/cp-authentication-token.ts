import { AuthenticationToken } from "../../../domain/usecases/authentication-token";
import { decryptUserToken } from "../../../utils/cryptography/crypt";

export class CpAuthenticationToken implements AuthenticationToken {
  constructor(){}

  async decrypt(params: AuthenticationToken.Params): AuthenticationToken.Result {
    const { accessToken } = params;

    if (!accessToken) {
      throw new Error('TOKEN_NOT_FOUND');
    }

    const parts = accessToken.split(' ');

    if (parts.length !== 2) {
      throw new Error('TOKEN_NOT_FORMATTED');
    }

    const [bearer, token] = parts;

    if (!/^Bearer$/i.test(bearer)) {
      throw new Error('TOKEN_NOT_FORMATTED');
    }

    const base = decryptUserToken(token);

    return base;
  }
}