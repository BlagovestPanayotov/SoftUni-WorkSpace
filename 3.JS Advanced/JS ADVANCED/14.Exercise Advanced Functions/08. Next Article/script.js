function getArticleGenerator(articles) {

    const storage = articles;

    function printArticle() {
        if (storage.length > 0) {
            const article = document.createElement('article');
            article.textContent = storage.shift();
            document.getElementById('content').appendChild(article);
        }
    }

    return printArticle;

}
