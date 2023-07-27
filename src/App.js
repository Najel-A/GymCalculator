import './App.css';
import React, {useState, button} from 'react';

function App() {
  const [weightInputText, setWeightText] = useState('');
  const [repsInputText, setRepsText] = useState('');
  const [oneRepMax, setOneRepMax] = useState('');

  const handleWeightChange = weight => {
    setWeightText(weight.target.value);
  }

  const handleRepsChange = reps => {
    setRepsText(reps.target.value);
  }

  const handleCalculateClick = () => {
    const weight = parseFloat(weightInputText);
    const reps = parseFloat(repsInputText);

    if (!isNaN(weight) && !isNaN(reps) && reps !== 0) {
      const calculatedOneRepMax = weight / ((1.0278) - (0.0278 * reps));
      setOneRepMax(calculatedOneRepMax.toFixed(1));
    } else {
      setOneRepMax();
    }
  };

  

  return (
    <div className="App">
      <h1>hi</h1>
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

      <button onClick={handleCalculateClick}>Calculate</button>
      <label>
        1 Rep Max:
        <input
          type="text"
          value={oneRepMax}
          readOnly
        />
      </label>
    </div>
  );
}

export default App;
