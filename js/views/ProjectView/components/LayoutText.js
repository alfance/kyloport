import React from 'react'
import LayoutHelper from './LayoutHelper'

export default class LayoutText extends React.Component {
  render () {
    const {title, content} = this.props.content
    return (
      <div>
        <h3>{title}</h3>
        <ul>
          {LayoutHelper.layoutArrayContent(content)}
        </ul>
      </div>
    )
  }
}
