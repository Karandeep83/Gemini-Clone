import { createContext, use, useEffect, useState } from "react";

import main from "../config/gemini";



export const Context = createContext();





const ContextProvider=(props)=>{

const [input, setinput] = useState("");
const [recentPrompt, setrecentPrompt] = useState("");
const [prevPrompt,setprevPrompt]=useState([]);
const [showResult, setshowResult] = useState(false);
const [loading, setloading] = useState(false);
const [resultData, setresultData] = useState("");

const delayPara=(index,nextWord)=>{

}

    const onSent= async (prompt)=>{
      setresultData("")
      setloading(true)
      setshowResult(true)
      setrecentPrompt(input)
 const response=  await main(input)
 let responseArray = response.split("**");
 let newResponse;
 for(let i=0;i<responseArray.length;i++)
 {
  if(i===0|| i%2!==1){
    newResponse += responseArray[i];
  }
  else{
    newResponse += "<b>"+responseArray[i]+"</b>";
  }
 }
 setresultData(newResponse)
 setloading(false)
 setinput("")
console.log(response)
    }


    const contextValue={
prevPrompt,
setprevPrompt,
onSent,
setrecentPrompt,
recentPrompt,
showResult,
loading,
resultData,
input,
setinput
    }



    return (

        <Context.Provider value={contextValue}>

            {props.children}

        </Context.Provider>

    )

}



export default ContextProvider