import React from "react"
import { Table } from "react-bootstrap"

const columns = [
  {id:'username',label:'Username'},
  {id:'email',label:'Email'}
]
function createData(username,email){
  return(username,email)
}
const rows = [
  {username:'krisna',email:'krisna@gmail.com'}
]
function TablePlayer (){

return(
<Table responsive>
  <thead>
    <tr>
    {columns.map((column) => (
        <td key={column.id}
        align={column.align}
      >{column.label}</td>
      ))}
        
    </tr>
  </thead>
  <tbody> 
    <tr>
    

    </tr>
  </tbody>
</Table>
)
}
export default TablePlayer