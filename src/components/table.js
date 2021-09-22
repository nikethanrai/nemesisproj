import React, { useState,useEffect } from 'react';
import MaterialTable from 'material-table'

const Table = ({users}) => {

    const [tableData, setTableData] = useState()


    const columns = [
        { title: 'Name', field: 'name' },
        { title: 'Username', field: 'username' },
        { title: 'Email', field: 'email' },
        { title: 'Phone', field: 'phone' },
        { title: 'Website', field: 'website' }

    ]

    useEffect(() => {
        setTableData(users);
        console.log(users);
    }, [users]);

    return (
        <div>
            <MaterialTable title='Nemesis DB'
                data={tableData}
                columns={columns}
                editable={{
                    onRowAdd: (newRow) => new Promise((resolve, reject) => {
                        setTableData([...tableData, newRow])
                        setTimeout(() => resolve(), 500)

                    }),
                    onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {

                        const updatedData = [...tableData]
                        updatedData[oldRow.tableData.id] = newRow
                        setTableData(updatedData)
                        setTimeout(() => resolve(), 500)
                    }),
                    onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
                        const updatedData = [...tableData]
                        updatedData.splice(selectedRow.tableData.id, 1)
                        setTableData(updatedData)
                        setTimeout(() => resolve(), 1000)
                    })
                }}

                options={{
                    exportButton: true,
                    addRowPosition: 'first',
                    actionsColumnIndex: -1
                }} />
        </div>
    );
}


export default Table;