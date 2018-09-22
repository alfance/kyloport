import React from 'react'
import classNames from 'classnames'

export default class TitleDivider extends React.Component {
  render () {
    const {title} = this.props.content
    const {color, textonColor} = this.props.style
    console.log('test color :::::::', textonColor)
    const divStyle = {
      backgroundColor: color
    }
    return (
      <h3 className={classNames('project-component-title', textonColor)} style={divStyle}> {title}</h3>
    )
  }
}
