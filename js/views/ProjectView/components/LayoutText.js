import React from 'react'
import ComponentHelp from './ComponentHelp'
export default class LayoutText extends React.Component {
  render () {
      const {title, content, className} = this.props.content

    return (
      <div>
          <h3>{title}</h3>
          
      </div>
    )
  }
}
