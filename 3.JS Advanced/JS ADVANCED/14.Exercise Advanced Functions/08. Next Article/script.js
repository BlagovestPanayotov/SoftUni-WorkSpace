function getArticleGenerator(articles) {
    const container = document.getElementById('content');
    return function () {
        const currentArticleText = articles.shift();
        if (currentArticleText) {
            const article = document.createElement('article');
            article.textContent = currentArticleText;
            container.appendChild(article);
        }
    }
}
