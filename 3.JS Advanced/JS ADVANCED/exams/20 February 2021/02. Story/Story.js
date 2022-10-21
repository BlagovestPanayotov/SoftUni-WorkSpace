class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comment = [];
        this._likes = [];

    }

    get likes() {
        const likesCount = this._likes.length;
        if (likesCount === 0) {
            return `${this.title} has 0 likes`
        }
        if (likesCount === 1) {
            return `${this._likes[0]} likes this story!`
        }

        return `${this._likes[0]} and ${likesCount - 1} others like this story!`
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (this.creator === username) {
            throw new Error("You can't like your own story!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        const index = this._likes.indexOf(username);
        if (index == -1) {
            throw new Error("You can't dislike this story!");
        }
        this._likes.splice(index, 1);
        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        const index = this._comment.findIndex(x => x.id === id);
        if (index === -1) {
            this._comment.push({
                id:this._comment.length+1,
                username,
                content,
                replies: [],
            });

            return `${username} commented on ${this.title}`;
        }

        const replyCount = this._comment[index].replies.length;

        this._comment[index].replies.push({
            id: Number(`${id}.${replyCount + 1}`),
            username: username,
            content: content,
        });

        return 'You replied successfully';
    }

    toString(sortingType) {
        const output = [
            `Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this._likes.length}`,
            `Comments:`
        ]
        if (sortingType === 'asc') {
            this._comment
                .sort((a, b) => a.id - b.id)
                .forEach(x => {
                    output.push(`-- ${x.id}. ${x.username}: ${x.content}`);
                    if (x.replies.length > 0) {
                        x.replies.sort((a, b) => a.id - b.id)
                            .forEach(y => {
                                output.push(`--- ${y.id}. ${y.username}: ${y.content}`);
                            })
                    }
                });

        } else if (sortingType === 'desc') {
            this._comment
                .sort((a, b) => b.id - a.id)
                .forEach(x => {
                    output.push(`-- ${x.id}. ${x.username}: ${x.content}`);
                    if (x.replies.length > 0) {
                        x.replies.sort((a, b) => b.id - a.id)
                            .forEach(y => {
                                output.push(`--- ${y.id}. ${y.username}: ${y.content}`);
                            })
                    }
                });
        } else if (sortingType === 'username') {
            this._comment
                .sort((a, b) => a.username.localeCompare(b.username))
                .forEach(x => {
                    output.push(`-- ${x.id}. ${x.username}: ${x.content}`);
                    if (x.replies.length > 0) {
                        x.replies.sort((a, b) => a.username.localeCompare(b.username))
                            .forEach(y => {
                                output.push(`--- ${y.id}. ${y.username}: ${y.content}`);
                            })
                    }
                });
        }
        return output.join('\n');
    }
}
