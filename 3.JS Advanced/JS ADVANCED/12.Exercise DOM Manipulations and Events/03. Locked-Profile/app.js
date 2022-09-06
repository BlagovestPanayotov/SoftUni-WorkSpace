function lockedProfile() {
    //take element
    const profiles = Array.from(document.getElementsByClassName('profile'));
    //add even listener
    for (const profile of profiles) {

        profile.querySelector('button').addEventListener('click', showHideInfo);
    }
    //check if lock/unlock is on and show/hide info
    function showHideInfo(event) {
        const profile = event.target.parentElement;
        const isLocked = profile.querySelector('input[value="lock"]');

        if (isLocked.checked !== true) {
            const button = profile.querySelector('button')
            if (button.textContent === 'Show more') {
                profile.querySelector('div').style.display = 'block';
                button.textContent = 'Hide it'
            } else {
                profile.querySelector('div').style.display = 'none';
                button.textContent = 'Show more'
            }
        };

    }
}