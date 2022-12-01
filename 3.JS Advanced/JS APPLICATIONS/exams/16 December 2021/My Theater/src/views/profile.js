import { getMyItems } from "../api/data.js";
import { html, repeat } from "../lib.js";
import { getUserData } from "../util.js";


const profileTemplate = (elements,user) => html`
        <section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>${user.email}</h2>
            </div>
            <div class="board">
                ${elements.length == 0
                        ? html`<div class="no-events">
                                    <p>This user has no events yet!</p>
                                </div>`
                        : html`${repeat(elements, r => r._id, elementTemplate)}`}
            </div>
        </section>`

const elementTemplate = (el) => html`
                <div class="eventBoard">
                    <div class="event-info">
                        <img src=${el.imageUrl}>
                        <h2>${el.title}</h2>
                        <h6>${el.date}</h6>
                        <a href=${'/details/'+el._id} class="details-button">Details</a>
                    </div>
                </div>`

export async function showProfile(ctx) {
    const user = getUserData();
    const elements = await getMyItems(user._id)

    ctx.render(profileTemplate(elements,user));
}
