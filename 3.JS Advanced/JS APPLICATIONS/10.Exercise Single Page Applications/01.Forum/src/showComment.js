const container = document.getElementById('comments-container');

console.log(container);
export async function showComments() {
    await getComments()
}

async function getComments() {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    const res = await fetch(url);
    const data = await res.json();
    console.log(Object.values(data).map(createComment));

    console.log(Object.values(data));

    container.replaceChildren(...Object.values(data).map(createComment));



}

function createComment(data) {
    const newElement = document.createElement('div');
    newElement.setAttribute('class', 'topic-name')

    newElement.innerHTML = `
    <a href="#" class="normal" data-id=${data._id}>
        <h2>${data.title}</h2>
    </a>
    <div class="columns">
        <div>
            <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
            <div class="nick-name">
                <p>Username: <span>${data.username}</span></p>
            </div>
        </div>`
    return newElement
}