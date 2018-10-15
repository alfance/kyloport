import React from 'react'
import ReactPlayer from 'react-player'
import ReactMarkdown from 'react-markdown'

export default class LayoutHelper {
  static layoutArrayContent (content) {
    if (typeof content === 'undefined') {
      return null
    } else if (content.constructor === Array) {
      return content.map(list => {
        return (
          <li key={list}><ReactMarkdown className='markdown-list' source={list} /></li>
        )
      })
    } else {
      return <p>{content}</p>
    }
  }

  static mediaType (image, video) {
    if (image !== undefined) {
      return <img src={image} />
    } else if (video !== undefined) {
      return <ReactPlayer width='100%' height='auto' className='project-video169' url={video} />
    } else {
      return <div />
    }
  }
}
