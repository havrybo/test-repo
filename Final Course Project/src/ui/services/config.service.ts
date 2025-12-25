import { env } from '@config/env';

export class ConfigService {
    public baseUrl = env.baseUrl;
    public email = env.auth.email;
    public password = env.auth.password;
}

