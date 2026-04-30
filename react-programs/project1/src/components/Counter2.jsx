import React from 'react'
import './Counter.css'
import { useState } from 'react'
const Counter2 = () => {
    //let counter=0
    //whatever prefix "use.." is known as hooks in react
    let [counter, setCounter] = useState(0)    //initial counter
    function modify(value) {
        if (counter <= 9)
            setCounter(counter+=value)
        else
            alert('Limit Reached')
    }
    return (
        <div>
            <button onClick={()=>modify(1)}>My Increment By 1</button>
            <button onClick={()=>modify(-1)}>My Decrement By 1</button>
            <button onClick={()=>modify(2)}>My Increment by 2</button>
            <button onClick={()=>modify(-2)}>My Decrement by 2</button>
            <span>{counter}</span>
        </div>
    )
}

export default Counter2