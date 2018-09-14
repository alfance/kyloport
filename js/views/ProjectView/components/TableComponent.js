import React from 'react'
import ReactTable from "react-table";

export default class TableComponent extends React.Component {
    render() {
        const {data, columns} =this.props.content
        const rowCount = ({columns}).length
        console.log('row count :::', rowCount)

return (
    <ReactTable
      data={data}
      columns={columns}
      resolveData={data => data.map(row => row)}
      showPagination ={false}
      minRows = {2}
    />
)
  }
}
