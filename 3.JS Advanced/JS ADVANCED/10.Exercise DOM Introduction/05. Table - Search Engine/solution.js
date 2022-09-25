function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchText = document.getElementById('searchField').value;

      let collection = document.querySelectorAll('tbody tr');

      for (let el of collection) {
         if (searchText !== '' && el.textContent.includes(searchText)) {
            el.className = 'select';
         } else {
            el.classList.remove('select');
         }

      }

   }
}