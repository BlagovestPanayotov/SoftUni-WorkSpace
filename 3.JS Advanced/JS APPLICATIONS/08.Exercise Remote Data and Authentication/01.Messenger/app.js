async function attachEvents() {

    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    displayComments(await getComments());

    refreshBtn.addEventListener('click', async () => displayComments(await getComments()));
    submitBtn.addEventListener('click', postComment);

}

async function postComment() {

    const url = 'http://localhost:3030/jsonstore/messenger';

    const [author, content] = document.getElementsByTagName('input');
    if (author.value === ''
        || content.value === '') {
            alert('You can not send message without author or content')
        return;
    }

    const res = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author: author.value,
            content: content.value,
        })
    });

    author.value = ''
    content.value = ''

    return await res.json();

}

function displayComments(comments) {
    const displayArea = document.getElementById('messages');
    displayArea.textContent = comments.map(x=>`${x.author}: ${x.content}`).join('\n');
}


async function getComments() {
    const url = 'http://localhost:3030/jsonstore/messenger';

    const res = await fetch(url);
    const data = await res.json();
    return Object.values(data);
}

attachEvents();