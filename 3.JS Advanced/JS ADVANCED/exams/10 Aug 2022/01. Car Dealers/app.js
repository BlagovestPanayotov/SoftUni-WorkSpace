window.addEventListener("load", solve);

function solve() {
	const input = {
		make: document.getElementById('make'),
		model: document.getElementById('model'),
		year: document.getElementById('year'),
		fuel: document.getElementById('fuel'),
		originalCost: document.getElementById('original-cost'),
		sellingPrice: document.getElementById('selling-price'),
	}
	let totalProfit = 0;

	const totalProfitContainer = document.getElementById('profit');


	const carsForSellTable = document.getElementById('table-body');
	const soldCarsList = document.getElementById('cars-list');

	const publishBtn = document.getElementById('publish');
	publishBtn.addEventListener('click', publishEvent);

	function publishEvent(event) {
		event.preventDefault();
		const make = input.make.value;
		const model = input.model.value;
		const year = input.year.value;
		const fuel = input.fuel.value;
		const originalCost = input.originalCost.value;
		const sellingPrice = input.sellingPrice.value;
		if (make !== '' && model !== '' && year !== '' && fuel !== ''
			&& originalCost !== '' && sellingPrice !== ''
			&& Number(sellingPrice) >= Number(originalCost)) {

			const newRow = elementBuilder(carsForSellTable, 'tr', '', '', 'row');
			elementBuilder(newRow, 'td', `${make}`);
			elementBuilder(newRow, 'td', `${model}`);
			elementBuilder(newRow, 'td', `${year}`);
			elementBuilder(newRow, 'td', `${fuel}`);
			elementBuilder(newRow, 'td', `${originalCost}`);
			elementBuilder(newRow, 'td', `${sellingPrice}`);
			const editBtn = elementBuilder(newRow, 'button', 'Edit', 'action-btn edit');
			const sellBtn = elementBuilder(newRow, 'button', 'Sell', 'action-btn sell');

			editBtn.addEventListener('click', editPost);
			sellBtn.addEventListener('click', sellCar);

			input.make.value = '';
			input.model.value = '';
			input.year.value = '';
			input.fuel.value = '';
			input.originalCost.value = '';
			input.sellingPrice.value = '';

			function editPost() {
				input.make.value = make;
				input.model.value = model;
				input.year.value = year;
				input.fuel.value = fuel;
				input.originalCost.value = originalCost;
				input.sellingPrice.value = sellingPrice;
				newRow.remove();
			}
			function sellCar() {
				const newListElement = elementBuilder(soldCarsList, 'li', undefined, 'each-list');
				const currentProfit = Number(sellingPrice) - Number(originalCost);
				totalProfit += currentProfit;
				elementBuilder(newListElement, 'span', `${make} ${model}`);
				elementBuilder(newListElement, 'span', `${year}`);
				elementBuilder(newListElement, 'span', `${currentProfit}`);

				totalProfitContainer.textContent = totalProfit.toFixed(2);

				newRow.remove();
			}
		}
	}
	function elementBuilder(parent, type, text, className) {
		const newElement = document.createElement(type);
		if (text) { newElement.textContent = text; }
		if (className) { newElement.className = className; }
		if (parent) { parent.appendChild(newElement); }
		return newElement;
	}

}		
