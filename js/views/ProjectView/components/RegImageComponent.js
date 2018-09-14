import React from 'react'

export default class RegImageComponent extends React.Component {
  render () {
      const {title, content, img, video, label} = this.props.content
    return (
      <div>
          <h3>{title}</h3>
          <p>{content}</p>
          <img src={img} />
          <p>{label}</p>
      </div>
    )
  }
}
