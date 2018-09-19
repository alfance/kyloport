import React from 'react'
import classNames from 'classnames'

export default class FindingComponent extends React.Component {
  render () {
    const {subtitle, content} = this.props.content
    const {color, TextonColor} = this.props.style

    const divStyle = {
      borderWidth: 1,
      borderColor: color,
      borderStyle: 'solid'
    }
    return (
      <div className={classNames('finding-div')} style={divStyle}><b style={{color: color}}>{subtitle} </b> {content}</div>
    )
  }
}
