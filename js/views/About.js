import React from 'react'
import LayoutHalf from './ProjectView/components/LayoutHalf'

const aboutMeContent = {
  title: ['Nice to meet you,', <p />, 'I am Kylo :)', <p />],
  imgRight: '',
  contentLeft: ['As a problem solver and storyteller, I embrace and practice the principles of user-centred design and human-computer interaction. I have delivered projects in mobile & web app, IOT, game, and 3D app with the focus on seamless & delighted user journey.',
    'When I am not designing, I enjoy spending time polish my skills in painting, photography, front-end programming, and building arduino toys.'
  ]
}

class About extends React.Component {
  render () {
    return (
      <div className='project-content-layout'>
        <LayoutHalf content={aboutMeContent} />
      </div>
    )
  }
}

export default About
