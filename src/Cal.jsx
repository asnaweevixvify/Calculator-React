import { useState } from 'react'
import './App.css'
import { sqrt } from 'mathjs'
import { create, all } from 'mathjs'

function Cal(){
    const[displayValue,setDisplayValue] = useState(0)
    const config = { }
    const math = create(all, config)
    return(
        <>
        <input type='text' readOnly className='display' value={displayValue}></input>
        <div className='cal-container'>
            <div className="col1">
                <span onClick={() => showDisplay('7')}>7</span>
                <span onClick={() => showDisplay('4')}>4</span>
                <span onClick={() => showDisplay('1')}>1</span>
                <span onClick={() => showDisplay('0')}>0</span>
            </div>
            <div className="col2">
                <span onClick={() => showDisplay('8')}>8</span>
                <span onClick={() => showDisplay('5')}>5</span>
                <span onClick={() => showDisplay('2')}>2</span>
                <span onClick={() => showDisplay('.')}>.</span>
            </div>
            <div className="col3">
                <span onClick={() => showDisplay('9')}>9</span>
                <span onClick={() => showDisplay('6')}>6</span>
                <span onClick={() => showDisplay('3')}>3</span>
                <span onClick={() => showDisplay('=')}>=</span>
            </div>
            <div className="col4">
                <span onClick={() => showDisplay('/')}>/</span>
                <span onClick={() => showDisplay('*')}>x</span>
                <span onClick={() => showDisplay('-')}>-</span>
                <span onClick={() => showDisplay('+')}>+</span>
            </div>
        </div>
        </>
    )

    function showDisplay(newNum){
        if (displayValue === 0) {
            setDisplayValue(newNum);
        }
        else if(newNum === '='){
            try{
                setDisplayValue(math.evaluate(displayValue))
            }
            catch(err){
                setDisplayValue('error')
            }
        } else {
            setDisplayValue(displayValue+newNum)
        }

    }


}

export default Cal