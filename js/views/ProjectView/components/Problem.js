import React from 'react'
import ComponentHelp from './ComponentHelp'

export default class Problem extends React.Component {
  render () {
    const {title, content, list} = this.props.content
    const {color} = this.props.style
    const probStyle = {
      borderWidth: 1,
      borderColor: color,
      borderStyle: 'solid',
      padding: '24px'
    }
    return (
      <div>
        <h3>{title}</h3>
        <div style={probStyle}>
          <p>{content}</p>
          <ul>
            {ComponentHelp.createContentMap(list)}
          </ul>
        </div>
      </div>
    )
  }
}
