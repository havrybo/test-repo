import { BaseApiObject } from '../core/base-api-object.js';

export class JokesApi extends BaseApiObject {
    public randomJoke(): string {
        return `${this.baseUrl}/random_joke`;
    }

    public jokeByType(type: string): string {
        return `${this.baseUrl}/jokes/${type}/random`;
    }

    public jokesByCount(count: number): string {
        return `${this.baseUrl}/jokes/random/${count}`;
    }

    public tenJokes(): string {
        return `${this.baseUrl}/jokes/ten`;
    }

    public jokeById(id: number): string {
        return `${this.baseUrl}/jokes/${id}`;
    }
}
