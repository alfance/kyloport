import React from 'react'
import LayoutHelper from './LayoutHelper'

export default class LayoutText extends React.Component {
  render () {
    const {title, content, sectionClass} = this.props.content
    return (<div className={sectionClass}>
      <h3>{title}</h3>
      <ol start='0'>
        {LayoutHelper.layoutArrayContent(content)}
      </ol>
      <hr />
    </div>)
  }
}
