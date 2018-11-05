import React from 'react'
import ReactPlayer from 'react-player'
import ReactMarkdown from 'react-markdown'

export default class LayoutHelper {
  static layoutArrayContent (content) {
    if (typeof content === 'undefined') {
      return null
    } else if (content.constructor === Array) {
      return content.map((list) => {
        return (
          <li key={list}><ReactMarkdown className='markdown-list' source={list} /></li>
        )
      })
    } else {
      return <ReactMarkdown source={content} />
    }
  }

  static mediaType (image, video, deviceFrame) {
    if (image !== undefined) {
      return <div className={`frame-${deviceFrame}`}><DeviceFrame frame={deviceFrame} /><img src={image} className={`device-${deviceFrame}`} /></div>
    } else if (video !== undefined) {
      return <ReactPlayer width='100%' height='auto' className='project-video169' url={video} />
    } else {
      return null
    }
  }
}

function DeviceFrame (frame) {
  return frame.frame === undefined ? null
    : frame.frame === 'desktop' ? <img src='../../../../assets/images/desktop_frame.svg' className='frame-device-desktop' />
      : frame.frame === 'laptop' ? <img src='../../../../assets/images/laptop_frame.svg' className='frame-device-laptop' />
        : frame.frame === 'phone' ? <img src='../../../../assets/images/phone_frame.svg' className='frame-device-phone' />
          : null
}
