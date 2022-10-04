function notify(message) {
	const messageContainer = document.getElementById('notification');
	messageContainer.textContent = message;
	messageContainer.style.display = 'block';
	messageContainer.addEventListener('click', hide);

	function hide() {
		messageContainer.textContent = '';
		messageContainer.style.display = 'none';
	}
}