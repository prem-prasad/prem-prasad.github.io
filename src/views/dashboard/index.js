import React, {useEffect, useState} from "react";
import originalData from "../../data/data"
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import FoodItem from "../../components/FoodItem";
import Footer from "../../components/Footer";
import "./styles.scss"

const Dashboard = () => {
    const [data, setData] =useState(originalData)
    const [selectedRestro, setSelectedRestro] =useState(Object.keys(data.menuDetails)[0])
    const [filteredData, setFilteredData] =useState(data.menuDetails[Object.keys(data.menuDetails)[0]])
    const [searchValue, setSearchValue] =useState('')
    const [allAvailFlag, setAllAvailFlag] =useState(null)

    useEffect(()=>{
        setFilteredData(data.menuDetails[selectedRestro].filter((item)=> item.foodname.toLowerCase().match(searchValue.toLowerCase())))
    },[searchValue])

    useEffect(()=>{
        if(allAvailFlag!=null){
            setFilteredData(data.menuDetails[selectedRestro].filter((item)=> allAvailFlag? !item.outofstock:item.outofstock))
        }
    },[ allAvailFlag ])

    useEffect(()=>{
        setSearchValue('')
        setAllAvailFlag(null)
        setData(data)
        setFilteredData(data.menuDetails[selectedRestro])
    },[selectedRestro])

const handleApply = () =>{
    data.menuDetails[selectedRestro]=[...filteredData,...data.menuDetails[selectedRestro].filter((item)=> allAvailFlag===null?false:allAvailFlag? item.outofstock:!item.outofstock)]
}


  return (
    <div className="main-container">
      <div className="header">

          <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="body">
        <div className="sidebar">
            <Sidebar selectedRestro={selectedRestro} setSelectedRestro={setSelectedRestro} data={Object.keys(data.menuDetails)}/>
        </div>
        <div className="content-page">
            <FoodItem setFilteredData={setFilteredData} data={filteredData}/>
        </div>
      </div>
      <div className="footer">
          <Footer handleApply={handleApply} allAvailFlag={allAvailFlag} setAllAvailFlag={setAllAvailFlag} />
      </div>
    </div>
  );
};

export default Dashboard;
