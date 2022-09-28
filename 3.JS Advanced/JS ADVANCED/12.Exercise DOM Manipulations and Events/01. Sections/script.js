function create(words) {
   const input = JSON.parse(JSON.stringify(words));
   const parentDiv = document.getElementById('content');

   for (let word of input) {

      const newDiv = document.createElement('div');
      const newParagraph = document.createElement('p');
      // const newText = document.createTextNode(word);

      newParagraph.textContent = word;
      newParagraph.style.display = 'none';
      newDiv.appendChild(newParagraph);

      newDiv.addEventListener('click', onClick);

      function onClick(ev) {
         ev.target.querySelector('p').style.display = 'block';
      }

      parentDiv.appendChild(newDiv)
   }
}