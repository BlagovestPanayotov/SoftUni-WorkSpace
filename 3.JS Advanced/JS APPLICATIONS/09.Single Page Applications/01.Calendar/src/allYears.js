import {showWantedYear} from './year.js'
const yearsSection = document.getElementById('years');

export function showAllYears() {

    document.querySelectorAll('section').forEach(s => s.style.display = 'none');

    yearsSection.style.display = 'block';

    yearsSection.addEventListener('click', ()=>showWantedYear(event));
}