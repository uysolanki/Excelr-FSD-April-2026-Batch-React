import React from 'react'
import './Counter.css'
import { useState } from 'react'
const Counter = () => {
    //let counter=0
    //whatever prefix "use.." is known as hooks in react
    let [counter, setCounter] = useState(0)    //initial counter
    function increment() {
        if (counter <= 9)
            setCounter(++counter)
        else
            alert('Limit Reached')
    }

    return (
        <div>
            <button onClick={increment}>My Increment</button>
            <button onClick={() => {
                if (counter > 0)
                    setCounter(--counter)
                else
                    alert('Limit Reached')
            }}>My Decrement</button>
            <button>My Increment by 2</button>
            <button>My Decrement by 2</button>
            <span>{counter}</span>
        </div>
    )
}

export default Counter