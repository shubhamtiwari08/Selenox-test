import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import OptionPopUp from "./OptionPopUp";

function EmployeeTable({ details }) {
  const [option, setOption] = useState("");



  const handleOption = (id) => {
     setOption(id)
     console.log(option)
  };

 

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {details.map((data) => (
            <tr>
              <td> {data.FirstName + " " + data.LastName}</td>
              <td>{data.DOB}</td>
              <td>{data.StartDate}</td>
              <td>{data.EndDate}</td>
              <td>
                <p>{data.Description}</p>
                <span onClick={() => handleOption(data.id)}>
                  <BsThreeDotsVertical className="option-btn" />
                </span>
                {data.id === option?(
                  <div
                    className="background-toggle"
                    onClick={() => handleOption(99999)}
                  ></div>):("")
                }
                {data.id === option ?(
                  <div className="option-container">
                    <>
                      <div className="option-pop">
                        <OptionPopUp details={data.id} />
                      </div>
                    </>
                  </div>
                ):("")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
