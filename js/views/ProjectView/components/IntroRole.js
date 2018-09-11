import React from 'react'

export default class ProjectTitle extends React.Component {
  render () {
    return (
      <div >
        <h4>
          {this.props.content.content}
        </h4>
        <div className='project-layout-half'>
          <div>
            <h4>my Role </h4>
            <p>  I worked as the{this.props.content.role}for this project. Some of my responsibilities included:<br />
              <ul>
                {this.props.content.duties.map(duty => {
                  return (
                    <li key={duty}>{duty}</li>
                  )
                })}
              </ul>
            </p>
          </div>

          <div>
            <img src={this.props.content.img} />
          </div>
        </div>

      </div>
    )
  }
}
