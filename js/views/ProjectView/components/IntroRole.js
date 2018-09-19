import React from 'react'
import LayoutHelper from './LayoutHelper'

export default class ProjectTitle extends React.Component {
  render () {
    const {content, role, duties, img, video} = this.props.content

    return (
      <div >
        <h4>
          {content}
        </h4>
        <div className='project-layout-half'>
          <div>
            <h4>My Role </h4>
            <p className='introRole-top'>I worked as the {role} for this project. Some of my responsibilities included: </p>
            <ul>
              {LayoutHelper.layoutArrayContent(duties)}
            </ul>
          </div>

          <div>
            {LayoutHelper.mediaType(img, video)}
          </div>
        </div>

      </div>
    )
  }
}
