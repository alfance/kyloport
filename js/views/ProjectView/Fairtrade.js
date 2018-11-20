import React from 'react'
import TitleDivier from './components/TitleDivider'
import ProjectTitle from './components/ProjectTitle'
import IntroRole from './components/IntroRole'
import Problem from './components/Problem'
import TableComponent from './components/TableComponent'
import FindingComponent from './components/FindingComponent'
import LayoutImage from './components/LayoutImage'
import LayoutText from './components/LayoutText'
import LayoutThree from './components/LayoutThree'
import LayoutOneThird from './components/LayoutOneThird'
import LayoutTwoThird from './components/LayoutTwoThird'
import Reflection from './components/Reflection'
import LayoutHalf from './components/LayoutHalf'
import PortfolioStore from '../../stores/PortfolioStore'

const titleText1 = {title: 'Background'}

const titleText2 = {title: 'Getting to know the users'}

const titleText3 = {title: 'Ideation + Validation'}

const titleText4 = {title: 'The final prototype'}

const titleText5 = {title: 'Recognition'}

const titleText6 = {title: 'Reflections'}

const projectTitle = {
  title: 'Fairtrade',
  logo: '../../../assets/images/proj_fairtrade/logo-long.svg',
  field: 'Product Design',
  intro: 'Mobile platform connecting locals and newcomers',
  link: 'fairtrade',
  bgImg: ''
}

const introRole = {
  sectionClass: 'list-style-circle',
  content: 'Fairtrade is a website/app that enables newly arrived underprivileged migrants, refugees, and people in need to "fair trade" items with locals in order to improve the quality of their lives.',
  role: 'I was part of the funding member of Fairtrade, My responsibilities are the development of the app where I conducted',
  duties: ['Market Research',
    'Comparative analysis',
    'Affinity mapping',
    'Design workshops',
    'Wireframe development',
    'Usability testing',
    'Prototype development'],
  img: '../../../assets/images/proj_briovr/behaviourstart.gif'
}

const problem = {
  title: 'Problem',
  sectionClass: 'list-style-circle',
  content: 'Most refugees and newcomers arrive to a new country with only the clothes on their backs. Upon arrival, they are immediately reliant on donations. Many local families are willing to help. However, there is almost no way to tell whether the items that are donated in good faith are actually needed by the families that receive them. As a result, the recipients often receive an abundance of products that they do not need. '
}
const research = {
  title: 'Research',
  img: '../../../assets/images/proj_briovr/background.png',
  content: 'The fundamental interface of BRIOVR is similar to major design and modeling apps. Majority of the screen is dedicated to the 3D working space while features and tools are located on the side nd bottom.'
}

const persona1 = {
  title: 'Personas - New comers',
  content: 'As a result, the two types of users that will be benfited the most from our app are student bikers and Food delivery individula.Their similarity is the need of safe and correct route when cycling in the urban environment.',
  imgLeft: '../../../assets/images/proj_fairtrade/avatar-10.svg',
  imgRight: '../../../assets/images/proj_fairtrade/avatar-13.svg',
  sectionClass: 'section-persona',
  contentLeft: [
    '**Ann Goldshire**',
    'Student',
    'Age: 17 to 27',
    'Bikes 2 - 6 times a day',
    'Ann uses bikes for most of her daily commute. Thus Ann values most effortless routes.'
  ],
  contentRight: [
    '**Oliver Dimaran**',
    'Food Delivery',
    'Age: 19 to 40',
    'Bikes multiple times a day',
    'Biking is Olivers main source of income and he wants nothing but to get to the destination in the shortest amount of time.'
  ]
}
const persona2 = {
  title: 'Personas - Locals',
  content: 'As a result, the two types of users that will be benfited the most from our app are student bikers and Food delivery individula.Their similarity is the need of safe and correct route when cycling in the urban environment.',
  imgLeft: '../../../assets/images/proj_fairtrade/avatar-3.svg',
  imgRight: '../../../assets/images/proj_fairtrade/avatar-6.svg',
  sectionClass: 'section-persona',
  contentLeft: [
    '**Ann Goldshire**',
    'Student',
    'Age: 17 to 27',
    'Bikes 2 - 6 times a day',
    'Ann uses bikes for most of her daily commute. Thus Ann values most effortless routes.'
  ],
  contentRight: [
    '**Oliver Dimaran**',
    'Food Delivery',
    'Age: 19 to 40',
    'Bikes multiple times a day',
    'Biking is Olivers main source of income and he wants nothing but to get to the destination in the shortest amount of time.'
  ]
}

const endResult = {
  title: 'The Product',
  content: 'Combining all the aspects, we were able to create a rather intuitive system that is been used by thousands of people. The following video is a 30 seconds demo showing how you can create a click button to trigger a movement of a rocket.',
  video: 'https://youtu.be/SKdtGiESaO4',
  label: 'to see more of our user creation, <a href="briovr.com/discovery">Click HERE</a>'
}

const achieve = {
  title: 'Recognition',
  content: 'Through collaboration, we had created an interactive Casino Royal experience for the Toronto Elevate Conference after party at Crowdlinkers. You can play it HERE',
  img: '../../../assets/images/proj_briovr/crowdlinker.png'
}

const dobetter = {
  title: 'What can I do better?',
  sectionClass: 'list-style-circle',
  content: ['',
    'Real user validation',
    'Research about features and results of competitors. ']
}

const reflections = [
  {subject: 'Dont copy, adapt.',
    learn: 'It is equally imperative to take inspiration from exisitng solutions and to adapt it to your solution. Part of the reason that people are accepting Brio behaviour system is because it has envolved based on products that are been approved by users.'
  }, {
    subject: 'UX design is not just research and low fidelity prototypes',
    learn: 'I learned that UX design exists in every step of a product development. Your job is not completed after the wireframe. It is curicial to stay all the way untill and after the product delivery.'
  }, {
    subject: 'Working in 3D is a different story than working in 2D',
    learn: 'Add a dimension can meant a completely seperate design flow and system. I have encountered countless limitations prototyping and testing. On another hand, I learned and invented ways to validate the design method for a 3D app.'
  }
]

class Fairtrade extends React.Component {
  render () {
    const style = PortfolioStore[1]
    return (
      <div>
        <ProjectTitle content={projectTitle} style={style} />
        <div className='project-content-layout'>
          <IntroRole content={introRole} />
          <Problem content={problem} style={style} />

          {/* Background */}
          <TitleDivier content={titleText1} style={style} />

          {/* user */}
          <TitleDivier content={titleText2} style={style} />
          <LayoutHalf content={persona1} style={style} />
          <LayoutHalf content={persona2} style={style} />
          {/* ideations */}
          <TitleDivier content={titleText3} style={style} />

          {/* final prototype */}
          <TitleDivier content={titleText4} style={style} />

          {/* recognition */}
          <TitleDivier content={titleText5} style={style} />
          <LayoutImage content={achieve} />

          {/* results and reflections */}
          <TitleDivier content={titleText6} style={style} />
          <LayoutText content={dobetter} style={style} />

          <TitleDivier content={titleText6} style={style} />
          <Reflection content={reflections} />

        </div>
      </div>
    )
  }
}

export default Fairtrade
