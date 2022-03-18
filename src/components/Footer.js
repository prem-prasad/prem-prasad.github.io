import React, {useState} from "react";


const Footer = ({handleApply, allAvailFlag, setAllAvailFlag}) => {
    // const handle
  return (
      <>
      <button onClick={()=>setAllAvailFlag(false)} className={`btn ${allAvailFlag===false?'selected':null}`}>ALL UNAVAILABLE</button>
      <button onClick={()=>setAllAvailFlag(true)} className={`btn ${allAvailFlag===true?'selected':null}`}>ALL AVAILABLE</button>
      <button onClick={()=>handleApply()} className="btn">APPLY</button>
      </>
  )
};

export default Footer;
