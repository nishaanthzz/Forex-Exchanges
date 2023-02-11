import React, { useState } from "react";
import './PhoneNoForm.css';
import WhatsappLogo from './WhatsApp-Logo.svg'
const PhoneNoForm=()=>
{ const [num,setNum]=useState("");
 const [showChoices,setShowChoices]=useState("");
 const sendWhatsappMessage=()=>
 {

 }
   return(
        <div className="phoneformbody">
            <h2 className="qn">
                Would you like to receive daily WhatsApp updates on daily Forex Exchange Values?
            </h2>
            <form className="Form"
            onSubmit={()=>{}}>
            <img className="WAlogo" src={WhatsappLogo} alt="Whatsapp" />

            
                <h4>
                +91
                </h4>
            
            <input  
            className="ph"
            type="number" 
            maxlength="10"
            placeholder="Type your Phone Number"
            onChange={(e)=>{setNum(e.target.value)}} 
            />
            <button onClick={sendWhatsappMessage}>Submit</button>
            
        </form>
        <h5>{num}</h5>
       
        </div>
   );
}
export default PhoneNoForm;