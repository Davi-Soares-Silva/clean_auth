import { CpAuthenticationToken } from '../../../data/usecase/cryptography/cp-authentication-token';
import { AuthMiddleware } from '../../../presentation/middleware/auth-middleware';

export function makeAuthMiddleware() {

  const cpAuth = new CpAuthenticationToken();
  
  return new AuthMiddleware(cpAuth);
}
