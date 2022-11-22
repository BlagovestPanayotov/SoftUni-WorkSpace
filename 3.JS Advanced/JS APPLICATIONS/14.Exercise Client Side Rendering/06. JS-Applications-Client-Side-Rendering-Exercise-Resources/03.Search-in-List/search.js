import { html, render } from '../node_modules/lit-html/lit-html.js'
import { towns } from './towns.js';


const searchTemplate = (towns, match) => html`
<article>
        <div id="towns">
          <ul>
        ${towns.map(x => townsTemplate(x, match))}
          </ul>
        </div>
        <input type="text" id="searchText" />
        <button @click=${search}>Search</button>
        <div id="result">
          ${countMatch(towns,match)}
        </div>
        </article>
        `;

const townsTemplate = (town, match) => html`
      <li class = ${match && town.toLowerCase().includes(match.toLowerCase()) ? 'active' : ''}>
        ${town}  
      </li> 
        `;


const root = document.body;
update();

function update(match = '%%') {
  const result = searchTemplate(towns,match)
  render(result, root);

}

function search() {
  const input = document.getElementById('searchText').value;
  update(input);
}

function countMatch(towns,match){
    const matches = towns.filter(t=>t.toLowerCase().includes(match.toLowerCase())).length;
    return matches ? `${matches} matches found` : '';
}


