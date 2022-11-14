
const allSections = [...document.querySelectorAll('.view-section')];
const guestNav = [...document.querySelectorAll('.guest')];
const userNav = [...document.querySelectorAll('.user')];
const welcomeMsg = document.getElementById('welcome-msg');

export function showView(section) {
    hideAllSections()
    section.style.display = 'block';
}

function hideAllSections() {
    allSections.forEach(s => s.style.display = 'none');
}

export function showNavigation() {
    const dataUser = JSON.parse(sessionStorage.getItem('dataUser'));
    if (dataUser) {
        guestNav.forEach(a => a.style.display = 'none');
        userNav.forEach(a => a.style.display = 'inline-block');
        welcomeMsg.textContent = `Welcome, ${dataUser.email}`;
    } else {
        guestNav.forEach(a => a.style.display = 'inline-block');
        userNav.forEach(a => a.style.display = 'none');
        welcomeMsg.textContent = '';
    }
}

export function loading() {
    const loadingElement = document.createElement('h2');

    loadingElement.textContent = 'Loading...';

    return loadingElement;
}
