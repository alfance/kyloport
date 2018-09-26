import React from 'react'
import LayoutHelper from './LayoutHelper'

export default class ProjectTitle extends React.Component {
  render () {
    const {content, role, duties, img, video, sectionClass} = this.props.content

    return (<div className={sectionClass}>
      <h4>
        {content}
      </h4>
      <div className='project-layout-half'>
        <div>
          <h4>My Role</h4>
          <p className='introRole-top'>{role}
          </p>
          <ol>
            {LayoutHelper.layoutArrayContent(duties)}
          </ol>
        </div>

        <div>
          {LayoutHelper.mediaType(img, video)}
        </div>
      </div>

    </div>)
  }
}
