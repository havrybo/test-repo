async function checkStatusAsync(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
    }
    await new Promise(resolve => setTimeout(resolve, 100));
    console.log(`Checked response with status: ${response.status}`);
    return response;
}


async function fetchAndProcessAsync(url, processor) {
    try {
        const response = await fetch(url);
        await checkStatusAsync(response);
        const json = await response.json();
        return await processor(json);
    } catch (err) {
        console.error('Error in fetchAndProcessAsync:', err.message);
        throw err;
    }
}


async function printAndReturnUserId(users) {
    console.log('--- All usernames ---');
    users.forEach(user => console.log(user.username));
    console.log('----------------------');

    const extraIds = [3, 6, 9];
    const extraUsers = await Promise.all(
        extraIds.map(id =>
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => res.json())
        )
    );

    console.log('Fetched extra users:', extraUsers.map(u => u.username));

    const ids = users.map(u => u.id);
    console.log('IDs:', ids);

    return ids;
}


(async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
        const result = await fetchAndProcessAsync(url, printAndReturnUserId);
        console.log('fetchAndProcessAsync result:', result);
    } catch (err) {
        console.error('Error in async flow:', err);
    }
})();
