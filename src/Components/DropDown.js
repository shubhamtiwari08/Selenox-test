import React, { useContext, useState } from "react";
import { DataContext } from "../Context/DataProvider";
import "./Component.css";
import Calendar from "./Calendar";

function Profile() {
  return (
    <div className="profile">
      <img
        src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
        alt="user-img"
      />
    </div>
  );
}

function DropDown() {
  const { toggle, setToggle, employeeData ,Navigate} = useContext(DataContext);

  const [checkToggle,setCheckToggle] = useState(false)

  const [filterData, setFilterData] = useState(employeeData);

  const handleSearch = (e) => {
    setFilterData(
      employeeData.filter(
        ({ FirstName, LastName }) =>
          FirstName.toLowerCase().includes(e.target.value) ||
          LastName.toLowerCase().includes(e.target.value)
      )
    );
  };

  return (
    <div className="drop-downs">

    <button onClick={()=>Navigate('/')}>Back</button>
      <div className="search">
        <h2>Select Employee DropDown</h2>
        <div className="count-container">
          <div className="profile white first">
            <h4 style={{ color: "white" }}>{filterData.length}</h4>
          </div>
          <div className="profile white second"></div>
          <div className="profile white third"></div>
        </div>

        <div className="employee-count"></div>
        <input
          type="text"
          onClick={() => setToggle(!toggle)}
          placeholder={toggle ? "All employee" : "search employee"}
          style={{ outline: "none" }}
          className="select-employee"
          readOnly
        />
        {toggle && (
          <div className="search-list">
            <ul>
              <li>
                {" "}
                <input
                  type="text"
                  onClick={() => setToggle(true)}
                  onChange={(e) => handleSearch(e)}
                  className="search-employee-input"
                  placeholder="Search employee.."
                />
              </li>
              <li>
                {" "}
                <div className="count-container in-search-count">
                  <div className="profile blue first">
                    <h4 style={{ color: "white" }}>{filterData.length}</h4>
                  </div>
                  <div className="profile blue second"></div>
                  <div className="profile blue third"></div>
                  <p style={{marginLeft:"2rem",width:"7.5rem"}}>All employees</p>
                  <input type="checkbox" className="checkName allcheck" onClick={()=>setCheckToggle(!checkToggle)} />
                </div>
              </li>
              {filterData.map((data) => (
                <li>
                  <Profile />
                  <p>{data.FirstName + " " + data.LastName}</p>
                  <input type="checkbox" className="checkName"   checked={checkToggle}/>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="date-picker-container">
        <h2>Date picker</h2>
        <br />
        <Calendar />
      </div>
    </div>
  );
}

export default DropDown;
