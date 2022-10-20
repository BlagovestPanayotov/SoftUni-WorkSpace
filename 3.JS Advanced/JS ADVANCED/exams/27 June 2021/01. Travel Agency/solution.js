window.addEventListener('load', solution);

function solution() {
	const input = {
		fullName: document.getElementById('fname'),
		email: document.getElementById('email'),
		phone: document.getElementById('phone'),
		address: document.getElementById('address'),
		postCode: document.getElementById('code'),
	}


	const submitBtn = document.getElementById('submitBTN');
	

	const editBtn = document.getElementById('editBTN');
	editBtn.setAttribute('disabled', 'disabled');

	const continueBtn = document.getElementById('continueBTN');
	continueBtn.setAttribute('disabled', 'disabled');

	continueBtn.addEventListener('click', gratitude);
	const blockDiv = document.getElementById('block');

	const infoPreview = document.getElementById('infoPreview');

	submitBtn.addEventListener('click', submitForm);

	function submitForm() {

		const fullName = input.fullName.value;
		const email = input.email.value;
		const phone = input.phone.value;
		const address = input.address.value;
		const postCode = input.postCode.value;
		if (!fullName || !email) { return; }

		elementBuilder(infoPreview, 'li', `Full Name: ${fullName}`);
		elementBuilder(infoPreview, 'li', `Email: ${email}`);
		elementBuilder(infoPreview, 'li', `Phone Number: ${phone}`);
		elementBuilder(infoPreview, 'li', `Address: ${address}`);
		elementBuilder(infoPreview, 'li', `Postal Code: ${postCode}`);

		input.fullName.value = '';
		input.email.value = '';
		input.phone.value = '';
		input.address.value = '';
		input.postCode.value = '';

		submitBtn.setAttribute('disabled', 'disabled');
		editBtn.removeAttribute('disabled');
		continueBtn.removeAttribute('disabled');

		editBtn.addEventListener('click', returnToInputField);

		function returnToInputField() {
			input.fullName.value = fullName;
			input.email.value = email;
			input.phone.value = phone;
			input.address.value = address;
			input.postCode.value = postCode;

			const children = Array.from(infoPreview.getElementsByTagName('li'));

			for (const child of children) {
				child.remove();
			}

			submitBtn.removeAttribute('disabled');
			editBtn.setAttribute('disabled', 'disabled');
			continueBtn.setAttribute('disabled', 'disabled');

		}

	}


	function gratitude() {
		blockDiv.innerHTML = '';
		elementBuilder(blockDiv, 'h3', 'Thank you for your reservation!')
	}

	function elementBuilder(parent, tagName, content) {
		const newElement = document.createElement(tagName);
		parent.appendChild(newElement);
		if (content) { newElement.textContent = content; }

	}


}
