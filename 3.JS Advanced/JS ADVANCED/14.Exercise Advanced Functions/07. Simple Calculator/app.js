function calculator() {

    // const obj = {
    //     num1 : null,
    //     num2 : null,
    //     result : null,
    // }

    let num1 = null;
    let num2 = null;
    let result = null;


    const commands = {
        init,
        add,
        subtract,
    }

    return commands;

    function init(n1, n2, r) {
        num1 = document.querySelector(n1);
        num2 = document.querySelector(n2);
        result = document.querySelector(r);
    }

    function add() {
        result.value = Number(num1.value) + Number(num2.value)
    }

    function subtract() {
        result.value = Number(num1.value) - Number(num2.value)
    }

}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');



