import { User } from './user-model';

export class UserSummary {
    public name: string;
    public company: string;
    public city: string;

    public constructor(user: User) {
        this.name = user.name;
        this.company = user.company.name;
        this.city = user.address.city;
    }

    public toString(): string {
        return `${this.name} from ${this.company} (${this.city})`;
    }
}
