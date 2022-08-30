function solve() {
  const text = document.querySelector('#input').value;
  const sentences = text.split('.');

  let ouptput = [];
  let result = '';
  for (let sentence of sentences) {

    if (sentence !== '') {
      ouptput.push(sentence + '.')
    }

    if (ouptput.length === 3) {
      result += `<p>${ouptput.join(' ')}</p>`
      ouptput = [];
    }
  }
  if (ouptput.length) {
    result += `<p>${ouptput.join(' ')}</p>`
  }

  document.getElementById('output').innerHTML = result;

}