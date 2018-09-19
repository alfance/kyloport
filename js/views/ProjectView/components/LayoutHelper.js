import React from 'react'
import ReactPlayer from 'react-player'

export default class LayoutHelper {
  static layoutArrayContent (content) {
    if (typeof content === 'undefined') {
      return null
    } else if (content.constructor === Array) {
      return content.map(list => {
        return (
          <li key={list}>{list}</li>
        )
      })
    } else {
      return <p>{content}</p>
    }
  }

  static mediaType (image, video) {
    return image === undefined ? <ReactPlayer url={video} /> : <img src={image} />
  }
}
