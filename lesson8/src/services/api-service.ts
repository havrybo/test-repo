import { RawUserData } from '../models/user-model';

export class ApiService {
    private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

    public async fetchUsers(): Promise<RawUserData[]> {
        const response = await fetch(`${this.baseUrl}/users`);
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    }
}
