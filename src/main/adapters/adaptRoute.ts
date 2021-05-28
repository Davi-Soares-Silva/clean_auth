import { Request, Response } from 'express';
import { Controller, HttpRequest } from '../../presentation/protocols';

export function adaptRoute(controller: Controller) {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
      token: req.token,
    };

    const httpResponse = await controller.handle(httpRequest);

    if (httpResponse.headers) {
      res.set(httpResponse.headers);
    }

    return res
      .status(httpResponse.statusCode)
      .json(httpResponse.body);
  };
}
