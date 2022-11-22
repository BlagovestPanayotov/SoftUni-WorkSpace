import { html, render } from '../node_modules/lit-html/lit-html.js';

const root = document.querySelector('tbody');
const searchField = document.getElementById('searchField');

solve();
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   update();
   function onClick() {
      const match = searchField.value;
      searchField.value = '';
      update(match)
   }
}

async function update(match = '%%') {
   const result = studentsTemplate(Object.values(await getData()), match);
   render(result, root);
}

function studentsTemplate(students, match) {
   const data = html`
               ${students.map(s => createSingleTemplate(s, match))}
               `
   return data;
}

function createSingleTemplate(student, match) {

   const firstName = student.firstName.toLowerCase().includes(match.toLowerCase());
   const lastName = student.lastName.toLowerCase().includes(match.toLowerCase());
   const email = student.email.toLowerCase().includes(match.toLowerCase());
   const course = student.course.toLowerCase().includes(match.toLowerCase());

   const hasMatch = (firstName || lastName || email || course);
   console.log(`class=${hasMatch == true ? "select" : ""}`);

   const result = html`
   <tr class=${hasMatch ? "select" : ""}>
      <td>${student.firstName} ${student.lastName}</td>
      <td>${student.email}</td>
      <td>${student.course}</td>
   </tr>`;
   return result;
}


async function getData() {
   const url = ' http://localhost:3030/jsonstore/advanced/table';
   try {
      const response = await fetch(url);
      return response.json();
   } catch (err) {
      alert(err.message);
      throw err;
   }
}