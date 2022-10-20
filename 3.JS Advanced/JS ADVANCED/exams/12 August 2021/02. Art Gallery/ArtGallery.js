class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { 'picture': 200, 'photo': 50, 'item': 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error('This article model is not included in this gallery!');
        }

        const article = this.listOfArticles.find(x => x.articleName == articleName);

        if (article) {
            article.quantity += Number(quantity);
        } else {
            this.listOfArticles.push({
                articleModel,
                articleName,
                quantity: Number(quantity),
            })
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {

        if (this.guests.find(x => x.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }

        this.guests.push({
            guestName,
            points: personality === 'Vip' ? 500 : personality === 'Middle' ? 250 : 50,
            purchaseArticle: 0,
        })
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {

        const article = this.listOfArticles
            .find(x => x.articleName === articleName && x.articleModel === articleModel);

        if (!article) {
            throw new Error('This article is not found.');
        }

        if (article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        const guest = this.guests.find(x => x.guestName === guestName);

        if (!guest) {
            return `This guest is not invited.`;
        }

        const articlePoints = this.possibleArticles[article.articleModel];

        if (guest.points < articlePoints) {
            return 'You need to more points to purchase the article.';
        }

        guest.points -= articlePoints;
        article.quantity--;
        guest.purchaseArticle++;

        return `${guestName} successfully purchased the article worth ${articlePoints} points.`

    }

    showGalleryInfo(criteria) {

        const report = {
            article:article.apply(this),
            guest:guest.apply(this),
        }

        return report[criteria];

        function article() {
            const output = ['Articles information:'];
            this.listOfArticles.forEach(x => output.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`));
            return output.join('\n');
        }

        function guest() {
            const output = ['Guests information:'];
            this.guests.forEach(x => output.push(`${x.guestName} - ${x.purchaseArticle}`));
            return output.join('\n');
        }
    }

}


const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

// Articles information:
// picture - Mona Liza - 3
// item - Ancient vase - 1
// Guests information:
// John - 1
// Peter - 1