import React from 'react'
import LayoutImage from './ProjectView/components/LayoutImage'

const resumeImage = {
  title: 'Kylo Xue resume',
  img: '../../../assets/images/kylo_Xue_resume.png',
  content: [
    '__[Download PDF Here](../../../assets/images/kylo_Xue_resume.png)__',
    'For detailed resume, __[Visit my Linkedin](https://www.linkedin.com/in/kyloxue/)__'
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
