function loadRepos() {

	const username = document.getElementById('username').value;


	const p = fetch('https://api.github.com/users/' + username + '/repos')
		.then(handleResponse)
		.then(handleData)
		.catch(handleError);




}
const ulElement = document.getElementById('repos');

function handleResponse(response) {
	console.log(response);
	if (response.ok == false) {
		throw new Error(`Error: ${response.status} ${response.statusText}`)
	}
	ulElement.textContent = '';
	return response.json()
}
function handleData(data) {
	data.forEach(repo => {
		const li = document.createElement('li');
		const aTag = document.createElement('a');
		aTag.textContent = repo.full_name;
		aTag.href = repo.url;
		li.appendChild(aTag);
		ulElement.appendChild(li);
	});
}
function handleError(error) {
	ulElement.textContent = error.message;
}

