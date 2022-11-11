import { showWantedMount } from "./mount.js";
import { showAllYears } from "./allYears.js";

export function showWantedYear(event) {
    const tagName = event.target.tagName;
    if (tagName === 'TD') {
        document.querySelectorAll('section').forEach(s => s.style.display = 'none');
        const wantedYear = event.target.querySelector('.date').textContent;

        const currentYear = document.getElementById(`year-${wantedYear}`);
        currentYear.style.display = 'block';

        currentYear.addEventListener('click', yearManipulator);
    }
}


function yearManipulator(event) {
    const tagName = event.target.tagName;
    if (tagName === 'CAPTION') {
        showAllYears()
    }
    if (tagName === 'TD') {
        showWantedMount(event);
    }
}







