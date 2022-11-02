async function attachEvents() {

    const loadPostBtn = document.getElementById('btnLoadPosts');
    loadPostBtn.addEventListener('click', loadTitles);

    const btnViewPost = document.getElementById('btnViewPost');
    btnViewPost.addEventListener('click', showInfo);

}


async function getPostContent(wantedId) {
    const currentPost = await getPosts();
    return Object.values(currentPost).find(x => x.id === wantedId);
}

async function getComments(wantedId) {
    const url = `http://localhost:3030/jsonstore/blog/comments`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        const output = Object.values(data).filter(x => x.postId === wantedId)

        return output

    } catch (error) {
        alert('error');
    }
}

async function showInfo(event) {
    const text = event.target.textContent;
    event.target.textContent = 'Loading...';
    event.target.disabled = true;

    const title = document.getElementById('posts');
    const [data, comments] = await Promise.all([
        getPostContent(title.value),
        getComments(title.value)
    ]);

    const postTitle = document.getElementById('post-title');
    postTitle.textContent = data.title;

    const postBody = document.getElementById('post-body');    
    postBody.textContent = data.body;

    const postComments = document.getElementById('post-comments');
    postComments.replaceChildren();
    for (const comment of comments) {
        postComments.appendChild(elementBuilder('li', { id: comment.id }, comment.text));
    }

    event.target.textContent = text;
    event.target.disabled = false;
}

async function loadTitles(event) {
    const text = event.target.textContent;
    event.target.textContent = 'Loading...';

    const optionHolder = document.getElementById('posts');
    optionHolder.replaceChildren();

    const data = await getPosts();
    event.target.disabled = true;
    for (const el in data) {
        optionHolder.appendChild(elementBuilder('option', { value: data[el].id }, data[el].title));
    };
    event.target.textContent = text;
    event.target.disabled = false;

}


async function getPosts() {
    const url = 'http://localhost:3030/jsonstore/blog/posts';
    try {
        const res = await fetch(url);
        const data = res.json();

        return data;
    } catch (err) {
        alert('error');
    }
}

function elementBuilder(type, attributes, ...content) {
    const newElement = document.createElement(type);

    for (const attribute in attributes) {
        newElement.setAttribute(attribute, attributes[attribute]);
    }

    for (const el of content) {
        if (typeof el === 'string' || typeof el === 'number') {
            const text = document.createTextNode(el);
            newElement.appendChild(text);
        } else {
            newElement.appendChild(el);
        }
    }

    return newElement;
}

attachEvents();