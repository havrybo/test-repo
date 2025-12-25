import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
    baseUrl: process.env.BASE_URL!,
    auth: {
        email: process.env.USER_EMAIL!,
        password: process.env.USER_PASSWORD!
    }
};
