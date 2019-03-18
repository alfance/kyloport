import React from 'react'
import LayoutHelper from './LayoutHelper'

export default class LayoutNavbar extends React.Component {
  render () {
    const {color, textonColor} = this.props.style
    const divStyle = {
      color: color
    }
    return (
        <div className='project-navbar' style={divStyle}>
      {LayoutHelper.linkElement('Define')}
      {LayoutHelper.linkElement('Research')}
      {LayoutHelper.linkElement('Solution')}
      {LayoutHelper.linkElement('Design')}
      {LayoutHelper.linkElement('Result')}
    </div>)
  }
}
