import React from 'react'

export default class ProjectTitle extends React.Component {
  render () {
      const {title, logo, bgImg} =this.props.content
      const titleBG = {
          backgroundImage:'url(' + {bgImg} + ')'
      }
      console.log('bg imge::::', bgImg)
    return (
      <div className='project-title-layout' style={titleBG}>
        <div className='project-title-text'>
          <img className=' project-title-logo' src={logo} />
          <h3> {title}</h3>
        </div>
      </div>
    )
  }
}
