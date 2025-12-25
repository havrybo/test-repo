import { test, expect } from '@api/fixtures/api.auth.fixture';

test.describe.configure({ mode: 'serial' });

test('Login fixture works', ({ token }) => {
    expect(token).toBeTruthy();
});
