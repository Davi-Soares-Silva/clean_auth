import { Router } from 'express';
import { encryptUserData } from '../../../utils/cryptography/crypt';

export default async (routes: Router) => {

  routes.post(
    '/token',
    async (req, res) => {
      const data = req.body;
      const encryptedUser = encryptUserData(data);
      return res.json({ encryptedUser });
    }
  )
}