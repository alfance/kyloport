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

const whoami = {
  content:['Name: **Kylo **','Profession: **Product Designer**', 'Location: **Toronto, Canada**','Specialization: **web-app, mobile, AR, VR**' ],
  img:'../../../assets/images/proj_joist/joist_header_1.png',

}

const problem = {
  title: 'Problem',
  sectionClass: 'list-style-circle',
  content: [ 'User Interactions on Unity Live Platform','Small business extremely busy. What is the next feature to help them save time and win job.',
    'Users are limited to the service they are currently on when interacting with each other',
    'Merging the various user profiles from different services into one is not feasible nor UX plausible.']
}

const challenge = {
  title: 'My Challenge',
  content: ['In charge of the next major objective. key stakeholders want to the do team. ','My Question: Is the somthing the users really need? How can we find out. ']
}

const evaluation = {
  title: 'Getting to the problem ',
  content: ['Getting to the problem by getting to the users. We conducted surveys to get a general option of the users how they think about the team features. around 100 feedbacks. Then selected 10 users to talk to them directly',
  'What we got from the survey:',
'80% of survey respondents have more than 1 person in the company',
'39% has > 1 estimator / invoicer',
'44% has > 1 joisters',
'What we do not know:',
'Do users need a team feature?',
'Are they willing to pay for the feature? How much?']
}

const evaluation2 = {
  title: 'Validate the problemn',
  content:'It is essential to give us enough confidence to move forward. We are testing out two completely different features at users natural habitat. Tested out 3 pricing variants for each of the design.',
  imgLeft:'../../../assets/images/proj_joist/team_screenshot.png',
  contentLeft:'**Team Design**: All past works uploaded by the user is showed on the asset page.',
  imgRight:'../../../assets/images/proj_joist/elite_screenshot.png',
  contentRight:'**Elite Design**: Connect page adapts the newsfeed layout as a user&#8217s major marketing source.',
}

const result1 = {
  title: 'Data Collection & evaluation',
  content: ['Much to expectation and surprise, The Elite model had triumphed Team by 3 times. ',
'80% of survey respondents have more than 1 person in the company',
'39% has > 1 estimator / invoicer',
'44% has > 1 joisters',
'What we do not know:',
'Do users need a team feature?',
'Are they willing to pay for the feature? How much?']
}

const interview = {
  title: 'User Interviews',
  content: 'To get a better insight into how the user think about the online platform, I did brief coffee interviews with 2 Unity users. One is a seasoned developer and another one is an artist who just transitioned to Unity recently.',
  columns: [{
    Header: <b>Questions</b>,
    accessor: 'questions' // String-based value accessors!
  }, {
    Header: [<b>Developer</b>, <br />,<img src='../../../assets/images/proj_joist/avatar-13.png' /> ],
    accessor: 'user1'
  },{
    Header: [<b>Artist</b> , <br />,<img src='../../../assets/images/proj_joist/avatar-0.png' />],
    accessor: 'user2'
  }],
  data: [{
    questions: <b>How many times have you visited Unity live platform past week</b>,
    user1: '3, 4 times',
    user2: 'Couple times'
  }, {
    questions: <b>What is your most frequently used service/s</b>,
    user1: 'Asset Store, shop for sale!',
    user2: 'the Unity Learning centre'
  }, {
    questions: <b>Where do you search for help</b>,
    user1: 'Google, Slack group',
    user2: 'Google, ask friends for help'
  },{
    questions: <b>How do you connect with other developers & artist</b>,
    user1: 'Occationally social events, mostly just through work or real life friends',
    user2: 'Only connect with artists on twitter / Artstation'
  }]
}

const findingCompare = {
  subtitle: 'Finding',
  sectionClass: 'list-style-circle',
  content: ['One major challenge for the platform is to efficiently distribute the massive resources to the users. I found that Unity has provided a variety of services to encourage user communications and interactions, but when I was speaking to the users, they still rely heavily on external resources. This can be improved by fixing some of the design heuristics.',
 '**Consistency**: Clicking on user profile yields inconsistant results.',
'**Flexibility**: The connect page is hidden from the users. Path to the service is not flexible',
'**Support Error Recovery**: Some of the groups under Unity connect generates 503 pages.']
}

const system = {
  title: 'First, Let us break down the system',
  sectionClass: 'project-layout-wide',
  content: 'I laid out the ecosystem of Unity&#39;s online platform focusing exclusively on the user interaction aspects. The diagram shows all the portals and links a user can do to interact with another user. ',
  img: '../../../assets/images/proj_joist/unity_system.png',
  label: 'Here comes the question: **What can be done to mitigate all the middles steps & navigational clicks to let people directly access what they want?**'
}

const idea1 = {
  title: 'Ideation 1: Username Hovercard',
  content: '1) Hover usercard that expands additional information when mouseover. 2) An icon located next to the username that triggers a dropdown hovercard with additional information and actionable links. Option 2 is for accessibility across multiple devices.',
  img: '../../../assets/images/proj_joist/idea1.jpg'
}
const wireframe1 = {
  sectionClass: 'project-layout-wide',
  content: '**Wireframe for Ideation 1**',
  img: '../../../assets/images/proj_joist/wirefram1.png'
}
const idea1cons = {
  content: ['**PROS**: this is a dynamic approach to generating more freedom and flexibility for the users. The hovercard design is also subtle enough that it does not obscure much of the information on the original page. ',
 '**CONS**: The real estate space is very limited. Certain information has been sacrificed due to a lower priority.  ']
}
const idea2 = {
  title: 'Ideation 2: Consistent User Profile Section',
  sectionClass: 'project-layout-wide',
  content: 'While the user profile pages vary in content, layout and style. I discovered that they all share the same elements: user profile image, user name, short description and occationally links. For Ideation 2, I want to propose a **Consistent header section** for all user profile pages that allows visitors to explore different contents.',
  imgLeft: '../../../assets/images/proj_joist/idea2.jpg',
  contentLeft:'Notebook sketch of how the section should look like',
  imgRight: '../../../assets/images/proj_joist/wireframe2.png',
  contentRight:'Ideation 2 Wireframe',
}

const idea2cons = {
  content: ['**PROS**: The profile page header section is robust enough to be placed under almost all profile pages. This empowers users to go to any services without complex navigation.',
 '**CONS**: May require specific customization and extra technical support in order to be implemented to all pages. ']
}
const ideacombine = {
  title: 'Combining both ideas',
  sectionClass: 'project-layout-wide',
  content: 'After analyzing the pros and cons for each ideation, I realized that combining the 2 design together will make a seamless flow for user interactions. ',
  img: '../../../assets/images/proj_joist/flow.jpg',
}

const ideacombine2 = {
  title: 'Combining both ideas',
  content: 'The 2 concepts can complement each other well. Following is a connected motion flow of a user going from the community page to the profile page with options.',
  img: '../../../assets/images/proj_joist/unity_design.gif',
}

const prototypeApp = {
  title: 'Design Mockup',
  deviceFrame: 'laptop',
  sectionClass: 'project-layout-wide',
  content: 'The following design mockup is for the forum page. The UI design follows the general style of the Unity live platform.',
  img: '../../../assets/images/proj_joist/design1.png',
}
const prototypeApp2 = {
  deviceFrame: 'desktop',
  content: 'Another design with more detailed information about the user on the Unity Connect main page.',
  img: '../../../assets/images/proj_joist/design2.png',
}

const prototypeApp3 = {
  deviceFrame: 'laptop',
  sectionClass: 'project-layout-wide',
  content: 'The visual style of the Header section contains consistency with the overall Unity scheme and palette. No matter which community page it is, the header remain unchanged.',
  imgLeft: '../../../assets/images/proj_joist/design3.png',
  contentLeft:'Community Answer page',
  imgRight: '../../../assets/images/proj_joist/design4.png',
  contentRight:'Unity Connect'
}

const video = {
  title:'Video Walkthrough',
  video:'https://youtu.be/eoAf-8rzTyo'
}

const usability = {
  title: 'Prospective Usability Test',
  content: [
    'In order to measure the success of the user profile design, there are 2 methods I can adpot to acquire data. One can be executed based on the wireframe and mockup; Another one can be measured using analytic tools after implementation',
    '1) For the usability test, I will test it with the two interviewers to see if the design can help them better interat with the online platform.Set up the heatmap test case on **quant.ux**. Create 2 tasks for the testers to work on: Find the Asset page through the user profile channel; Find out the projects user is working on.',
    '2) If the previous measurement had shown a promising result, I would like to implement analytic tools (google or mixpanel) to track the click rate, most clicks and least clicks, time spent and boucne rate on the hovercard / user profile.'
  ]
}

const test = {
  title:'Interactive Mockup',
  content:'Following is an interactive test mockup I sent out to current Unity users and people who don&#8217t use Unity. I have set up a goal and track the completion rate of each tester. '
}

const result = {
  title:'Result',
  content:['In total I tested the prototype with 5 different people, which 4 of them had shown results of goal completion. the objective I give to each of the participants were nagivating to the specific user&#8217s asset store from the page (answer page). There are multiple ways to do so and I set each of the funnel as a task.'],
  img:'../../../assets/images/proj_joist/result.png',
  label:['Tasks:','Goal 1: clicking on the user card directly to goto asset store.' ,'Goal 2: Clicking on the asset page button in comunity page.' , 'Goal 3: Clicking on the asset page button in profile page.']
}

const videoresult ={
  content:'Following are the heatmaps I recorded from the tests.',
  imgLeft:'../../../assets/images/proj_joist/heat1.png',
  imgRight:'../../../assets/images/proj_joist/heat2.png',
}
const videoresult1 ={
  className:'project-layout-wide',
  imgLeft:'../../../assets/images/proj_joist/heat3.png',
  imgMiddle:'../../../assets/images/proj_joist/heat5.png',
  imgRight:'../../../assets/images/proj_joist/heat4.png',
}

class Unity extends React.Component {
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
          <LayoutImage content={whoami} style={style} />
          <Problem content={problem} style={style} />
          <Problem content={challenge} style={style} />

          {/* Research */}
          <Element name='Research'><TitleDivier content={titleText1} style={style} /></Element>
          <LayoutHalf content={evaluation} style={style} />
          <LayoutHalf content={evaluation2} style={style} />
          <LayoutImage content={result1} style={style} />
          <TableComponent content={interview} />
          <FindingComponent content={findingCompare} style={style} />

          {/* UX solutions */}
          <Element name='Solution'><TitleDivier content={titleText3} style={style} /></Element>
          <LayoutImage content={system} />
          <LayoutImage content={idea1} />
          <LayoutImage content={wireframe1} />
          <FindingComponent content={idea1cons} style={style} />
          <LayoutOneThird content={idea2} />
          <FindingComponent content={idea2cons} style={style} />
          <LayoutImage content={ideacombine} />
          <LayoutImage content={ideacombine2} />

          {/* UI design */}
          <Element name='Design'><TitleDivier content={titleText4} style={style} /></Element>
          <LayoutImage content={prototypeApp} />
          <LayoutImage content={prototypeApp2} />
          <LayoutHalf content={prototypeApp3} />
          <LayoutImage content={video} />

          {/* results and reflections */}
          <TitleDivier content={titleText5} style={style} />
          <LayoutImage content={usability} style={style} />
          <LayoutText content={test} style={style} />
          <iframe id='iframe-brio' src="https://www.quant-ux.com/em.html?h=a2aa10a43jZEHTgDZi0r1kmkhZz7eMBtMlHfYVPJqyM6Iz3COohVrwERwq22" allowFullScreen allowTransparency="true" frameborder="0"></iframe>
          <LayoutImage content={result} style={style} />
          <LayoutHalf content = {videoresult} />
          <LayoutThree content = {videoresult1} style={style} />
          <ProjectFooter content={style} style={style} />
        </div>
      </div>
    )
  }
}

export default Unity
