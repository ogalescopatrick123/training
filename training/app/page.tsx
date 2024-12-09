
"use client";
import { useState } from "react";

import StyleSheet from 'styled-jsx/css'

export default function Home() { 

  const[amount,setAmount] = useState(0);
  const[savings,setSavings] = useState(0);

  return (   

    <div className="min-h-dvh flex flex-col justify-center items-center gap-4">            

        <div>Enter Amount: 
           <input type="text" id="input" onChange ={(e)=> setAmount(parseFloat(e.target.value))}></input> 
        </div>
        <button onClick ={()=> setSavings(amount + savings)}> Deposit</button>
        <br></br>       

       <div id="header">Account Information:</div>
       <div>Savings: <span className="moneyFont">{savings}$Coins</span></div>
       <div>Interest Earned: <span className="moneyFont">0.00 $Coins</span></div>

       <button> Withraw Interest</button>
       <button id="buttonClose"> Close Account</button>
     
    </div>      
  );
}
