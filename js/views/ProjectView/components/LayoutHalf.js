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
        return (<div>
            <h4>{title}</h4>
            <p>{content}</p>
            <div className={classNames('project-layout-half', sectionClass)}>

                <div>
                    {LayoutHelper.mediaType(imgLeft, videoLeft)}
                    <ol start='0'>
                        {LayoutHelper.layoutArrayContent(contentLeft)}
                    </ol>
                </div>

                <div>
                    {LayoutHelper.mediaType(imgRight, videoRight)}
                    <ol start='0'>
                        {LayoutHelper.layoutArrayContent(contentRight)}
                    </ol>
                </div>
            </div>
        </div>)
    }
}
