import React from 'react'
import LayoutHelper from './LayoutHelper'
import classNames from 'classnames'

export default class LayoutTwoThird extends React.Component {
  render () {
    const {
            title,
            content,
            imgLeft,
            videoLeft,
            imgRight,
            videoRight,
            contentLeft,
            contentRight,
            sectionClass,
            deviceFrame
        } = this.props.content

    return (<div>
      <h3>{title}</h3>
      <p>{content}</p>
      <div className={classNames('project-layout-23', sectionClass)}>
        <div className='div-left'>
          {LayoutHelper.mediaType(imgLeft, videoLeft, deviceFrame)}
          <ol start='0'>
            {LayoutHelper.layoutArrayContent(contentLeft)}
          </ol>
        </div>

        <div className='div-right'>
          {LayoutHelper.mediaType(imgRight, videoRight, deviceFrame)}
          <ol start='0'>
            {LayoutHelper.layoutArrayContent(contentRight)}
          </ol>
        </div>
      </div>
    </div>)
  }
}
