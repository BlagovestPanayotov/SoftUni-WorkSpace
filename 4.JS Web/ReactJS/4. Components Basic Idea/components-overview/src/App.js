import './App.css';
import { useState } from 'react';

function App(props) {
  const [value, setValue] = useState('');
  const [action, setAction] = useState('');
  const [currentResult, setCurrentResult] = useState('');

  function updateValue(num) {
    // setCurrentResult(v => v + num);
    setValue(v => {
      if (v === undefined) {
        v = '';
      }
      return v + num;
    });
    // updateAction(null);

  }

  function aritmetricOperator(num1, num2) {
    switch (action) {
      case 'x':
        return Number(num1) * Number(num2);
      case '/':
        return Number(num1) / Number(num2);
      case '+':
        return Number(num1) + Number(num2);
      case '-':
        return Number(num1) - Number(num2);
      default:
        break;
    }
  }

  function updateAction(act) {
    if (currentResult === '') {
      setCurrentResult(0);
    }
    if (act === '=') {
      setCurrentResult(aritmetricOperator(value, currentResult.slice(0, -2)));
      setValue('');
      return;
    }
    setCurrentResult(aritmetricOperator(value, currentResult.slice(0, -2)) + ' ' + act);
    setAction(act);
    if (act !== null) {
      setValue('');
    }

  }

  function clear() {
    setValue();
    setCurrentResult('');
  }


  return (
    <div className="App">
      <h1>Calculator Design Using HTML Layout</h1>
      <div className="container">
        <div className="header">Calculator</div>
        <div type="text" className="current-result">{currentResult}</div>
        <div type="text" className="total-result">{value}</div>
        <div className="first-row">
          <input type="button" name="" value="&radic;" className="global" />
          <input type="button" name="" value="(" className="global" />
          <input type="button" name="" value=")" className="global" />
          <input type="button" name="" value="%" className="global" />
        </div>
        <div className="second-row">
          <input onClick={() => updateValue('7')} type="button" name="" value="7" className="global" />
          <input onClick={() => updateValue('8')} type="button" name="" value="8" className="global" />
          <input onClick={() => updateValue('9')} type="button" name="" value="9" className="global" />
          <input onClick={() => updateAction('/')} type="button" name="" value="/" className="global" />
        </div>
        <div className="third-row">
          <input onClick={() => updateValue('4')} type="button" name="" value="4" className="global" />
          <input onClick={() => updateValue('5')} type="button" name="" value="5" className="global" />
          <input onClick={() => updateValue('6')} type="button" name="" value="6" className="global" />
          <input onClick={() => updateAction('x')} type="button" name="" value="X" className="global" />
        </div>
        <div className="fourth-row">
          <input onClick={() => updateValue('1')} type="button" name="" value="1" className="global" />
          <input onClick={() => updateValue('2')} type="button" name="" value="2" className="global" />
          <input onClick={() => updateValue('3')} type="button" name="" value="3" className="global" />
          <input onClick={() => updateAction('-')} type="button" name="" value="-" className="global" />
        </div>
        <div className="conflict">
          <div className="left">
            <input onClick={() => updateValue('0')} type="button" name="" value="0" className=" big" />
            <input type="button" name="" value="." className=" small" />
            <input onClick={clear} type="button" name="" value="Del" className=" red small white-text top-margin" />
            <input onClick={() => updateAction('=')} type="button" name="" value="=" className=" green white-text big top-margin" />
          </div>
          <div className="right">
            <input onClick={() => updateAction('+')} type="button" name="" value="+" className="global grey plus" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



