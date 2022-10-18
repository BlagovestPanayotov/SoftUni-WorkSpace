window.addEventListener('load', solve);

function solve() {
    const input = {
        genre: document.getElementById('genre'),
        name: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date'),
    }

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addSong);

    const hitsContainer = document.querySelector('#all-hits .all-hits-container');

    const savedSongsContainer = document.querySelector('#saved-hits .saved-container');

    const likeCountContainer = document.querySelector('.likes p');
    let likesCounter = 0;

    function addSong(event) {
        event.preventDefault();

        const genre = input.genre.value;
        const name = input.name.value;
        const author = input.author.value;
        const date = input.date.value;

        if (genre !== '' && name !== '' && author !== '' && date !== '') {

            const songContainer = elementBuilder(hitsContainer, 'div', undefined, 'hits-info');
            elementBuilder(songContainer, 'img', undefined, undefined, undefined, './static/img/img.png');
            elementBuilder(songContainer, 'h2', `Genre: ${genre}`);
            elementBuilder(songContainer, 'h2', `Name: ${name}`);
            elementBuilder(songContainer, 'h2', `Author: ${author}`);
            elementBuilder(songContainer, 'h3', `Date: ${date}`);
            const saveBtn = elementBuilder(songContainer, 'button', 'Save song', 'save-btn', saveSong);
            const likeBtn = elementBuilder(songContainer, 'button', 'Like song', 'like-btn', likeSong);
            elementBuilder(songContainer, 'button', 'Delete', 'delete-btn', deleteSong);


            input.genre.value = '';
            input.name.value = '';
            input.author.value = '';
            input.date.value = '';

            function saveSong() {
                savedSongsContainer.appendChild(songContainer);
                saveBtn.remove();
                likeBtn.remove();
            }

            function deleteSong() {
                songContainer.remove()
            }
        }
    }


    function likeSong(event) {
        likesCounter++;
        likeCountContainer.textContent = `Total Likes: ${likesCounter}`;
        event.target.disabled = true;

    }

    function elementBuilder(parent, tagName, content, className, eventListener, source) {
        const newElement = document.createElement(tagName);
        parent.appendChild(newElement);
        if (content) { newElement.textContent = content; }
        if (className) { newElement.className = className; }
        if (eventListener) { newElement.addEventListener('click', eventListener); }
        if (source) { newElement.src = source; }

        return newElement;
    }
}