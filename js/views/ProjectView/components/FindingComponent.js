import React from 'react'
import classNames from 'classnames'
import LayoutHelper from './LayoutHelper'

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
      <div className={classNames('finding-div')}><b style={{color: color}}>{subtitle} </b> {LayoutHelper.layoutArrayContent(content)}</div>
    )
  }
}
