function loadCommits() {

    const userName = document.getElementById('username').value;
    const repoName = document.getElementById('repo').value;

    const output = fetch(`https://api.github.com/repos/${userName}/${repoName}/commits`)
        .then(responseHandler)
        .then(dataHandler)
        .catch(errorHandler);

    console.log(output);

}

function responseHandler(response) {
    console.log(response);
    if (response.ok !== true) {
        throw new Error('404 "Not Found"');
    }

    return response.json();
}

function dataHandler(data) {

    const ulElement = document.getElementById('commits');
    ulElement.textContent = '';

    data.forEach(x => {
        const commitAuthorName = x.commit.author.name;
        const commitMessage = x.commit.message;

        const liElement = document.createElement('li');
        liElement.textContent = `${commitAuthorName}: ${commitMessage}`;

        ulElement.appendChild(liElement);

    })
}

function errorHandler(error) {
    const ulElement = document.getElementById('commits');
    ulElement.textContent = '';
    ulElement.textContent = `Error: ${error.message}`;
}