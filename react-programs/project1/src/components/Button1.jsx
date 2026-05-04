import React from 'react'
import './Button.css'

const Button1 = ({mycolor,mytext="Apple",handleClick}) => {
    const buttonStyles={backgroundColor:mycolor,color:'white'}

    const player={
      jno:18,
      pname:'Virat',
      mp:100,
      rs:5000
    }

    const {pname,mp:matches}=player  //object destructing
    console.log(`My Fav player is ${pname} has played ${matches} matches`)
    const cars=["Audi","BMW","Merc"]

    const [a,b,c]=cars  //Array destructuring
    console.log(`My Fav player is ${c}`)
   
  return (
    <>
    {/* <button style={buttonStyles} onClick={props.handleClick} >{props.mytext}</button> */}
    {/* <button style={buttonStyles} onClick={handleClick} >{mytext}</button>  */}
     <button className={mycolor} onClick={handleClick} >{mytext}</button> 
    </>
  )
}

export default Button1

//Mahendra Singh Dhoni

//Pascal case MahendraSinghDhoni    Component name
//Camel case mahendraSinghDhoni     function/variabl name
//All caps   MAHENDRASINGHDHONI     constant
//all small  mahendrasinghdhoni     package/ folder name
//kebab case mahendra-singh-dhoni   css properties  background-color
//snake case mahendra_singh_dhoni