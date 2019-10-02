import React from 'react'
import LayoutNavbar from './components/LayoutNavbar'
import {Element} from "react-scroll";
import TitleDivier from './components/TitleDivider'
import ProjectTitle from './components/ProjectTitle'
import IntroRole from './components/IntroRole'
import Problem from './components/Problem'
import TableComponent from './components/TableComponent'
import LayoutHalf from './components/LayoutHalf'
import FindingComponent from './components/FindingComponent'
import LayoutImage from './components/LayoutImage'
import LayoutText from './components/LayoutText'
import LayoutThree from './components/LayoutThree'
import LayoutOneThird from './components/LayoutOneThird'
import LayoutTwoThird from './components/LayoutTwoThird'
import Reflection from './components/Reflection'
import ProjectFooter from './components/ProjectFooter'
import PortfolioStore from '../../stores/PortfolioStore'


const titleText1 = {title: '1) Research & empathy'}

const titleText3 = {title: '2) Explore the Solution'}

const titleText4 = {title: 'Design'}

const titleText5 = {title: 'Reflections'}

const introRole = {
  content: '#### Joist is a cross-platform app build for trade contractors to create quick estimates & professional invoices, and getting paid. Being the leading product designer, I was responsible for the start-to-finish feature development. ####',
  img: '../../../assets/images/proj_joist/joist_header_1.png',
  sectionClass: 'project-layout-wide'
}

const problem = {
  title: 'Problem',
  content: 'The majority of Joist&#8217s users are small business owners & contractors who use the app to save time on their paperwork process so they can focus on the labour work. Other major difficulties they experience are to win more jobs and manage their teams more effortlessly. The problem Joist is tackling is to help contractor businesses thrive.',
}

const challenge = {
  title: 'My Challenge',
  content: ['The goal of this project was to define the next major approach to help the contractors grow their business. My duties involve mapping out the uncertainties & risks by conducting market and user research, coming up with potential solutions, ideation & usability validation, and interaction design. ']
}

const evaluation2 = {
  title: 'Validate the solutions',
  sectionClass: 'project-layout-wide',
  content:['We started with cumulating past user feedbacks and interviews. The most requested features were multi-user management for teams, advanced estimate & invoice customization, monthly/weekly report and social media reviews.',
'We divided the feature list to **two approaches** by the goal, objective and dev timeline. Afterward, I worked closely with the Android developers to create an in-app test that allows us to **directly collect the interests of the two components** from our users. ',
'The **"Wizard of Oz"** approach displays a CTA banner to randomly selected users, which then leads the users to go through potential features, pricing options and feedback form. We track the click & transition rate for the two approaches to see which one is truly needed.'],
  imgLeft:'../../../assets/images/proj_joist/team_screenshot.png',
  contentLeft:'**Joist Team**: Letting the user create unique logins for each team member, adding access controls to the data.',
  imgRight:'../../../assets/images/proj_joist/elite_screenshot.png',
  contentRight:'**Joist Advanced**: Focusing on document customization, social approval and job tracking.',
}

const evaluation3 = {
  title: 'Data collection & evaluation',
  content: 'The test had been running for a week. We collected over four thousands of user data. As a result, Joist Advanced had generated twice as many interests from the users than Joist Team. ',
  img:'../../../assets/images/proj_joist/chart1.svg',
}

const findingCompare = {
  title: 'Finding',
  content: ['The data had given us enough confidence to move forward with the Advanced customization approach. To develop a more in-depth understanding, I held 10 phone interviews with the testers to find out the thought process behind their decision. The takeaway was positive and the major reason for test abandonment was due to pricing concern.',
'_ "I would like to know everything about it and when the new features will be functional. thank you for all your help." _',
'_ "Would like to sample upgrades before committing to subscribe to it." _',
'_ "I want to test this for a few days to learn about this function. I also would like to..." _',]
}

const collaboration = {
  title: 'Collaborate to search for the solution space',
  content: 'At the onset of the feature development, we broken down the features into sections with levels of demands and importance, and then desinging for the most optimized and best possible experiences tackling each section',
  imgLeft: '../../../assets/images/proj_joist/collab1.jpg',
  imgRight: '../../../assets/images/proj_joist/collab2.jpg',
  label: 'Early stage wireframe exploring multiple approaches for adding sections to categorize line items in each documents.'
}

const system = {
  title: 'Rounds of Iteractions',
  sectionClass: 'project-layout-wide',
  content: 'At the onset of the feature development, we broken down the features into sections with levels of demands and importance, and then desinging for the most optimized and best possible experiences tackling each section',
  img: '../../../assets/images/proj_joist/section_wireframe_1.png',
  label: 'Early stage wireframe exploring multiple approaches for adding sections to categorize line items in each documents.'
}

const threeSolutions = {
  title: 'Exploration',
  deviceFrame: 'phone',
  content: 'We had a few variations for the Prototype as shown below. One consideration that is more important than the asthetics of the app itself, is the readability of the screen under different light conditions.',
  imgLeft: '../../../assets/images/proj_joist/advanced_section_v1_diff.png',
  imgMiddle: '../../../assets/images/proj_joist/advanced_section_v3_diff.png',
  imgRight: '../../../assets/images/proj_joist/advanced_section_v5_diff.png',
  contentLeft: '**Design 1**: Design 1 focused on the chosen travel route and current navigation.',
  contentMiddle: '**Design 2**: Design 2 extended important components of design 2 and reduce the visibily of trivial components.',
  contentRight: '**Design 3**: minimized the UI by removing information not needed at current page.'
}

const heatmap = {
  sectionClass: 'project-layout-wide',
  content: 'For the section feature, we run into the difficulty of coming up with a design that can be used by all types of contractors. What we end up doing, test it out.',
  img: '../../../assets/images/proj_joist/section_heatmap.png'
}
const evaluation4 = {
  content:'Usability test at every stage',
  sectionClass: 'project-layout-wide',
  content: 'Again the users had told us ',
  columns: [{
    Header: <b>Questions</b>,
    accessor: 'questions' // String-based value accessors!
  }, {
    Header: <b>Prototype Deisgn 1</b>,
    accessor: 'user1'
  },{
    Header: <b>Prototype Deisgn 2</b> ,
    accessor: 'user2'
  },{
    Header: <b>Prototype Deisgn 3</b> ,
    accessor: 'user3'
  }],
  data: [{
    questions: <b>% of user transition from in-app promo message</b>,
    user1: '8%',
    user2: '15%',
    user3:''
  }, {
    questions: <b>% transition from first intro banner</b>,
    user1: '41%',
    user2: '69%',
    user3:''
  }, {
    questions: <b>% Plan selected</b>,
    user1: '10%',
    user2: '20%',
    user3:''
  },{
    questions: <b>Number of feedbacks</b>,
    user1: '2',
    user2: '11',
    user3:''
  }]
}
const idea1cons = {
  content: ['**PROS**: this is a dynamic approach to generating more freedom and flexibility for the users. The hovercard design is also subtle enough that it does not obscure much of the information on the original page. ',
 '**CONS**: The real estate space is very limited. Certain information has been sacrificed due to a lower priority.  ']
}
const interaction1 = {
  title: 'Crafting the Interaction',
  deviceFrame: 'phone',
  contentLeft: 'While the user profile pages vary in content, layout and style. I discovered that they all share the same elements: user profile image, user name, short description and occationally links. For Ideation 2, I want to propose a **Consistent header section** for all user profile pages that allows visitors to explore different contents.',
  videoRight: '../../../assets/images/proj_joist/section_design3.mp4',
}

const ideacombine = {
  title: 'Combining ideas',
  sectionClass: 'project-layout-wide',
  content: 'Due to the close results and feedbacks from the users, we ran into the conflict of selecting the design.',
  img: '../../../assets/images/proj_joist/Homepage-Hero-Backgroun.png',
}

const prototypeApp = {
  title: 'Design Mockup',
  deviceFrame: 'laptop',
  sectionClass: 'project-layout-wide',
  content: 'The following design mockup is for the forum page. The UI design follows the general style of the Unity live platform.',
  img: '../../../assets/images/proj_joist/features-estimate.png',
}
const prototypeApp2 = {
  deviceFrame: 'desktop',
  content: 'Another design with more detailed information about the user on the Unity Connect main page.',
  img: '../../../assets/images/proj_joist/Homepage-Hero-Backgroun.png',
}

const prototypeApp3 = {
  deviceFrame: 'laptop',
  sectionClass: 'project-layout-wide',
  content: 'The visual style of the Header section contains consistency with the overall Unity scheme and palette. No matter which community page it is, the header remain unchanged.',
  imgLeft: '../../../assets/images/proj_joist/Joist-Invoicing-Mobile-Device-Screen.png',
  contentLeft:'Community Answer page',
  imgRight: '../../../assets/images/proj_joist/features-estimate.png',
  contentRight:'Unity Connect'
}

const video = {
  title:'Video Walkthrough',
  img: '../../../assets/images/proj_joist/dummy-plan3.png',
}

class Joist extends React.Component {
  render () {
    const style = {
      title: 'A Job Winning Solutions for Contractors',
      headerImage: '../../assets/images/proj_joist/joist-logo-wht.svg',
      logo: '../../assets/images/proj_joist/unitylogo-w.svg',
      color: '#67C118',
      url: '',
      textonColor: 'text-dark'
    }
    return (
      <div>
        <LayoutNavbar style={style} />
        <Element name='Define'><ProjectTitle content={style} style={style} /></Element>
        <div className='project-content-layout'>

          {/* Problem & Challenge */}
          <LayoutImage content={introRole} style={style} />
          <Problem content={problem} style={style} />
          <LayoutText content={challenge} style={style} />

          {/* Research */}
          <Element name='Research'><TitleDivier content={titleText1} style={style} /></Element>
          <LayoutHalf content={evaluation2} style={style} />
          <LayoutImage content={evaluation3} />
          <Problem content={findingCompare} style={style} />

          {/* UX solutions */}
          <Element name='Solution'><TitleDivier content={titleText3} style={style} /></Element>
          <LayoutHalf content={collaboration} />
          <LayoutImage content={system} />
          <LayoutThree content={threeSolutions} />
          <LayoutImage content={heatmap} />
          <TableComponent content={evaluation4} />
          <FindingComponent content={idea1cons} style={style} />
          <LayoutHalf content={interaction1} />
          <LayoutImage content={ideacombine} />

          {/* UI design */}
          <Element name='Design'><TitleDivier content={titleText4} style={style} /></Element>
          <LayoutImage content={prototypeApp} />
          <LayoutImage content={prototypeApp2} />
          <LayoutHalf content={prototypeApp3} />
          <LayoutImage content={video} />

          <ProjectFooter content={style} style={style} />
        </div>
      </div>
    )
  }
}

export default Joist
