import React from 'react'
import classNames from 'classnames'

export default class TitleDivider extends React.Component {
  render () {
      const {title} = this.props.content
      const {color, TextonColor} =this.props.style

      const divStyle = {
      backgroundColor: color
};
    return (
      <h3 className={classNames('project-component-title',TextonColor)} style={divStyle}> {title}</h3>
    )
  }
}
