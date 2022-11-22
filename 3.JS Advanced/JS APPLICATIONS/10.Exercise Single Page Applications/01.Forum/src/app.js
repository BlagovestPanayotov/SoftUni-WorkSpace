import { postComments } from "./postComment.js";
import { showComments } from "./showComment.js";

await showComments();
document.querySelector('form').addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const submitter = event.submitter;
    if (submitter.dataset.id === 'post') {
        const formData = new FormData(event.target);
        const title = formData.get('topicName');
        const username = formData.get('username');
        const post = formData.get('postText');
        console.log(title,
            username,
            post);

        if (!title || !username || !post) {
            alert('All fields are required!');
            return;
        }
        postComments({ title, username, post });
    } else if (submitter.dataset.id === 'cancel') {
        event.target.reset();
    }
}

