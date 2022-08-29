function solve() {

  let text = document.getElementById('text').value;
  let wantedCase = document.getElementById('naming-convention').value;

  let output = [];

  let textArr = text.split(' ');

  for (let word of textArr) {

    word = word.toLowerCase().split('');

    word[0] = word[0].toUpperCase();

    output.push(word.join(''));

  }


  if (wantedCase === 'Camel Case') {

    output[0] = output[0].toLowerCase();

  } else if (wantedCase !== 'Pascal Case') {

    output = ['Error!'];

  }
  document.getElementById('result').textContent = output.join('');

}
