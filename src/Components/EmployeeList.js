import React, { useContext, useEffect, useState } from "react";
import "./Component.css";
import { DataContext } from "../Context/DataProvider";
import EmployeeTable from "./EmployeeTable";
import DropDown from "./DropDown";

function EmployeeList() {
  const{employeeData,Navigate,getData} = useContext(DataContext)


  useEffect(()=>{
    getData()
  })

  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <button onClick={()=>Navigate('/Dropdowns')}>dropdowns</button>
      <button onClick={()=>Navigate('/registrationForm')}>add new employee</button>
      <EmployeeTable details={employeeData}/>
    </div>
  );
}

export default EmployeeList;
