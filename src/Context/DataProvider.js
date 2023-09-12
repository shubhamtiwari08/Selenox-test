import React, { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const DataContext = createContext();


const post = async () => {
  const result = await fetch("https://sweede.app/DeliveryBoy/Get-Employee", {
    method: "POST",
  });
};

function DataProvider({ children }) {

  //employee state
  const [employeeData,setEmployeeData] = useState([])


  //useState for datepicker
  const [value, setValue] = useState("");

  //toggle for various dropdown and edit options
  const [toggle, setToggle] = useState(false);

  //registration form data state

  const initialState = {
    FirstName: "",
    LastName: "",
    DOB: "",
    Study: "",
    StartDate: "",
    EndDate: "",
    CurrentSalary: "",
    Description: "",
  }

  const [formData, setFormData] = useState(initialState);

  const Navigate=useNavigate()

  //getting employee data

const getData = async () => {
  const result = await fetch("https://sweede.app/DeliveryBoy/Get-Employee/");
  const data = await result.json();
  setEmployeeData(data);
};

  //post employee data function

  const registerNewEmployee = async (data) => {
    console.log(data);
    const res = await fetch(
      'https://sweede.app/DeliveryBoy/Add-Employee/',
      {
        method:"POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  };

  //update existing employee

  const updateEmployee = async (data,id) => {
    console.log(data);
    const res = await fetch(
      `https://sweede.app/DeliveryBoy/update-Employee/${id}`,
      {
        method:"POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  };

  //delete existing employee

  const deleteEmployee = async (id) => {
    const res = await fetch(
      `https://sweede.app/DeliveryBoy/delete-Employee/${id}`,
      {
        method:"DELETE",
      }
    );
  };


  return (
    <DataContext.Provider
      value={{
        getData,
        formData,
        setFormData,
        toggle,
        setToggle,
        registerNewEmployee,
        value,
        setValue,
        employeeData,
        Navigate,
        updateEmployee,
        deleteEmployee,
        initialState
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
