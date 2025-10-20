export class Geo {
    public lat: string;
    public lng: string;

    public constructor(lat: string, lng: string) {
        this.lat = lat;
        this.lng = lng;
    }
}

export class Address {
    public street: string;
    public suite: string;
    public city: string;
    public zipcode: string;
    public geo: Geo;

    public constructor(
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: Geo
    ) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }

    public getFullAddress(): string {
        return `${this.city}, ${this.street} (${this.suite})`;
    }
}

export class Company {
    public name: string;
    public catchPhrase: string;
    public bs: string;

    public constructor(name: string, catchPhrase: string, bs: string) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

export interface RawUserData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: { lat: string; lng: string };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export class User {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public address: Address;
    public phone: string;
    public website: string;
    public company: Company;

    public constructor(data: RawUserData) {
        this.id = data.id;
        this.name = data.name;
        this.username = data.username;
        this.email = data.email;
        this.address = new Address(
            data.address.street,
            data.address.suite,
            data.address.city,
            data.address.zipcode,
            new Geo(data.address.geo.lat, data.address.geo.lng)
        );
        this.phone = data.phone;
        this.website = data.website;
        this.company = new Company(data.company.name, data.company.catchPhrase, data.company.bs);
    }

    public getFullAddress(): string {
        return this.address.getFullAddress();
    }

    public async getCompanyDomain(): Promise<string> {
        await new Promise((resolve) => setTimeout(resolve, 200));
        return this.website.split('.')[0];
    }
}
