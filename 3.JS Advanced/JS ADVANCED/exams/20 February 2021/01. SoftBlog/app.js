function solve() {

	const input = {
		creator: document.getElementById('creator'),
		title: document.getElementById('title'),
		category: document.getElementById('category'),
		content: document.getElementById('content'),
	}

	const createBtn = document.querySelector('.btn.create');
	createBtn.addEventListener('click', createArticle);

	const postSection = document.querySelector('main section');

	const archiveList = document.querySelector('.archive-section ol');


	function createArticle(event) {
		event.preventDefault()

		const newArticle = elementBuilder(postSection, 'article');
		const title = elementBuilder(newArticle, 'h1', input.title.value);
		const categoryElement = elementBuilder(newArticle, 'p', 'Category:');
		elementBuilder(categoryElement, 'strong', input.category.value);
		const creator = elementBuilder(newArticle, 'p', 'Creator:');
		elementBuilder(creator, 'strong', input.creator.value);
		elementBuilder(newArticle, 'p', input.content.value);
		const buttonContainer = elementBuilder(newArticle, 'div', undefined, 'buttons');
		elementBuilder(buttonContainer, 'button', 'Delete', 'btn delete', deleteArticle);
		elementBuilder(buttonContainer, 'button', 'Archive', 'btn archive', moveToArchive);


		function deleteArticle() {
			newArticle.remove();
		}
		function moveToArchive() {


			const sorted = Array.from(archiveList.children);
			
			sorted.push(elementBuilder(archiveList, 'li', title.textContent));
			sorted.sort((a, b) => a.textContent.localeCompare(b.textContent));

			archiveList.innerHTML = '';

			sorted.forEach(x => archiveList.appendChild(x));
			deleteArticle()
		}
	}



	function elementBuilder(parent, tagName, content, className, eventListener) {
		const newElement = document.createElement(tagName);
		parent.appendChild(newElement);
		if (content) { newElement.textContent = content; }
		if (className) { newElement.className = className; }
		if (eventListener) { newElement.addEventListener('click', eventListener); }

		return newElement;
	}

}
