import React from 'react'
import ReactPlayer from 'react-player'
import ReactMarkdown from 'react-markdown'
import classNames from 'classnames'
import * as Scroll from 'react-scroll';
import { Link, Element, animateScroll as scroll } from "react-scroll";

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

  static mediaType (image, video, deviceFrame, threeD) {
    if (image !== undefined) {
      return <div className={`frame-${deviceFrame}`}><DeviceFrame frame={deviceFrame} /><img src={image} className={`device-${deviceFrame}`} /></div>
    } else if (video !== undefined) {
      return <div className={`frame-${deviceFrame}`}><DeviceFrame frame={deviceFrame} /><ReactPlayer muted='true' autoplay='true' width='100' height='100' className={classNames('project-video169', `device-${deviceFrame}`)} url={video} /></div>
    } else if (threeD !== undefined){
      return <div className="sketchfab-embed-wrapper"><iframe src={threeD} frameborder="0" allow="autoPlay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>
    } else {
      return null
    }
  }

  static linkElement (element) {
      return <Link activeClass='active' to={element} smooth={true} offset={-100} duration={300} ><b>{element}</b></Link>
  }
}

function DeviceFrame (frame) {
  return frame.frame === undefined ? null
    : frame.frame === 'desktop' ? <img src='.././assets/images/desktop_frame.svg' className='frame-device-desktop' />
      : frame.frame === 'laptop' ? <img src='.././assets/images/laptop_frame.svg' className='frame-device-laptop' />
        : frame.frame === 'phone' ? <img src='.././assets/images/phone_frame.svg' className='frame-device-phone' />
      : frame.frame === 'ipad' ? <img src='.././assets/images/ipad_frame.svg' className='frame-device-ipad' />
            : null
}
