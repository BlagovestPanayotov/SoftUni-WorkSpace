window.addEventListener("load", solve);

function solve() {
	const input = {
		title: document.getElementById('post-title'),
		category: document.getElementById('post-category'),
		content: document.getElementById('post-content'),
	}
	const publishButton = document.getElementById('publish-btn');
	const reviewList = document.getElementById('review-list');
	const publishedList = document.getElementById('published-list');

	const buttonClear = document.getElementById('clear-btn');
	buttonClear.addEventListener('click', clear);

	publishButton.addEventListener('click', publish);

	function publish(event) {
		event.preventDefault();
		const title = input.title.value;
		const category = input.category.value;
		const content = input.content.value;
		if (title !== '' && category !== '' && content !== '') {
			const listElement = elementBuilder(reviewList, 'li', undefined, 'rpost');
			const newArticle = elementBuilder(listElement, 'article');
			elementBuilder(newArticle, 'h4', `${title}`);
			elementBuilder(newArticle, 'p', `Category: ${category}`);
			elementBuilder(newArticle, 'p', `Content: ${content}`);
			const editButton = elementBuilder(listElement, 'button', 'Edit', 'action-btn edit');
			const approveButton = elementBuilder(listElement, 'button', 'Approve', 'action-btn approve');

			editButton.addEventListener('click', editing);
			approveButton.addEventListener('click', approving);
			input.title.value = '';
			input.category.value = '';
			input.content.value = '';

			function editing() {
				input.title.value = title;
				input.category.value = category;
				input.content.value = content;

				listElement.remove();
			}

			function approving() {
				const publishedListElement = elementBuilder(publishedList, 'li', undefined, 'rpost');
				const publishedArticle = elementBuilder(publishedListElement, 'article');
				elementBuilder(publishedArticle, 'h4', `title`);
				elementBuilder(publishedArticle, 'p', `Category: ${category}`);
				elementBuilder(publishedArticle, 'p', `Content: ${content}`);

				listElement.remove();
			}

		}

	}

	function clear() {
		publishedList.innerHTML = '';
	}

	function elementBuilder(parent, type, text, className) {
		const newElement = document.createElement(type);
		if (text) { newElement.textContent = text; }
		if (className) { newElement.className = className; }
		parent.appendChild(newElement);

		return newElement;
	}
}
