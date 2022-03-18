import React from "react";

const FoodCard = ({foodObj, setData}) => {
  return <div className={`food-card ${Boolean(foodObj.outofstock)?"out-of-stock":"in-stock"}`}><span>{foodObj.foodname}</span></div>
};

export default FoodCard;
