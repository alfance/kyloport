import React from 'react'
import ComponentHelp from './ComponentHelp'

export default class LayoutImage extends React.Component {
  render () {
      const {title, img, video, label, content} = this.props.content
    return (
      <div>
          <h3>{title}</h3>
          {ComponentHelp.createContentMap(content, className)}
          <img src={img} />
          {ComponentHelp.createLabelMap(label)}
      </div>
    )
  }
}
