window.addEventListener("load", solve);

function solve() {
	const input = {
		firstName: document.getElementById('first-name'),
		lastName: document.getElementById('last-name'),
		age: document.getElementById('age'),
		storyTitle: document.getElementById('story-title'),
		genre: document.getElementById('genre'),
		story: document.getElementById('story'),
	}

	const publishBtn = document.getElementById('form-btn');
	const previewList = document.getElementById('preview-list');
	const mainDiv = document.getElementById('main');

	publishBtn.addEventListener('click', addToPreview);

	function addToPreview(event) {
		event.preventDefault();

		const firstName = input.firstName.value;
		const lastName = input.lastName.value;
		const age = input.age.value;
		const storyTitle = input.storyTitle.value;
		const genre = input.genre.value;
		const story = input.story.value;

		if (firstName == '' || lastName == '' || age == ''
			|| storyTitle == '' || genre == '' || story == '') { return; }


		const newListElement = elementBuilder(previewList, 'li', undefined, 'story-info');
		const newArticle = elementBuilder(newListElement, 'article');
		elementBuilder(newArticle, 'h4', `Name: ${firstName} ${lastName}`);
		elementBuilder(newArticle, 'p', `Age: ${age}`);
		elementBuilder(newArticle, 'p', `Title: ${storyTitle}`);
		elementBuilder(newArticle, 'p', `Genre: ${genre}`);
		elementBuilder(newArticle, 'p', `${story}`);

		elementBuilder(newListElement, 'button', 'Save Story', 'save-btn', saveStory);
		elementBuilder(newListElement, 'button', 'Edit Story', 'edit-btn', editStory);
		elementBuilder(newListElement, 'button', 'Delete Story', 'delete-btn', deleteStory);

		publishBtn.disabled = true;

		clearInput();

		function saveStory() {
			mainDiv.innerHTML = '';
			elementBuilder(mainDiv, 'h1', 'Your scary story is saved!');
		}

		function editStory() {
			input.firstName.value = firstName;
			input.lastName.value = lastName;
			input.age.value = age;
			input.storyTitle.value = storyTitle;
			input.genre.value = genre;
			input.story.value = story;

			publishBtn.disabled = false;
			newListElement.remove();

		}

		function deleteStory() {
			newListElement.remove();
			publishBtn.disabled = false;

		}
	}

	function elementBuilder(parent, tagName, content, className, eventListener) {
		const newElement = document.createElement(tagName);
		if (parent) { parent.appendChild(newElement); }
		if (content) { newElement.textContent = content; }
		if (className) { newElement.className = className; }
		if (eventListener) { newElement.addEventListener('click', eventListener); }

		return newElement;

	}

	function clearInput() {
		input.firstName.value = '';
		input.lastName.value = '';
		input.age.value = '';
		input.storyTitle.value = '';
		input.story.value = '';
	}

}