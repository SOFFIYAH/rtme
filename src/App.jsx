import starimg from "/star.svg";
import illust from "/illust.svg";
import Textpage1 from './text1';
import Textpage2 from './text2';
import RateButton from "./ratebuttons";
import  SubmitB from './submitbtn';
import  OutputPannel from './output';
import "./App.css"
import {  useState } from "react";
// import { useState } from "react";


function App() {
  
  
  const [newt, setNewt]=useState("0")
  const [done, setDone]= useState(false)
 
// const ctx = useContext()
  return (
    <>
    {
      done ?
      <div className="div2">
      <img src={illust} alt="illustration" style={{width:"38%", marginBottom:"20px"}}/>
      <OutputPannel gain={newt}/>
      <Textpage2/>
      </div>
    :
     <div className="div1" >
     <button className="star"><img src={starimg} alt="star image" style={{width:"69%"}} /></button>
     <Textpage1/>
     <RateButton setNewt={setNewt} newt={newt}/>
     <SubmitB onClick={()=>setDone(true)}/>
     </div>
    }
    

   

    </>
  )
}

export default App
