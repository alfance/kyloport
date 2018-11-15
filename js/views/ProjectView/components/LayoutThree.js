import React from 'react'
import LayoutHelper from './LayoutHelper'
import classNames from 'classnames'

export default class LayoutThree extends React.Component {
  render () {
    const {title, content, imgLeft, videoLeft, imgMiddle, videoMiddle, imgRight, videoRight, contentLeft, contentMiddle, contentRight, sectionClass, deviceFrame} = this.props.content
    return (
      <div>
        <h3>{title}</h3>
        {LayoutHelper.layoutArrayContent(content)}
        <div className={classNames('project-layout-third', sectionClass)}>
          <div className='div-left'>
            {LayoutHelper.mediaType(imgLeft, videoLeft, deviceFrame)}
            {LayoutHelper.layoutArrayContent(contentLeft)}
          </div>
          <div className='div-middle'>
            {LayoutHelper.mediaType(imgMiddle, videoMiddle, deviceFrame)}
            {LayoutHelper.layoutArrayContent(contentMiddle)}
          </div>
          <div className='div-right'>
            {LayoutHelper.mediaType(imgRight, videoRight, deviceFrame)}
            {LayoutHelper.layoutArrayContent(contentRight)}
          </div>
        </div>
      </div>
    )
  }
}
