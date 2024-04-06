import { useEffect, useState } from 'react';
import Gamer from './components/Gamer/Gamer';
import img from './assets/kosti.svg'
import styles from './App.module.scss'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [array, setArray] = useState([]);
  
  useEffect(() => {
    let storedData = localStorage.getItem('data');
    if (storedData !== null) {
      setArray(prevArray => [...prevArray, ...JSON.parse(storedData)]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(array));
  }, [array]); 

 
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function addToArray() {
    setArray(prevArray => [...prevArray, inputValue]);
    setInputValue('')
  }

  function removePlayer() {
    setArray([])
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={img} alt="kosti" />
          <h2>Тысяча</h2>
        </div>
        <div className={styles.inputBlock}>
            <label htmlFor="name">Введите имя игрока</label>
            <div>
              <input type="text" id='name' onChange={handleInputChange} value={inputValue} />
              <button onClick={addToArray}>+</button>
            </div>
        </div>
      </div>
      <div>
        {array.map((name, i) => (
          <Gamer name={name} key={i}/>
        ))}
      </div>
      <button style={{display: `${array.length == 0 ? 'none' : 'block'}` }} onClick={removePlayer}>Удалить игроков</button>
    </div>
  )
}
  
export default App;
