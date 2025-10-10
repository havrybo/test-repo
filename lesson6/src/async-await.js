async function checkStatusAsync(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
    }
    return response;
}

async function fetchAndProcessAsync(url, processor) {
    const response = await fetch(url);
    await checkStatusAsync(response);
    const json = await response.json();
    return await processor(json);
}

async function printAndReturnUserId(json) {
    console.log('JSON (async):', json);
    if (json.id !== undefined) {
        console.log('ID:', json.id);
        return json.id;
    }
    return json;
}

(async () => {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    try {
        const result = await fetchAndProcessAsync(url, printAndReturnUserId);
        console.log('fetchAndProcessAsync result:', result);
    } catch (err) {
        console.error('Error in async flow:', err);
    }
})();
