import { getResentGames } from "../api/data.js";
import { html, repeat } from "../lib.js";


const homeTemplate = (elements) => html`
                <section id="welcome-world">

                <div class="welcome-message">
                    <h2>ALL new games are</h2>
                    <h3>Only in GamesPlay</h3>
                </div>
                <img src="./images/four_slider_img01.png" alt="hero">
                <div id="home-page">
                    <h1>Latest Games</h1>
                    ${elements.length == 0
        ? html`<p class="no-articles">No games yet</p>`
        : html`${repeat(elements, r => r._id, gameTemplate)}`}
                </div>
                </section>
                `



const gameTemplate = (el) => html`
            <div class="game">
                        <div class="image-wrap">
                            <img src=${el.imageUrl}>
                        </div>
                        <h3>${el.title}</h3>
                        <div class="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div class="data-buttons">
                            <a href=${'/details/' + el._id} class="btn details-btn">Details</a>
                        </div>
                    </div>`

export async function showHome(ctx) {
    const elements = await getResentGames();

    ctx.render(homeTemplate(elements));
}


// _createdOn: 1617194128618
// _id: "ff436770-76c5-40e2-b231-77409eda7a61"
// _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8"
// category: "Action"
// imageUrl: "/images/CoverFire.png"
// maxLevel: "70"
// summary: "Best action shooter game, easy controls, realistic 3D graphics and fun offline missions. Get your best shooting gun and take to action!"
// title: "CoverFire"
