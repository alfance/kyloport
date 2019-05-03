import React from 'react'
import LayoutHalf from './ProjectView/components/LayoutHalf'
import Cv from './ProjectView/components/CV'
import LayoutText from './ProjectView/components/LayoutText'
import { Spring } from 'react-spring'

const aboutMeContent = {
  title: 'Nice to meet you :)',
  imgRight: '../../../assets/images/profile_img.jpg',
  contentLeft: ['As a problem solver and storyteller, I embrace and practice the principles of user-centred design and human-computer interaction. With a background in digital media, I have the opportunities to deliver projects in the mobile & web app, 3D app, internet of things and games.', 'My belief to achieve delightful and seamless user experience is always through inquiry and empathy.', 'When I am not designing, I enjoy spending time polish my skills in painting, photography, front-end programming, and building Arduino toys.']
}

const resumeDownload = {
  sectionClass: 'experience-pdf',
  content:
    '__[Download Resume](../../../assets/images/kylo_Xue_designer_resume.pdf "title" target="_blank")__ or __[Visit my Linkedin](https://www.linkedin.com/in/kyloxue/ "title" target="_blank")__'
}

const experiences = {
  work: [
    {
      number: '1',
      year: '2016 - present',
      location: 'Toronto',
      role: 'UI/UX designer',
      company: 'SPINVFX',
      description: 'Conceptualized, designed and helped to code a Saas product that is being used by architects, automobile designers and industrial companies across the world.'
    }, {
      number: '2',
      year: '2015 - 2016',
      location: 'Toronto',
      role: 'UI/UX designer',
      company: 'DEMHUB',
      description: 'Joined a disaster management startup as a product designer & lead the visual development for a platform that empowers emergency management professionals to communicate.'
    }, {
      number: '3',
      year: '2016 ',
      location: 'Toronto',
      role: 'Graduate Research Asssistant',
      company: 'University of Toronto',
      description: 'Led a collaborative green garden project for UofT that involves physical computing, processing coding, and project management.'
    }, {
      number: '4',
      year: '2013 - 2014',
      location: 'Markham',
      role: 'Website Designer',
      company: 'Canada Computers',
      description: 'Worked in the marketing department directly alongside clients. Created branding strategies & visuals in a variety of media.'
    }, {
      number: '5',
      year: '2012 - 2013',
      location: 'Waterloo',
      role: 'Graphic Designer',
      company: 'University of Waterloo',
      description: 'Joined the school&#39;s Federation of Students as a designer to create marketing content, advertising & promotion to enrich students life.'
    }, {
      number: '6',
      year: '2012 - 2013',
      location: 'Kitchener',
      role: 'Website Intern',
      company: 'Alternatives Journal',
      description: 'Part of the editorial team to migrate 40 years of digital magazine contents to the new sites. My introduction to user research and consumer experience analysis.'
    }
  ],
  study: [
    {
      number: '7',
      sectionClass: 'experience-master',
      year: '2014 - 2015',
      location: 'Toronto',
      role: 'Master of Digital Media',
      company: 'Ryerson University'
    }, {
      number: '8',
      sectionClass: 'experience-undergrad',
      year: '2009 - 2013',
      location: 'Toronto',
      role: 'Environment and Geography Management',
      company: 'University of Waterloo'
    }]

}

class About extends React.Component {
  render () {
    return (
      <Spring from={{ opacity: 0, marginTop: 500 }} to={{opacity: 1, marginTop: 0}}>
        {({ opacity, marginTop }) =>
          <div style={{opacity, marginTop}} className='project-content-layout'>
            <div className='greeting-gradient'><LayoutHalf content={aboutMeContent} /></div>
            <LayoutText content={resumeDownload} />
            <Cv content={experiences} />
            <p>Want to connect? Let's
            <a target='_blank' href='https://twitter.com/alfancelric'>
              <b> CONNECT</b>
            </a>
            </p>
          </div>
        }
      </Spring>)
  }
}

export default About
