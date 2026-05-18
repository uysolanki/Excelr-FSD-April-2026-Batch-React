import React, { useCallback } from 'react'

const Test1 = () => {

    // function createFunction() {
    //     return function () {
    //         console.log("Hello")
    //     }
    // }

    // const f1 = createFunction()  //”hello“         123
    // const f2 = createFunction()  //”hello“   	 456
    // f1()
    // f2()
    // console.log(f1===f2)	



    const createFunction = useCallback(
        () => {
        console.log("Hello");
    }, []);

    const f1 = createFunction()      //123
    const f2 = createFunction()      //123
    console.log(f1 === f2)


  return (
    <>
    Demo
    </>
  )
}

export default Test1