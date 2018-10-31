import React from 'react'
import LayoutHelper from './LayoutHelper'
import classNames from 'classnames'

export default class LayoutHalf extends React.Component {
    render() {
        const {
            title,
            content,
            imgLeft,
            videoLeft,
            imgRight,
            videoRight,
            contentLeft,
            contentRight,
            sectionClass
        } = this.props.content

        return (<div className={sectionClass}>
            <h3>{title}</h3>
            <ol start='0'>
                {LayoutHelper.layoutArrayContent(content)}
            </ol>
            <div className={classNames('project-layout-half', sectionClass)}>
                <div className='div-left'>
                    {LayoutHelper.mediaType(imgLeft, videoLeft)}
                    <ol start='0'>
                        {LayoutHelper.layoutArrayContent(contentLeft)}
                    </ol>
                </div>

                <div className='div-right'>
                    {LayoutHelper.mediaType(imgRight, videoRight)}
                    <ol start='0'>
                        {LayoutHelper.layoutArrayContent(contentRight)}
                    </ol>
                </div>
            </div>
        </div>)
    }
}
