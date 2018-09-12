import React from 'react'
import ReactTable from "react-table";

export default class TableComponent extends React.Component {
    render() {
    const data = [{
      name: 1,
      age: 'Professional',
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
  }]
    const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Friend Name',
    accessor: d => d.friend.name // Custom value accessors!
  }, {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
  }]
return (
    <ReactTable
      data={data}
      columns={columns}
      resolveData={data => data.map(row => row)}
      showPagination ={false}
      minRows = {5}
    />
)
  }
}
