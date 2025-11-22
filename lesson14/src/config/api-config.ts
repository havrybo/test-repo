import dotenvSafe from 'dotenv';

dotenvSafe.config();

export const API_CONFIG = {
    baseUrl: process.env.API_BASE_URL || 'https://official-joke-api.appspot.com'
};
