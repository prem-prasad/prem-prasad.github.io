import React, {useState} from "react";

const Sidebar = ({selectedRestro,setSelectedRestro,data}) => {
  return data.map((item)=>{
      return <div className={`${item===selectedRestro?"selected":null} restro`} onClick={()=>setSelectedRestro(item)} key={item}>{item}</div>
  })
};

export default Sidebar;
