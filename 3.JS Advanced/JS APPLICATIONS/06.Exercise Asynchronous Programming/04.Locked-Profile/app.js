async function lockedProfile() {
    const mainEl = document.getElementById('main');
    mainEl.textContent = 'Loading...';
    let id = 1;
    const data = await getUsers();
    mainEl.replaceChildren();
    for (const user in data) {
        console.log(data[user]._id);
        createUserProfiles(mainEl, data[user],id);
        id++;
    }

}

async function getUsers() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

function createUserProfiles(parent, data,id) {
    /*
    <div class="profile">
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user1Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user1Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="" disabled readonly />
				<div class="user1Username">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="" disabled readonly />
					<label>Age:</label>
					<input type="text" name="user1Age" value="" disabled readonly />
				</div>
                */

    const profile = createElement('div', { class: 'profile' },
        createElement('img', { src: './iconProfile2.png', class: "userIcon" }),
        createElement('label', {}, 'Lock'),
        createElement('input', { type: 'radio', name: `user${id}Locked`, value: 'lock', checked: true }),
        createElement('label', {}, 'Unlock'),
        createElement('input', { type: 'radio', name: `user${id}Locked`, value: 'unlock' }),
        createElement('hr'),
        createElement('label', {}, 'Username'),
        createElement('input', { type: 'text', name: `user${id}Username`, value: data.username, disabled: true, readonly: true }),
        createElement('div', { class: 'hiddenInfo', id: data.username },
            createElement('label', {}, 'Email:'),
            createElement('input', { type: 'email', name: `user${id}Email`, value: data.email, disabled: true, readonly: true }),
            createElement('label', {}, 'Age:'),
            createElement('input', { type: 'email', name: `user${id}Age`, value: `${data.age}`, disabled: true, readonly: true })),//type must not be email. The test want is as email
        createElement('button', { onclick: showMore }, 'Show more'));


    parent.appendChild(profile);

}

function showMore(event) {
    const parent = event.target.parentElement;
    const hiddenInfo = event.target.parentElement.querySelector('div');
    const [lockBtn, unlockBtn, name] = parent.querySelectorAll('input');

    if (lockBtn.checked === true) {
        console.log('locked');
        return;
    }

    if (hiddenInfo.className === 'hiddenInfo') {
        hiddenInfo.className = name.value;
        event.target.textContent = 'Show less';
    } else {
        hiddenInfo.setAttribute('class', 'hiddenInfo');
        event.target.textContent = 'Show more';
    }


}

function createElement(type, attributes, ...content) {
    const newElement = document.createElement(type);
    for (const attribute in attributes) {
        if (attribute.substring(0, 2) === 'on') {
            newElement.addEventListener(attribute.substring(2), attributes[attribute]);
        } else {
            newElement.setAttribute(attribute, attributes[attribute]);
        }
    }

    for (const el of content) {
        if (typeof el === 'string' || typeof el === 'number') {
            const text = document.createTextNode(el);
            newElement.appendChild(text);
        } else {
            newElement.appendChild(el);
        }
    }

    return newElement;


}