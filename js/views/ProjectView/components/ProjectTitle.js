import React from 'react'

export default class ProjectTitle extends React.Component {
  render () {
      const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

    return (
     <BootstrapTable keyField='id' data={ products } columns={ columns } />
    )
  }
}
