import React from 'react'
import './Counter.css'
import { useState } from 'react'
import Button from './Button'
const Counter3 = () => {
    
    let [counter, setCounter] = useState(0)    //initial counter
    function incrementBy1() {
        if (counter <= 9)
            setCounter(counter+=1)
        else
            alert('Limit Reached')
    }

    function incrementBy2() {
        if (counter <= 9)
            setCounter(counter+=2)
        else
            alert('Limit Reached')
    }

    function decrementBy1() {
        if (counter > 0)
            setCounter(counter-=1)
        else
            alert('Limit Reached')
    }

    function decrementBy2() {
        if (counter > 1)
            setCounter(counter-=2)
        else
            alert('Limit Reached')
    }

    return (
        <div>
            {/* <button onClick={incrementBy1}>My Increment By 1</button>
            <button onClick={decrementBy1}>My Decrement By 1</button>
            <button onClick={incrementBy2}>My Increment by 2</button>
            <button onClick={decrementBy2}>My Decrement by 2</button> */}

            <Button mytext="Increment By 1" mycolor="red"/>
            <Button mytext="Decrement By 1" mycolor="blue"/>
            <Button mytext="Increment By 2" mycolor="green"/>
            <Button mytext="Decrement By 2" mycolor="yellow"/>
            <span>{counter}</span>
        </div>
    )
}

export default Counter3

/*props={
    mytext:"increment by 1",
    mycolor : "red"
}

props.mytext*/