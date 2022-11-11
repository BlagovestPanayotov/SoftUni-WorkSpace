import { returnOnePage } from "./app.js";

export function showWantedMount(event) {
    const tagName = event.target.tagName;
    if (tagName === 'CAPTION') {
        console.log(event.target.textContent);
        yearManipulator()
    }
    if (tagName === 'TD') {
        const mount = event.target.querySelector('.date').textContent;
        const mounts = {
            Jan: 1,
            Feb: 2,
            Mar: 3,
            Apr: 4,
            May: 5,
            Jun: 6,
            Jul: 7,
            Aug: 8,
            Sept: 9,
            Oct: 10,
            Nov: 11,
            Dec: 12
        }
        const wantedMount = document.getElementById(`month-2020-${mounts[mount]}`);
        document.querySelectorAll('section').forEach(s => s.style.display = 'none');
        wantedMount.style.display = 'block';

        wantedMount.addEventListener('click', returnOnePage);
    }
}