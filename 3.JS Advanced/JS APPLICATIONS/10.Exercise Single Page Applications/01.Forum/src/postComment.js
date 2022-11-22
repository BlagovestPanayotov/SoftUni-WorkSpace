export async function postComments(data) {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}


