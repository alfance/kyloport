import React from 'react'
import ReactTable from "react-table";

export default class TableComponent extends React.Component {
    render() {
        const {data, columns, content, title} =this.props.content
        const rowCount = ({columns}).length
        console.log('row count :::', rowCount)

return (
    <div>
        <h3>{title}</h3>
        <p>{content}</p>
    <ReactTable
      data={data}
      columns={columns}
      resolveData={data => data.map(row => row)}
      showPagination ={false}
      minRows = {4}
    />
</div>
)
  }
}
