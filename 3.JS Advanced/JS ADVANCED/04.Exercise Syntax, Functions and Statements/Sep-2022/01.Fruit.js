const fruit = (...pars) =>console.log(`I need $${(pars[1] / 1000 * pars[2]).toFixed(2)} to buy ${(pars[1] / 1000).toFixed(2)} kilograms ${pars[0]}.`);


fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);