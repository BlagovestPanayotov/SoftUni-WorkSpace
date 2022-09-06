function solve() {

  const sections = document.getElementsByTagName('section');
  console.log(sections);


  for (const section of sections) {
    const pars = section.querySelectorAll('p')
    for (const p of pars) {
      p.addEventListener('click', quiz);
    }
  }

  const rightAnswers = [
    'onclick',
    'JSON.stringify()',
    'A programming API for HTML and XML documents'
  ]

  let points = 0;
  let counter = 0;

  function quiz(ev) {
    const answer = ev.target.textContent;
    if (rightAnswers.includes(answer)) {
      points++;
    }
    sections[counter].style.display = 'none';
    counter++;
    if (counter === 3) {
      console.log(1231231);
      const result = document.querySelector('#results');
      const text = result.querySelector('li h1');
      result.style.display = 'block';
      if (points < 3) {
        text.textContent = `You have ${points} right answers`;
        return;
      }
      text.textContent = 'You are recognized as top JavaScript fan!';
      return;
    }
    sections[counter].style.display = 'block';
  }

}
