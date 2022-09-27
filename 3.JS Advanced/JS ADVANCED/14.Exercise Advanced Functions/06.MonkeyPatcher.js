function solution(command) {

    const commands = {
        upvote,
        downvote,
        score
    }

    if (command === 'score') {
        return commands[command].apply(this);
    }

    commands[command].apply(this);

    function upvote() {
        this.upvotes += 1;

    }

    function downvote() {
        this.downvotes += 1;

    }

    function score() {
        let upVote = this.upvotes;
        let downVote = this.downvotes;

        if ((upVote + downVote) > 50) {
            const extra = Math.ceil(Math.max(upVote, downVote) * 0.25);
            upVote += extra;
            downVote += extra;
        }

        const rating = getRating(this.upvotes, this.downvotes);

        return [upVote, downVote, (upVote - downVote), rating];

        function getRating(up, down) {
            const diff = up - down;
            const sum = up + down;
            if (sum < 10) {
                return 'new';
            }
            if (diff < 0) {
                return 'unpopular';
            } else {
                if ((sum * 0.66) < up) {
                    return 'hot';
                }
                if (sum > 100) {
                    return 'controversial';
                }
                return 'new';
            }
        }
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');
console.log(score);

