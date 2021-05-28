import { adaptRoute } from '../../adapters/adaptRoute';
import { makeMainController } from '../../factories/controllers/make-main';
import { Router } from 'express';

export default (routes: Router) => {
  routes.post(
    '/access',
    adaptRoute(makeMainController())
  )
}