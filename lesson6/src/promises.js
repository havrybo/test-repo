function checkStatus(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
    }
    return response;
}

function fetchAndProcess(url, processor) {
    return fetch(url)
        .then(checkStatus)
        .then(response => response.json())
        .then(json => {
            return processor(json);
        });
}

function printAndReturnTitle(json) {
    console.log('Received JSON:', json);
    if (json.title) {
        console.log('Title:', json.title);
        return json.title;
    }
    return json;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

fetchAndProcess(url, printAndReturnTitle)
    .then(result => {
        console.log('Processor function result:', result);
    })
    .catch(err => {
        console.error('Error in fetchAndProcess:', err);
    });
