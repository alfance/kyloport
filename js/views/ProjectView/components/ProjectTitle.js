import React from 'react'

export default class Problem extends React.Component {
  render () {
    return (
      <div className='project-title-layout project-title-cycnav'>
        <div className='project-title-text'>
          <div className='cycnav-logo project-title-logo' />
          <h3> {this.props.content.title}</h3>
        </div>
      </div>
    )
  }
}
