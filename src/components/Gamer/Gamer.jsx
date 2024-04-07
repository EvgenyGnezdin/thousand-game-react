import { useState } from 'react';
import PropTypes from 'prop-types'
import styles from './Gamer.module.scss'

const Gamer = ({ name }) => {

    const [number, setNumber] = useState('')
    const [counter, setCounter] = useState(0)


    const handleIncCounter = (event) => {
        event.preventDefault()
        setCounter(prev => +prev + +number)
        setNumber('')
    }
    const handleDecCounter = (event) => {
        event.preventDefault()
        setCounter(prev => +prev - +number)
        setNumber('')
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.infoPlayer}>
                <h4>Счет: {counter} </h4>
                <h3>{name}</h3>
            </div>
            <div className={styles.inputBlock}>
                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
                <button onClick={handleIncCounter}>+</button>
                <button onClick={handleDecCounter}>-</button>
            </div>
        </div>
    )
}

Gamer.propTypes = {
    name: PropTypes.string.isRequired
}

export default Gamer;