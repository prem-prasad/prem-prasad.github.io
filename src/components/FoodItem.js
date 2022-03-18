import React, {useState} from "react";
import FoodCard from "./FoodCard";


const FoodItem = ({setFilteredData,data}) => {

    const handleClick = (obj) =>{
        setFilteredData(data.map((item)=>{
            if(item.foodid!==obj.foodid) return item
            const ob=JSON.parse(JSON.stringify(item))
            ob.outofstock=!ob.outofstock
            return ob
        }))
    }

  return data.sort((a,b)=>a.foodname>b.foodname?1:-1).map((item)=>{
      return ( 
        <div className="card" key={item.foodid} onClick={()=>handleClick(item)}>
            <FoodCard foodObj={item}/>
        </div>
      )
  })
};

export default FoodItem;
