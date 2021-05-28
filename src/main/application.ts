import cors from 'cors';
import express from 'express';

import setupPublicRoutes from '../main/config/public-routes';
import setupPrivateRoutes from '../main/config/private-routes';
import { auth } from './middleware/auth';

const server = express();

server.use(cors());
server.use(express.json());

setupPublicRoutes(server);
server.use(auth);
setupPrivateRoutes(server);

export { server };
