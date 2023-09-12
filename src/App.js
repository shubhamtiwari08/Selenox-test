import { Route, Routes } from "react-router";
import "./App.css";
import EmployeeList from "./Components/EmployeeList";
import { useContext, useEffect } from "react";
import { DataContext } from "./Context/DataProvider";
import RegistrationForm from "./Components/RegistrationForm";
import DropDown from "./Components/DropDown";
import SingleEmployeeDetail from "./Components/SingleEmployeeDetail";

function App() {

  const {getData} = useContext(DataContext)

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
      <main>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<EmployeeList />} />
            <Route path="/registrationForm" element={<RegistrationForm/>}/>
            <Route path="/registrationForm/:id" element={<RegistrationForm/>}/>
            <Route path="/Dropdowns" element={<DropDown/>}/>
            <Route path="/employees/:id" element={<SingleEmployeeDetail/>}/>
            
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
