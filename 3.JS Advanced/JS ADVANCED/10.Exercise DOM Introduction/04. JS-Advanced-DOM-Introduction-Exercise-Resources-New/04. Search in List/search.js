function search() {
   let towns = document.querySelectorAll('#towns li');
   let searchText = document.querySelector('#searchText').value;

   let matches = 0;

   for (let town of towns) {
      if (town.textContent.includes(searchText)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      }else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   document.getElementById('result').textContent = `${matches} matches found`
}
