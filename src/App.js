import icon from './icon.png';
import './App.css';
import Heading from './Heading';
import { useEffect, useState } from 'react';
import Nutrition from './Nutrition';

function App() {
  const [nutrition, setNutrition] = useState("");
  const [inputInfo, setInputInfo] = useState("");
  const [searchValue, setSearchValue] = useState("");
  
  const myId = '9c2c8eec';
  const myKey = '34a87400e610fb706b9746b8f354073c';

useEffect(() => {
  let splitedSearchValue = searchValue.split(",");
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ingr: splitedSearchValue})
    };

  const getNutritions = async() => {
    const response = await fetch(`https://api.edamam.com/api/nutrition-details?app_id=${myId}&app_key=${myKey}`, requestOptions);
    const data = await response.json();
    setNutrition(data)
    console.log(data)
  }
    if (searchValue.length !== 0) {
      getNutritions();
    }
}, [searchValue]);

const finalSearch = (e) => {
  e.preventDefault();
  setSearchValue(inputInfo)
  console.log(searchValue)
}

const handleInputInfo = (e) => {
  setInputInfo(e.target.value);
}


  return (
    <div >
      <Heading />

      <form onSubmit={finalSearch} className='input-container'>
        <input onChange={handleInputInfo} value={inputInfo} placeholder='2 avocado, 5g sesame seeds...' type="text" className='input-style' />
        <button><img className='icon' src={icon} alt="search" /></button>
      </form>

      {nutrition && Object.values(nutrition.totalNutrients)
      .map ((element, index) => {
        const {label, quantity, unit} = element;
        return(
          <Nutrition key={index} label = {label}
          quantity = {quantity.toFixed(2)}
          unit = {unit}
          calories = {nutrition.calories}/>)
      })
      }
    </div>
  );
}

export default App;
