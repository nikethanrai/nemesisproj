import React,{useState} from 'react';
import MaterialTable from 'material-table'

const Table = () => {

const [tableData,setTableData]=useState([
    {name:'Leonard',username:'leo45',email:'leonard34@gmail.com',phone:9000000000,website:'leon.com'},
    {name:'Penny',username:'Pen45',email:'penny68@gmail.com',phone:9008950000,website:'penn.com'},
    {name:'Lowdward',username:'leo45',email:'leonard34@gmail.com',phone:9000000000,website:'leon.com'},
    {name:'pord',username:'leo45',email:'leonard34@gmail.com',phone:9000000000,website:'leon.com'}

])

 
const columns=[
    {title:'Name',field:'name'},
    {title:'Username',field:'username'},
    {title:'Email',field:'email'},
    {title:'Phone',field:'phone'},
    {title:'Website',field:'website'}

]
    return (
        <div>
            <MaterialTable title='Nemesis DB'
            data={tableData}
            columns={columns}
            editable={{
                onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
                    setTableData([...tableData,newRow])
                    setTimeout(()=>resolve(),500)

                }),
                onRowUpdate:(newRow,oldRow)=>new Promise((resolve,reject)=>{
                    
                    const updatedData=[...tableData]
                    updatedData[oldRow.tableData.id]=newRow
                    setTableData(updatedData)
                    setTimeout(()=>resolve(),500)
                }),
                onRowDelete:(selectedRow)=>new Promise((resolve,reject)=>{
                    const updatedData=[...tableData]
                    updatedData.splice(selectedRow.tableData.id,1)
                    setTableData(updatedData)
                    setTimeout(()=>resolve(),1000)
                })
            }}

            options={{
                exportButton:true,
                addRowPosition:'first',
                actionsColumnIndex:-1}}/>
        </div>
    );
}


export default Table;