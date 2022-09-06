function solve() {
  const buttons = document.querySelectorAll('button');
  const genetareButton = buttons[0];
  genetareButton.addEventListener('click', generator);

  function generator(ev) {
    const inputArea = document.querySelector('#exercise textarea');
    const input = inputArea.value;
    const tableBody = document.querySelector('tbody');

    if (input) {
      const newFurns = JSON.parse(input);
      for (const furn of newFurns) {
        const newRow = document.createElement('tr');

        const imgEl = document.createElement('td');
        const img = document.createElement('img');
        img.src = furn['img'];
        imgEl.appendChild(img);
        newRow.appendChild(imgEl);

        const nameRow = document.createElement('td');
        const name = document.createElement('p');
        name.textContent = furn['name'];
        nameRow.appendChild(name);
        newRow.appendChild(nameRow);

        const priceRow = document.createElement('td');
        const price = document.createElement('p');
        price.textContent = furn['price'];
        priceRow.appendChild(price);
        newRow.appendChild(priceRow);

        const decFacRow = document.createElement('td');
        const decFactor = document.createElement('p');
        decFactor.textContent = furn['decFactor'];
        decFacRow.appendChild(decFactor);
        newRow.appendChild(decFacRow);

        const checkBoxRow = document.createElement('td');
        const checkBoxEl = document.createElement('input');
        checkBoxEl.type = 'checkbox';
        checkBoxRow.appendChild(checkBoxEl);
        newRow.appendChild(checkBoxRow);

        tableBody.appendChild(newRow);

      }
    }
  }

  const buyButton = buttons[1];
  buyButton.addEventListener('click', buy);

  function buy() {
    const furnitures = document.querySelectorAll('tbody tr');

    const names = [];
    let totalPrice = 0;
    let decFactorSum = 0;

    for (let furniture of furnitures) {
      const pars = furniture.children;
      const button = pars[pars.length - 1].children[0];
      if (button.checked) {
        names.push(pars[1].textContent);
        totalPrice += Number(pars[2].textContent);
        decFactorSum += Number(pars[3].textContent);
      }
    }
    if (names.length > 0) {
      let result = '';

      result += `Bought furniture: ${names.join(', ').trim()}\n`;
      result += `Total price: ${totalPrice.toFixed(2)}\n`;
      result += `Average decoration factor: ${(decFactorSum / names.length)}`
      document.querySelectorAll('#exercise textarea')[1].value = result;
    }

  }

}