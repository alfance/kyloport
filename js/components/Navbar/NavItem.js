import React from 'react'

export default class NavItem extends React.Component {
  constructor (props) {
    super()
  }
  render () {
    const {id, name, link} = this.props
    return (
      <div>
        <p>{name}</p>
      </div>
    )
  }

}
