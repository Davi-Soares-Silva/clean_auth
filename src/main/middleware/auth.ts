import { adaptMiddleware } from '../adapters/adaptMiddleware';
import { makeAuthMiddleware } from '../factories/middleware/make-auth-middleware';

export const auth = adaptMiddleware(makeAuthMiddleware());