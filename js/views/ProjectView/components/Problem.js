import React from 'react'
import LayoutHelper from './LayoutHelper'

export default class Problem extends React.Component {
  render () {
    const {title, content, label, sectionClass} = this.props.content
    const {color} = this.props.style
    const probStyle = {
      borderWidth: 1,
      borderColor: color,
      borderStyle: 'solid',
      padding: '24px'
    }
    return (<div className={sectionClass}>
      <h3>{title}</h3>
      <div style={probStyle}>
        <ol start='0'>
          {LayoutHelper.layoutArrayContent(content)}
        </ol>
        <ol start='0'>
          {LayoutHelper.layoutArrayContent(label)}
        </ol>
      </div>
    </div>)
  }
}
