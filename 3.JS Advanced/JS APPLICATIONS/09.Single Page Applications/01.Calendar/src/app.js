import { showAllYears} from "./allYears.js";

showAllYears();

export function returnOnePage(event) {
    const tagName = event.target.tagName;
    const text = event.target.textContent;
    if (tagName === 'CAPTION') {
        if (text.length === 4) {
            showAllYears()
        } else {
            const wantedYear = text.slice(-4);
            const currentYear = document.getElementById(`year-${wantedYear}`);
            document.querySelectorAll('section').forEach(s => s.style.display = 'none');
            currentYear.style.display = 'block';
    
        }
    }
}
