import React from 'react'
import classNames from 'classnames'

export default class TitleDivider extends React.Component {
  render () {
    const {title} = this.props.content
    const {color, textonColor} = this.props.style

    const divStyle = {
      color: color
    }
    return (
      <h2 className={classNames('project-component-title')} style={divStyle}> {title}</h2>
    )
  }
}
