import React from 'react'

export default class ProjectTitle extends React.Component {
  render () {
      const {title, logo, bgImg} =this.props.content
      const {color} = this.props.style
      const titleBG = {
          backgroundImage:'url(' + bgImg + ')',
          backgroundColor:color
      }

    return (
      <div className='project-title-layout' style={titleBG}>
        <div className='project-title-text'>
          <img className=' project-title-logo' src={logo} />
          <div className='project-title-bg' />
          <h3> {title}</h3>
        </div>
      </div>
    )
  }
}
