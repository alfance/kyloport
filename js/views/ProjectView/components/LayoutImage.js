import React from 'react'
import LayoutHelper from './LayoutHelper'

export default class LayoutImage extends React.Component {
  render () {
    const {title, img, video, label, content} = this.props.content
    return (
      <div>
        <h3>{title}</h3>
        {LayoutHelper.layoutArrayContent(content)}
        {LayoutHelper.mediaType(img, video)}
        {LayoutHelper.layoutArrayContent(label)}
      </div>
    )
  }
}
