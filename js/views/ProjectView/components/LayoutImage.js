import React from 'react'
import LayoutHelper from './LayoutHelper'

export default class LayoutImage extends React.Component {
    render() {
        const {
            title,
            img,
            video,
            label,
            content,
            sectionClass,
            deviceFrame
        } = this.props.content
        return (<div>
            <h3>{title}</h3>
            <ol start='0'>
                {LayoutHelper.layoutArrayContent(content)}
            </ol>
            <div className={sectionClass}>
                <img className={deviceFrame} />
                {LayoutHelper.mediaType(img, video)}
            </div>
            <ol start='0'>
                {LayoutHelper.layoutArrayContent(label)}
            </ol>
        </div>)
    }
}
