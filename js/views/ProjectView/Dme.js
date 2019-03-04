import React from 'react'
import TitleDivier from './components/TitleDivider'
import ProjectTitle from './components/ProjectTitle'
import PlayStore from '../../stores/PlayStore'
import IntroRole from './components/IntroRole'
import LayoutImage from './components/LayoutImage'
import LayoutHalf from './components/LayoutHalf'
import LayoutOneThird from './components/LayoutOneThird'
import LayoutTwoThird from './components/LayoutTwoThird'
import LayoutThree from './components/LayoutThree'
import LayoutText from './components/LayoutText'
import Problem from './components/Problem'
import ProjectFooter from './components/ProjectFooter'

const titleText1 = {
  title: 'Research'
}

const titleText2 = {
  title: 'Ideation & solution'
}

const titleText3 = {
  title: 'Brand Identity'
}

const titleText4 = {
    title:'The website'
}


const introRole = {
    sectionClass: 'list-style-circle',
    content: 'The DME is a digital learning lab at the University of Ryerson aiming at increasing digital literacy for the students and faculties. The topics taught at the DME are Virtual Reality, 3D Printing, Digital Design, Physical Computing and Computer Programming.',
    duties: [
        'The DME had helped me with my Capstone project at Ryerson University. During my time spent there, I noticed some of the problems they had with their online presence. I offered to come up with solutions tackling the issues. The methods I used include research, ideation, designing & programming.'
    ],
    img: '../../../assets/images/play_dme/thumb_dme.gif'
}

const problem = {
  title: 'Problem',
  content: 'Even though the DME is open to every students and faculty of Ryerson, __people without technological or digital background often find it daunting to come__. Some misunderstood the DME as engineering students exclusive. Research showed that many non-tech students (Nursing, Arts, Community services etc.) are not willing to use the DME because the technologies seem too professional.'
}

const research = {
    title:'Define the users',
    contentLeft:'I conducted one-on-one interviews with the DME stuff to find out more information about the visitors and users of the space. The DME hosts weekly seminars and lessons on different topics and level of expertise.',
    imgRight:'../../../assets/images/play_dme/teach.jpg'
}

const persona = {
    title: 'Personas',
    content: '',
    imgLeft: '../../../assets/images/proj_cycnav/avatar-0.svg',
    imgRight: '../../../assets/images/proj_cycnav/avatar-2.svg',
    sectionClass: 'section-persona',
    contentLeft: [
      '**Stephen Chen**',
      'Student',
      'Computer science major',
      'Stephen is well-versed with all the recent technologies. He comes to the DME for the resources and technical support to work on his school or passion projects..'
    ],
    contentRight: [
      '**Mandy Fisher**',
      'Student',
      'Fashion major',
      'Mandy is exploring alternative ways for her next fashion project. Hearing that the DME offers classes on wearable Arduino, she is curious to find out more.'
    ]
  }

  const brain ={
      title:'Brainstorming',
      sectionClass: 'list-style-circle',
      contentRight:['I started by sitting down with the DME stuff to create a flow chart of the services offered at the DME. There are 5 different branches of technologies: ','__Physical computing__: Arduino, RasberryPie & LittleBits', '__Videography__: Adobe Premier & After Effect', '__Graphic design__: Adobe Photoshop & Illustrator', '__Programming__: HTML, CSS, Javascript & Python','__3D printing__: Maker bot & Maya'],
      imgLeft:'../../../assets/images/play_dme/brain.jpg',
  }

const mascot1 ={
    title:'Mascot',
    sectionClass: 'project-layout-wide dme-mascot',
    content:'One request from the DME is to make the identity of the whole space more approachable. The approach I took was to give each of the 5 branches characteristics. The visual representation can help the DME better promote innovative and novel technologies to the public.',
    imgLeft:'../../../assets/images/play_dme/avatar1.svg',
    contentLeft:'__Physical computing__',
    imgMiddle:'../../../assets/images/play_dme/avatar2.svg',
    contentMiddle:'__Videography__',
    imgRight:'../../../assets/images/play_dme/avatar3.svg',
    contentRight:'__Graphic design__'
}

const mascot2 ={
    sectionClass: 'dme-mascot',
    imgLeft:'../../../assets/images/play_dme/avatar4.svg',
    contentLeft:'__Programming__',
    imgRight:'../../../assets/images/play_dme/avatar5.svg',
    contentRight:'__3D printing__'
}

const sketches = {
    title:'Sketches',
    content:'For the actual look of the mascots, I had come up with a couple to several sketch variations. After a few rounds of in-depth conversations and updates, we nailed the look at the end.',
    imgLeft:'../../../assets/images/play_dme/sketch1.jpg',
    contentLeft:'Early stage sketches, exploration on different options',
    imgRight:'../../../assets/images/play_dme/sketch2.jpg',
    contentRight:'Digital illustraion in Photoshop before turning to vector'
}

const website1 ={
    deviceFrame:'desktop',
    img:'../../../assets/images/play_dme/landing.jpg'
}

const about = {
    title:'About the DME',
    sectionClass: 'project-layout-wide',
    content:'The About page provides detailed information about the DME. Visitors can find the purpose and topics of the DME. By clicking on the CTA button in each section, visitors will be directed to the page of their interests.',
    imgLeft:'../../../assets/images/play_dme/about1.jpg',
    imgRight:'../../../assets/images/play_dme/about2.jpg',
}

const booking = {
    title:'Easy booking system',
    content:'The Workshop page is a convenient portal for students and faculty to search, filter and register for the upcoming events and workshops of the DME. The Google calendar API will directly add the workshop to the user&#39s school calendar.',
    img:'../../../assets/images/play_dme/booking.png'
}

const projects = {
    title:'Showcasing your projects',
    contentLeft:'The Project page is a place for everyone to display their creations in the DME. This page feeds the DME&#39s photos using Instagram&#39s API, which erases the pain for the stuff to manually repeat the uploading process and becomes one-stop for the visitors to check out the recent and past projects',
    imgRight:'../../../assets/images/play_dme/projects.jpg'
}

const final = {
    content:'__[CLICK HERE](http://alfance.github.io/dme/)__ to see the DME website mockup.',
}

class Dme extends React.Component {
    render() {
        const style = PlayStore[1]
        return (<div>
            <ProjectTitle content={style} style={style}/>
            <div className='project-content-layout'>
                <IntroRole content={introRole} style={style}/>
                <Problem content={problem} style={style} />
                <TitleDivier content={titleText1} style={style} />
                <LayoutOneThird content={research} />
                <LayoutHalf content={persona} style={style} />

                <TitleDivier content={titleText2} style={style} />
                <LayoutTwoThird content={brain} style={style} />

                <TitleDivier content={titleText3} style={style} />
                <LayoutThree content={mascot1} style={style} />
                <LayoutHalf content={mascot2} style={style} />
                <LayoutHalf content={sketches} style={style} />

                <TitleDivier content={titleText4} style={style} />
                <LayoutImage content={website1} style={style} />
                <LayoutHalf content={about} style={style} />
                <LayoutImage content={booking} style={style} />
                <LayoutOneThird content={projects} style={style} />
                <LayoutText content={final} style={style} />

                <ProjectFooter content={style} style={style} />
        </div>
        </div>)
    }
}

export default Dme
