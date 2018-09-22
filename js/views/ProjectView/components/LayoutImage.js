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
            sectionClass
        } = this.props.content
        return (<div className={sectionClass}>
            <h3>{title}</h3>
            <ol start='0'>
                {LayoutHelper.layoutArrayContent(content)}
            </ol>
            {LayoutHelper.mediaType(img, video)}
            <ol start='0'>
                {LayoutHelper.layoutArrayContent(label)}
            </ol>
        </div>)
    }
}
