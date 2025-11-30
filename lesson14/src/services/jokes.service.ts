import { BaseService } from '../core/base-service.js';
import { JokesApi } from '../api-objects/jokes.api.js';
import type { Joke } from '../types/joke.js';

export class JokesService extends BaseService {
    private readonly api: JokesApi;

    public constructor(baseUrl: string) {
        super();
        this.api = new JokesApi(baseUrl);
    }

    public async getRandomJoke(): Promise<Joke> {
        const joke = await this.client.get<Joke>(this.api.randomJoke());
        this.validateJoke(joke);
        return joke;
    }

    public async getTenJokes(): Promise<Joke[]> {
        const jokes = await this.client.get<Joke[]>(this.api.tenJokes());
        jokes.forEach(this.validateJoke);
        return jokes;
    }

    public async getJokesByCount(count: number): Promise<Joke[]> {
        const jokes = await this.client.get<Joke[]>(this.api.jokesByCount(count));
        jokes.forEach(this.validateJoke);
        return jokes;
    }

    public async getJokeByType(type: string): Promise<Joke[]> {
        const jokes = await this.client.get<Joke[]>(this.api.jokeByType(type));
        jokes.forEach(this.validateJoke);
        return jokes;
    }

    public async getJokeById(id: number): Promise<Joke> {
        const joke = await this.client.get<Joke>(this.api.jokeById(id));
        this.validateJoke(joke);
        return joke;
    }

    private validateJoke(joke: Joke): void {
        if (!joke.id || !joke.setup || !joke.punchline || !joke.type) {
            throw new Error('Invalid joke structure');
        }
    }
}
