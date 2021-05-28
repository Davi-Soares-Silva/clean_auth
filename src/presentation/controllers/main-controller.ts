import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class MainController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    return {
      statusCode: 200,
      body: {
        decryptedUser: httpRequest.token
      }
    }
  }
}