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
          <div>
            {LayoutHelper.mediaType(imgLeft, videoLeft)}
            {LayoutHelper.layoutArrayContent(contentLeft)}
          </div>
          <div>
            {LayoutHelper.mediaType(imgMiddle, videoMiddle)}
            {LayoutHelper.layoutArrayContent(contentMiddle)}
          </div>
          <div>
            {LayoutHelper.mediaType(imgRight, videoRight)}
            {LayoutHelper.layoutArrayContent(contentRight)}
          </div>
        </div>
      </div>
    )
  }
}
