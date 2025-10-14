function ensureOk(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
    }
    return response;
}

async function fetchWithFallback(primaryUrl, fallbackUrl) {
    try {
        const primaryResponse = await fetch(primaryUrl);
        const primaryJson = await ensureOk(primaryResponse).json();
        console.log('Successfully received from primary:', primaryUrl);
        return primaryJson;
    } catch (primaryErr) {
        console.warn(`Primary request failed (${primaryUrl}):`, primaryErr.message);

        try {
            const fallbackResponse = await fetch(fallbackUrl);
            ensureOk(fallbackResponse);
            const fallbackJson = await fallbackResponse.json();
            console.log('Successfully received from fallback:', fallbackUrl);
            return fallbackJson;
        } catch (fallbackErr) {
            console.error(`Fallback request also failed (${fallbackUrl}):`, fallbackErr.message);

            throw new Error(
                'Both primary and fallback requests failed.\n' +
                    'Primary error: ' + primaryErr.message + '\n' +
                    'Fallback error: ' + fallbackErr.message
            );

        }
    }
}

const primary = 'https://this-service-should-not-exist.example.invalid/endpoint';
const fallback = 'https://jsonplaceholder.typicode.com/posts/1';

(async () => {
    try {
        const data = await fetchWithFallback(primary, fallback);
        console.log('Data received (from primary or fallback):', data);
    } catch (err) {
        console.error('Critical error — both requests failed:', err.message);
    }
})();
