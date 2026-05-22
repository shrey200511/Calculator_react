import { Card } from "./common/card"
import { Heading } from "./common/heading"
import { useState } from "react"

function App() {
  let [result,setResult] = useState('0')
function numberOnClick(id:any) {
  return function() {
    setResult(result+id);
    return id;
  };
}

function OnClickEqual(){
const data= result.split(/[+-/*]\s*/)
const num1=Number(data[0])
const num2=Number(data[1])
console.log(data)

 
  if(result.includes("+")){
    setResult(String(num1+num2));
  }
  else if(result.includes("-")){
    setResult(String(num1-num2));
  }
    else if(result.includes("*")){
     setResult(String(num1*num2));
  }
    else if (result.includes("/")){
       setResult(String(num1/num2));
    
  }
  }
  function OnclickC(){
    setResult(" ")
  }
  return (

  // <div >
  //   <ul>
  //     <li className="flex flex-col padding py-2 w-1/8"></li>
  //   <li className="flex flex-col padding py-2 w-1/8">S</li>
  //   <li className="flex flex-col padding py-2 ">THIRD</li>
  //   </ul>
    

    
   
    <div className=" w-7/8 content-align-center border border-4px rounded-lg bg-gray-400 margin m-20 padding p-10 ">
      <Heading brand="casio" color="black" />
      <div className=" border border-4px rounded-lg margin m-4 padding p-20 bg-gray-200 " >
            <p className=" grid place-items-center border rounded-lg border-3 p-4 text-center col-span-2"> Result : {result}</p> 

          <div className="grid place-items-center grid-cols-3 grid-rows-3 gap-x-4 gap-y-4 ">
            

            <Card id = {1} onClick={numberOnClick(1)} />
            <Card id = {2} onClick={numberOnClick(2)} />
            <Card id = {3} onClick={numberOnClick(3)}/>
            <Card id = {4} onClick={numberOnClick(4)} />
            <Card id = {5} onClick={numberOnClick(5)} />
            <Card id = {6} onClick={numberOnClick(6)} />
            <Card id = {7} onClick={numberOnClick(7)} />
            <Card id = {8} onClick={numberOnClick(8)} />
            <Card id = {9} onClick={numberOnClick(9)} />
            <Card id ='+' onClick={numberOnClick('+')}/>
            <Card id ='-'onClick={numberOnClick('-')} />
            <Card id ='*'onClick={numberOnClick('*')}/>  
            <Card id ='/'onClick={numberOnClick('/')} />
            <Card id ='C'onClick={OnclickC} />
            <Card id="=" onClick={OnClickEqual} />
          </div>
       
    </div>

    </div>
  
  // </div>
  )
}


export default App



