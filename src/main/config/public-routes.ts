import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import path from 'path';

export default (app: Express): void => {
  const router = Router();
  app.use('/api', router);

  const routesFolderPath = path.resolve(__dirname, '..', 'routes', 'public');

  readdirSync(routesFolderPath).map(async (file) => {
    if (!file.includes('.spec.') && !file.endsWith('.map')) {
      (await import(`${routesFolderPath}/${file}`)).default(router);
    }
  });
};