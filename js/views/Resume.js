import React from 'react'
import LayoutImage from './ProjectView/components/LayoutImage'

const resumeImage = {
    title:'Kylo Xue resume',
  img: '../../../assets/images/kylo_Xue_resume.png',
  content:[
      '**Download PDF Here**',
      'For detailed resume, <a href =https://www.linkedin.com/in/kyloxue/>**Visit my Linkedin**</a>',
  ]
}

class Resume extends React.Component {
  render () {
    return (
        <div className='project-content-layout'>
            <LayoutImage content={resumeImage} />
        </div>
    )
  }
}

export default Resume
