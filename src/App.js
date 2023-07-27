import './App.css';
import React, {useState, button} from 'react';

function App() {
  const [weightInputText, setWeightText] = useState('');
  const [repsInputText, setRepsText] = useState('');
  const [oneRepMax, setOneRepMax] = useState('');

  const handleWeightChange = weight => {
    const numericValue = weight.target.value.replace(/\D/g, '');
    setWeightText(numericValue);
  }

  const handleRepsChange = reps => {
    const numericValue = reps.target.value.replace(/\D/g, '');
    setRepsText(numericValue);
  }

  const handleCalculateClick = () => {
    const weight = parseFloat(weightInputText);
    const reps = parseFloat(repsInputText);

    if (!isNaN(weight) && !isNaN(reps) && reps !== 0) {
      const calculatedOneRepMax = weight / ((1.0278) - (0.0278 * reps));
      setOneRepMax(calculatedOneRepMax.toFixed(2));
    } else {
      setOneRepMax();
    }
  };

  const handleClearClick = () => {
    setWeightText('');
    setRepsText('');
    setOneRepMax('');
  }

  

  return (
    <div className='container'>
      <div className="rectangle-box">
        <h1>1 Rep Max Calculator</h1>
        <label>
          Weight:
          <input
            type="text"
            value={weightInputText}
            onChange={handleWeightChange}
          />
        </label>

        <label>
          Reps:
          <input
            type="text"
            value={repsInputText}
            onChange={handleRepsChange}
          />
        </label>

        <label>
          1 Rep Max:
          <input
            type="text"
            value={oneRepMax}
            readOnly
          />
        </label>
        <div className="button-container">
          <button onClick={handleCalculateClick}>Calculate</button>
          <button onClick={handleClearClick}>Clear</button>
        </div>
      </div>
    </div>
  );
}
export default App;
