import icon from './icon.png';
import './App.css';
import Heading from './Heading';
import { useEffect, useState } from 'react';
import Nutrition from './Nutrition';
import Swal from 'sweetalert2';
import LoaderPage from './LoaderFolder/LoaderPage';

function App() {
  const [nutrition, setNutrition] = useState("");
  const [inputInfo, setInputInfo] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [stateLoader, setStateLoader] = useState(false);
  
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
    setStateLoader(true);
    const response = await fetch(`https://api.edamam.com/api/nutrition-details?app_id=${myId}&app_key=${myKey}`, requestOptions);

    if (response.ok) {
      setStateLoader(false);
      const data = await response.json();
      setNutrition(data);
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingredients entered incorrectly. Please try again.',
        color: '#00000090',
        confirmButtonColor: '#59C9A5'
      })
      setStateLoader(false)
    }
  }
    if (searchValue.length !== 0) {
      getNutritions();
    }
}, [searchValue]);

const finalSearch = (e) => {
  e.preventDefault();
  setSearchValue(inputInfo)
}

const handleInputInfo = (e) => {
  setInputInfo(e.target.value);
}

  return (
    <div >
      {stateLoader && <LoaderPage />}
      <Heading />
      <form onSubmit={finalSearch} className='input-container'>
        <input onChange={handleInputInfo} value={inputInfo} placeholder='2 avocado, 5g sesame seeds...' type="text" className='input-style' />
        <button className='searchBtn'><img className='icon' src={icon} alt="search" /></button>
      </form>
      {nutrition &&
        <Nutrition nutrition = {nutrition}/>
      }
    </div>
  );
}

export default App;
