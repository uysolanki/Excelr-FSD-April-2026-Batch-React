import React from 'react'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const TestContextAPI = () => {
    //const myData=useContext(UserContext)  //pointing to the value key in UserContextProvider
                  /*myData={
                    'fruit' : 'Mango'  ,
                    'car':'Audi',
                    'player':'Virat'  
                    'user': {
                        jno:18,
                        uname:'Virat'
                        ..
                    }  
                }*/

    const {fruit,car}=useContext(UserContext)
    console.log(`I like to eat ${fruit}`)
    console.log(`I like to drive ${car}`)
   
  return (
    <>
    </>
  )
}

export default TestContextAPI