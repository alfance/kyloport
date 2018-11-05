import React from 'react'
import LayoutHelper from './LayoutHelper'
import classNames from 'classnames'

export default class LayoutThree extends React.Component {
  render () {
    const {title, content, imgLeft, videoLeft, imgMiddle, videoMiddle, imgRight, videoRight, contentLeft, contentMiddle, contentRight, sectionClass} = this.props.content
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className={classNames('project-layout-third', sectionClass)}>
          <div className='div-left'>
            {LayoutHelper.mediaType(imgLeft, videoLeft)}
            {LayoutHelper.layoutArrayContent(contentLeft)}
          </div>
          <div className='div-middle'>
            {LayoutHelper.mediaType(imgMiddle, videoMiddle)}
            {LayoutHelper.layoutArrayContent(contentMiddle)}
          </div>
          <div className='div-right'>
            {LayoutHelper.mediaType(imgRight, videoRight)}
            {LayoutHelper.layoutArrayContent(contentRight)}
          </div>
        </div>
      </div>
    )
  }
}
