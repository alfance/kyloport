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

const titleText4 = {title: 'Case Study on One of the Job Winning Features'}

const titleText5 = {title: 'Reflections'}

const introRole = {
  content: '#### Joist is a cross-platform app build for trade contractors to create quick estimates & professional invoices, and getting paid. Being the leading product designer, I was responsible for the start-to-finish feature development. ####',
  img: '../../../assets/images/proj_joist/joist_header_1.png',
  sectionClass: 'project-layout-wide'
}

const problem = {
  title: 'Problem',
  sectionClass:'remove-title-sapce',
  content: ['The majority of Joist&#8217s users are small business owners & contractors who use the app to save time on their paperwork process so they can focus on the labour work. The major difficulties they experience are to win more jobs and manage their work & company more effortlessly. The problem Joist is tackling is to help contractor businesses thrive.',
  '** Job-winning problem: **',
  '#### * "Winning jobs is harder than ever. I feel I’m being priced out of the market on both sides..." 😟 * ####',
  '** Team management problem: **',
  '#### * I have grown beyond the point where I can do all of the book work on my own. I need Joist to allow partial access to my employees. 🏘 * ####']
}

const challenge = {
  title: 'My Challenge',
  content: ['The goal of this project was to define the next major approach to help the contractors grow their business. My duties involve mapping out the uncertainties & risks by conducting market and user research, coming up with potential solutions, ideation & usability validation, and interaction design. ']
}

const evaluation2 = {
  title: 'Validate the solutions',
  sectionClass: 'project-layout-wide',
  content:['We started with cumulating past user feedbacks and interviews. The most requested features were multi-user management for teams, advanced estimate & invoice customization, monthly/weekly report and social media reviews.',
'We divided the feature list to **two approaches one focusing on team management and the other one job-winning**. I then worked closely with the Android developers to create an in-app test that allows us to **directly collect the interests of the two components** from our users. ',
'The **"Wizard of Oz"** approach displays a CTA banner to randomly selected users, which then leads the users to go through an A/B test funnel that display different features, pricing options and feedback form. We track the click & transition rate for the two approaches to see which one is truly needed.'],
  imgLeft:'../../../assets/images/proj_joist/team_screenshot.png',
  contentLeft:'**Joist Team**: Letting the user create unique logins for each team member, adding access controls to the data.',
  imgRight:'../../../assets/images/proj_joist/elite_screenshot.png',
  contentRight:'**Joist Advanced**: Focusing on document customization, social approval and job tracking.',
}

const evaluation3 = {
  title: 'Data evaluation & decision making',
  content: 'The test had been running for a week. We collected over four thousands of user data. As a result, Joist Advanced had generated twice as many interests from the users than Joist Team. ',
  img:'../../../assets/images/proj_joist/chart1.svg',
}

const findingCompare = {
  title: 'Finding',
  content: ['The data had given us enough confidence to **move forward with the Advanced customization approach**. To develop a more in-depth understanding, I held 10 phone interviews with the testers to find out the thought process behind their decision. The takeaway was positive and the major reason for test abandonment was due to pricing concern.',
'_ "I would like to know everything about it and when the new features will be functional. thank you for all your help." _',
'_ "Would like to sample upgrades before committing to subscribe to it." _',
'_ "I want to test this for a few days to learn about this function. I also would like to..." _',]
}

const collaboration = {
  title: 'Collaborate to search for the solution space',
  content: 'With a clear direction, I conducted a round of design ideation sessions with the product team, dev team and customer success team. The purpose was to collect ideations and thoughts of people regarding feature priority, technical constraints and team bandwidth. ',
  imgLeft: '../../../assets/images/proj_joist/collab1.jpg',
  imgRight: '../../../assets/images/proj_joist/collab2.jpg',
}

const featurelist = {
  content: 'The teams had given me a lot of insights. The following diagram illustrates all the essential features needed to help the contractors win their jobs. The development process we took was a feature-based. With the design team starting with the most critical and complex feature first. ',
  img: '../../../assets/images/proj_joist/features-list.svg',
}

const system = {
  title: 'Starting with low fidelity prototype interaction',
  sectionClass: 'project-layout-wide',
  content: 'At the onset of the feature development, we broken down the features into sections with levels of demands and importance, and then desinging for the most optimized and best possible experiences tackling each section',
  img: '../../../assets/images/proj_joist/section_wireframe_1.png',
  label: 'Early stage wireframe exploring multiple approaches for adding sections to categorize line items in each documents.'
}

const threeSolutions = {
  title: 'Sections: categorizing line items',
  deviceFrame: 'phone',
  content: ['Add sections to the estimate to categorize line items is a frequently requested feature. This is important for the contractors to better display their estimation to the homeowners, thus increase their chance of winning the job.',
  'I prototyped 3 wireframe variations each differs in flexibility & ease of understanding.'],
  imgLeft: '../../../assets/images/proj_joist/advanced_section_v1_diff.png',
  imgMiddle: '../../../assets/images/proj_joist/advanced_section_v3_diff.png',
  imgRight: '../../../assets/images/proj_joist/advanced_section_v5_diff.png',
  contentLeft: '**Design 1**: Restricted flow. Users must start with adding section first before they can add a line item.',
  contentMiddle: '**Design 2**: Freedom in adding either section or item. On another hand, items must be wrapped in sections.',
  contentRight: '**Design 3**: Optimized flexibility. Users can choose to add section or item with no constraints'
}

const sectiontest = {
  title:'Test out the designs',
  sectionClass: 'project-layout-wide',
  content: 'The same approach is used to work out the best solution, we implemented in-app notification to ask volunteers to try out the design variations. ',
  img: '../../../assets/images/proj_joist/test-flow.png',
  label: '**Test flow**: users would see a notification asking to test out the prototype. After they have agreed to the terms, we randomly assign the a variation and track the progress they have made.'
}

const heatmap = {
  sectionClass: 'project-layout-wide',
  content: 'We have sent out the test to around 400 users. Out of the 90 users who completed all the tasks, we were able to track their clicks, events and flow together with the users who did not make it to the end. Following is a heatmap showing the clicks on each screen from one of the variants. ',
  img: '../../../assets/images/proj_joist/section_heatmap.png'
}
const evaluation4 = {
  content:'Usability test at every stage',
  sectionClass: 'project-layout-wide',
  content: 'Again the users had told us ',
  columns: [{
    Header: '',
    accessor: 'questions' // String-based value accessors!
  }, {
    Header: <b>Prototype 1</b>,
    accessor: 'user1'
  },{
    Header: <b>Prototype 2</b> ,
    accessor: 'user2'
  },{
    Header: <b>Prototype 3</b> ,
    accessor: 'user3'
  }],
  data: [{
    questions: <b>% Success Rate</b>,
    user1: '29%👎',
    user2: <b>58%👍</b>,
    user3:'45%'
  }, {
    questions: <b>Average Duration</b>,
    user1: <b>59s👍</b>,
    user2: '89s',
    user3:'183s👎'
  }, {
    questions: <b>Test Coverage</b>,
    user1: <b>48%👍</b>,
    user2: '33%👎',
    user3:'39%'
  }]
}

const chart2 = {
  img: '../../../assets/images/proj_joist/chart2.svg',
  label:'**Chart**: Do the users who completed the tasks understand the purpose & functionality of the prototype?'
}
const idea1cons = {
  content: ['The test result had given me clear insights into the pro and cons of each prototype. After a round of analysis and evaluation, we decide to remove design 3 due to poor performance & technical difficulty. Design 1 and 2 have pros and cons that we do not want to settle. ',
  '**Design 1**:',
  'PROS: Very clear flow & steps for the user to follow.',
 'CONS: It creates friction for contractors who don&#39;tt need sections.',
  '**Design 2**:',
  'PROS: PROS: Offers flexibility for both types of contractors. ',
  'CONS: It is more complex and creates a understanding barrier']
}

const ideacombine = {
  title: 'Combining the best cases to form a new solution',
  deviceFrame: 'phone',
  content: ['Both design 1 and design 2 have the potential to be the solution for creating sections. However, there are concerns associated with each of the prototypes as well. After engaging a couple of conversations with the product team, I combined the two prototypes to create a new solution.'],
  imgLeft: '../../../assets/images/proj_joist/combine1.png',
  imgMiddle: '../../../assets/images/proj_joist/combine2.png',
  imgRight: '../../../assets/images/proj_joist/combine13.png',
  contentLeft: '**Step 1**: Users have the freedom to toggle section on or off.',
  contentMiddle: '**Step 2**: Once section is on, users must start with creating section.',
  contentRight: '**Step 3**: Creating line items is enabled after section is been created.'
}

const interaction1 = {
  deviceFrame: 'phone',
  contentLeft: 'The new solution combines the advantages of design 1 and 2 by providing very clear guidance in the flow and enough amount of flexibility and freedom for all users. All stakeholders feel confident to implement this new approach with the supporting data. ',
  videoRight: '../../../assets/images/proj_joist/section_design3.mp4',
}

const finalComments = {
  sectionClass:'remove-title-sapce',
  content:['#### * "Would be a great feature to be able to divide into sections for each room." * ####',
'#### * "Great added feature. This would make my estimates more detailed." * ####',
'#### * "Nice! Will be very helpful!" * ####']
}
const reflections = [
  { title: 'Learning',
    subject: 'Invole your users in any design & research stage.',
    learn: 'As a designer, it is almost a no brainer to always think to form the perspective of your users. But a lot of times we have neglected the significance of interacting with our users throughout the design cycle. Getting real feedback from the users can often reveal areas we have missed.'
  }, {
    subject: 'Usability test in the natural habitat',
    learn: 'The designer or researcher does not always have to be present to test out prototypes in the users&#39;t natural habitat. By creating a scenario similar to the user&#39;t digital environment can also generate authentic results. '
  }, {
    subject: 'If you have doubts, clear the doubt before starting any design work.',
    learn: 'The first 2 steps of interactive design thinking are to help the designer understand the problem and needs. Utilizing the methodologies to raise your understanding is crucial to the contribution of the final product.'
  }
]

class Joist extends React.Component {
  render () {
    const style = {
      title: 'A Job-Winning Solutions for Contractors',
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
          <LayoutImage content={featurelist} />
          <LayoutImage content={system} />

          {/* UI design */}
          <Element name='Design'><TitleDivier content={titleText4} style={style} /></Element>
          <LayoutThree content={threeSolutions} />
          <LayoutImage content={sectiontest} />
          <LayoutImage content={heatmap} />
          <TableComponent content={evaluation4} />
          <LayoutImage content={chart2} />
          <FindingComponent content={idea1cons} style={style} />
          <LayoutThree content={ideacombine} />
          <LayoutHalf content={interaction1} />

          <Element name='Result'></Element>
          <Problem content={finalComments} style={style} />
          <Reflection content={reflections} />
          <ProjectFooter content={style} style={style} />
        </div>
      </div>
    )
  }
}

export default Joist
