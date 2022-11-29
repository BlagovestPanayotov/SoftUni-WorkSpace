import { searchForElements } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


const searchTemplate = (onSubmit) => html`
 <section id="search">
          <h2>Search by Brand</h2>

          <form @submit=${onSubmit} class="search-wrapper cf">
            <input
              id="#search-input"
              type="text"
              name="search"
              placeholder="Search here..."
              required
            />
            <button type="submit">Search</button>
          </form>

          <h3>Results:</h3>

          ${false
        ? html`<div id="search-container">
            <ul class="card-wrapper">
              <!-- Display a li with information about every post (if any)-->
              <li class="card">
                <img src="./images/travis.jpg" alt="travis" />
                <p>
                  <strong>Brand: </strong><span class="brand">Air Jordan</span>
                </p>
                <p>
                  <strong>Model: </strong
                  ><span class="model">1 Retro High TRAVIS SCOTT</span>
                </p>
                <p><strong>Value:</strong><span class="value">2000</span>$</p>
                <a class="details-btn" href="">Details</a>
              </li>
            </ul>`
        : html`<h2>There are no results found.</h2>`}
          
          </div>
        </section>`


export async function showSearch(ctx) {
    ctx.render(searchTemplate(submitHandler(onSubmit)));
    // const data = await searchForElements(query);
    function onSubmit(){
        console.log('dada');
    }
    // console.log(data);
}


