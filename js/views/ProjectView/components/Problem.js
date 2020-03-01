import React from 'react'
import LayoutHelper from './LayoutHelper'

export default class Problem extends React.Component {
  render () {
    const {title, content, label, sectionClass} = this.props.content
    const {color} = this.props.style
    const probStyle = {
      padding: '24px',
      backgroundColor:'white',
    }
    return (<div className={sectionClass}>
      <h3>{title}</h3>
      <div style={probStyle} className='problem-style'>
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
