fetch('http://localhost:3030/jsonstore/cookbook/recipes')
    .then(responseHandler)
    .then(dataHandler)
    .catch(error => console.log(`Error: ${error.message})`));

function responseHandler(response) {
    if (response.ok !== true) {
        throw new Error('404 "Not Found"');
    }
    return response.json()
}

function dataHandler(data) {
    const mainElement = document.querySelector('main');
    mainElement.textContent = "";
    Object.values(data).forEach(x => {
        const newArticle = htmlElementBuilder(mainElement, 'article', undefined, 'preview', showRecipe);
        const title = htmlElementBuilder(newArticle, 'div', undefined, 'title');
        htmlElementBuilder(title, 'h2', `${x.name}`);
        const imgContainer = htmlElementBuilder(newArticle, 'div', undefined, 'small');
        htmlElementBuilder(imgContainer, 'img').src = `${x.img}`;

        function showRecipe() {
            fetch('http://localhost:3030/jsonstore/cookbook/details/' + x._id)
                .then(responseHandler)
                .then(data => {
                    console.log(data);
                    newArticle.textContent = '';
                    newArticle.className = '';

                    htmlElementBuilder(newArticle, 'h2', `${x.name}`);
                    const divBand = htmlElementBuilder(newArticle, 'div', undefined, 'band');
                    const thumbContainer = htmlElementBuilder(divBand, 'div', undefined, 'thumb');
                    htmlElementBuilder(thumbContainer, 'img').src = `${x.img}`;
                    const divIntegers = htmlElementBuilder(divBand, 'div', undefined, 'ingredients');
                    htmlElementBuilder(divIntegers, 'h3', `Ingredients`);
                    const ulElement = htmlElementBuilder(divIntegers, 'ul');
                    data.ingredients.forEach(el => {
                        htmlElementBuilder(ulElement, 'li', el);
                    });
                    const description = htmlElementBuilder(newArticle, 'div', undefined, 'description');
                    htmlElementBuilder(description, 'h3', 'Preparation:');
                    data.steps.forEach(el => {
                        htmlElementBuilder(description, 'div', el);

                    });

                });
        }
    });
}



function htmlElementBuilder(parent, elementType, textContent, className, eventListener) {
    const newElement = document.createElement(elementType);
    parent.appendChild(newElement);
    if (textContent) { newElement.textContent = textContent; }
    if (className) { newElement.className = className; }
    if (eventListener) { newElement.addEventListener('click', eventListener); }

    return newElement;
}