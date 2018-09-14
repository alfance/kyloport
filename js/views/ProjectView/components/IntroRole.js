import React from 'react'
import ReactPlayer from 'react-player'

export default class ProjectTitle extends React.Component {
  render () {
     const {content, role, duties, img, video} = this.props.content
     const media= this.props.content.img === undefined ? <ReactPlayer url={video} /> : <img src={img} />

console.log('media is :::::', media)
    return (
      <div >
        <h4>
          {content}
        </h4>
        <div className='project-layout-half'>
          <div>
            <h4>my Role </h4>
            <p>  I worked as the{role}for this project. Some of my responsibilities included:<br />
              <ul>
                {duties.map(duty => {
                  return (
                    <li key={duty}>{duty}</li>
                  )
                })}
              </ul>
            </p>
          </div>

          <div>
              {media}
              <ReactPlayer url='https://youtu.be/e8OPmP75HJU' />
          </div>
        </div>

      </div>
    )
  }
}
