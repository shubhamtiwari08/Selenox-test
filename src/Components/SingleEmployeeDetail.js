import React, { useContext } from 'react'
import EmployeeTable from './EmployeeTable'
import { useParams } from 'react-router'
import { DataContext } from '../Context/DataProvider'

function SingleEmployeeDetail() {

    const {employeeData,Navigate} = useContext(DataContext)

    const {id} = useParams()

    const data = employeeData.filter(data=> Number(data.id )=== Number(id))

    console.log(id)

  return (
    <div>
      <button onClick={()=>Navigate('/')}>Back</button>
      <EmployeeTable details={data}/>
    </div>
  )
}

export default SingleEmployeeDetail
