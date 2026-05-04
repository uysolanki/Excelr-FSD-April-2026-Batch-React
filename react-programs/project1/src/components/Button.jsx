import React from 'react'
import './Button.css'

const Button = (props) => {
    const buttonStyles={backgroundColor:props.mycolor}
  return (
    <>
    {/* <button style={buttonStyles} onClick={props.handleClick} >{props.mytext}</button> */}
    <button style={{backgroundColor:props.mycolor}} onClick={props.handleClick} >{props.mytext}</button> 
    </>
  )
}

export default Button

//Mahendra Singh Dhoni

//Pascal case MahendraSinghDhoni    Component name
//Camel case mahendraSinghDhoni     function/variabl name
//All caps   MAHENDRASINGHDHONI     constant
//all small  mahendrasinghdhoni     package/ folder name
//kebab case mahendra-singh-dhoni   css properties  background-color
//snake case mahendra_singh_dhoni