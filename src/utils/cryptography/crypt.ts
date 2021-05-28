import { createCipheriv, createDecipheriv } from "crypto";
import { ENCRYPTION } from "../../main/config/constants";

export function encryptUserData(data: object) {
  try {
    const cipher = createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION.KEY), ENCRYPTION.IV);

    const updatedCipher = cipher.update(JSON.stringify(data));

    const finalCypher = Buffer.concat([updatedCipher, cipher.final()]);

    const base64Token = finalCypher.toString('base64');

    return base64Token;
  } catch (error) {
    throw Error('Encryption error');
  }
}

export function decryptUserToken(token: any) {
  try {
    const encryptedText = Buffer.from(token, 'base64');

    const decipher = createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION.KEY), ENCRYPTION.IV);

    const updatedDecipher = decipher.update(encryptedText);

    const finalDecipher = Buffer.concat([updatedDecipher, decipher.final()]);

    const base = finalDecipher.toString();

    return JSON.parse(base);
  } catch (error) {
    throw new Error('Decryption error');
  }
}