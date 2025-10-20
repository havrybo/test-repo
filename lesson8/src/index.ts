import { ApiService } from './services/api-service';
import { UserProcessor } from './processors/user-processor';

async function main(): Promise<void> {
    const api: ApiService = new ApiService();
    const processor: UserProcessor = new UserProcessor();

    console.log('Fetching users...');
    const users = await api.fetchUsers();

    console.log('Processing user data...');
    const summaries = processor.process(users);

    console.log('--- User Summaries ---');
    summaries.forEach((summary) => console.log(summary.toString()));
}

main().catch((err) => console.error('Error:', err));
