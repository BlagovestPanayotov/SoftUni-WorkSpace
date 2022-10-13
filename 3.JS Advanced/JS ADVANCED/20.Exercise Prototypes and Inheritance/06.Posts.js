function solution() {

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        };

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }

    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        };
        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            let result = super.toString();
            result += `\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length !== 0) {
                result += '\nComments:';
                for (let comment of this.comments) {
                    result += '\n * ' + comment;
                }
            }
            return result;
        }
    }

    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content);
            this.views = views;
        }
        view(){
            this.views++;
            return this;
        }
        toString(){
            let result = super.toString();
            result+=`\nViews: ${this.views}`;
            return result;
        }

    }

    return {
        Post,
        SocialMediaPost,
        BlogPost

    }
}


const classes = solution();
// let post = new classes.Post("Post", "Content");

// console.log(post.toString());

// Post: Post
// Content: Content

// let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");

// console.log(scm.toString());

let scm2 = new classes.BlogPost('SomeTitle','SomeContent',30);
scm2.view();
scm2.view();
scm2.view();
scm2.view();
console.log(scm2.toString());
// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!