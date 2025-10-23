import { Processor } from '../abstraction/processor';
import { RawUserData, User } from '../models/user-model';
import { UserSummary } from '../models/user-summary.model';

export class UserProcessor extends Processor<RawUserData[], UserSummary[]> {
    public process(data: RawUserData[]): UserSummary[] {
        return data.map((userData) => new UserSummary(new User(userData)));
    }
}
