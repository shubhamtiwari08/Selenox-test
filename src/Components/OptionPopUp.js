import React, { useContext } from 'react'
import { BsFillEyeFill, BsPencilFill,BsTrashFill} from "react-icons/bs";
import { DataContext } from '../Context/DataProvider';

function OptionPopUp({details}) {

        
    const {Navigate,deleteEmployee} = useContext(DataContext)


  return (
    <div>
      <ul>
        <li onClick={()=>Navigate(`/employees/${details}`)}><BsFillEyeFill/> View</li>
        <li onClick={()=>Navigate(`/registrationForm/${details}`)}><BsPencilFill/> Edit</li>
        <li onClick={()=>deleteEmployee(details)}><BsTrashFill/> Delete</li>
      </ul>
    </div>
  )
}

export default OptionPopUp
