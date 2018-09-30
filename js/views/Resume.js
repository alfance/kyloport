import React from 'react'
import LayoutImage from './ProjectView/components/LayoutImage'

const resumeImage = {
    title:'Kylo Xue resume',
  img: '../../../assets/images/kylo_Xue_resume.png',
  content:<a href ='../../../assets/images/kylo_Xue_resume.pdf'><b>Download PDF Here</b></a>
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
