import React from 'react'
import LayoutHalf from './ProjectView/components/LayoutHalf'

const aboutMeContent = {
  title: ['Nice to meet you,', <br />, 'I am Kylo :)', <p />],
  imgRight: '../../../assets/images/profile_img.jpg',
  contentLeft: ['As a problem solver and storyteller, I embrace and practice the principles of user-centred design and human-computer interaction. With a background in digital media, I have the opportunities to deliver projects in the mobile & web app, 3D app, internet of things and games.',
  'My belief to achieve delightful and seamless user experience is always through inquiry and empathy.',
    'When I am not designing, I enjoy spending time polish my skills in painting, photography, front-end programming, and building Arduino toys.'
  ]
}

class About extends React.Component {
  render () {
    return (
      <div className='project-content-layout'>
        <LayoutHalf content={aboutMeContent} />
        <p>Want to connect? Let's <a href='mailto:jiao_xue@hotmail.com'><b>CHAT</b></a> ! </p>
      </div>
    )
  }
}

export default About
