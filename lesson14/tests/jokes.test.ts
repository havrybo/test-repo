import { describe, it, expect } from 'vitest';
import { JokesService } from '../src/services/jokes.service.js';
import { API_CONFIG } from '../src/config/api-config.js';

const service = new JokesService(API_CONFIG.baseUrl);

describe('Official Joke API', () => {
    it('Random joke should have correct structure', async () => {
        const joke = await service.getRandomJoke();
        expect(joke).toHaveProperty('id');
        expect(joke).toHaveProperty('setup');
        expect(joke).toHaveProperty('punchline');
        expect(joke).toHaveProperty('type');
    });

    it('Should return exactly 10 jokes', async () => {
        const jokes = await service.getTenJokes();
        expect(jokes).toHaveLength(10);
        jokes.forEach((j) => {
            expect(j).toHaveProperty('id');
            expect(j).toHaveProperty('setup');
            expect(j).toHaveProperty('punchline');
            expect(j).toHaveProperty('type');
        });
    });

    it('Should return N jokes', async () => {
        const count = 5;
        const jokes = await service.getJokesByCount(count);
        expect(jokes).toHaveLength(count);
    });

    it('Should return jokes of type "programming"', async () => {
        const jokes = await service.getJokeByType('programming');
        expect(jokes[0].type).toBe('programming');
    });

    it('Should get joke by id', async () => {
        const random = await service.getRandomJoke();
        const joke = await service.getJokeById(random.id);
        expect(joke.id).toBe(random.id);
    });
});
