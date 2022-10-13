
class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    get online() {
        return this._online
    }

    set online(value) {
        this._online = value;

        if (this.divTitle) {
            this.divTitle.className = this._online ? 'title online' : 'title';
        }
    }

    elementCreator(tag, text, className) {
        const currentEl = document.createElement(tag)
        if (text) {
            currentEl.textContent = text;
        }
        if (className) {
            currentEl.className = className
        }
        return currentEl;
    }

    render(id) {
        this.article = this.elementCreator('article');

        this.divTitle = this.elementCreator('div', `${this.firstName} ${this.lastName}`, this._online ? 'title online' : 'title');
        this.button = this.elementCreator('button', `ℹ`);

        this.divContainer = this.elementCreator('div', '', 'info');
        this.divContainer.style.display = 'none';
        this.phoneSpan = this.elementCreator('span', `☎ ${this.phone}`);
        this.emailSpan = this.elementCreator('span', `✉ ${this.email}`);

        this.divTitle.appendChild(this.button);

        this.divContainer.appendChild(this.phoneSpan);
        this.divContainer.appendChild(this.emailSpan);

        this.article.appendChild(this.divTitle);
        this.article.appendChild(this.divContainer);

        this.button.addEventListener('click', () => {
            this.divContainer.style.display = this.divContainer.style.display === 'none' ? 'block' : 'none';
        });

        document.getElementById(id).appendChild(this.article);
    }

}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));
setTimeout(() => contacts[1].online = true, 2000);


