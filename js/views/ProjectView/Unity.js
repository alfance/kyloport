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


const problem = {
  title: 'Problem',
  sectionClass: 'list-style-circle',
  content: [ 'User Interactions on Unity Live Platform','The disparate nature of how users encounter each other across the ecosystem is a soft blocker today.',
    'Users are limited to the service they are currently on when interacting with each other',
    'Merging the various user profiles from different services into one is not feasible nor UX plausible.']
}

const whoami = {
  content:['Name: **Kylo **','Profession: **Product Designer**', 'Location: **Toronto, Canada**','Specialization: **web-app, mobile, AR, VR**' ]

}
const challenge = {
  title: 'My Challenge',
  content: 'Come up with a solution that empowers seamless interactions and information sharing between the users across Unity&#8217s multiple live services.',
}

const evaluation = {
  title: 'Heuristic Evaluations',
  content: 'At the discovery phase, I first conducted heuristic evaluations on how user profile is displayed in various Unity&#8217s online services. Following are some findings:',
  imgLeft:'../../../assets/images/proj_unity/page_forum.jpg',
  contentLeft:'**Forum Page**: when user name is clicked, a model popups with basic user data.',
  imgRight:'../../../assets/images/proj_unity/page_answer.jpg',
  contentRight:'**Answer Page**: The answer page displays the user activities in relevance to the answer section.',
}
const evaluation2 = {
  imgLeft:'../../../assets/images/proj_unity/page_asset.jpg',
  contentLeft:'**Asset Page**: All past works uploaded by the user is showed on the asset page.',
  imgRight:'../../../assets/images/proj_unity/page_connect.jpg',
  contentRight:'**Connect Page**: Connect page adapts the newsfeed layout as a user&#8217s major marketing source.',
}

const interview = {
  title: 'User Interviews',
  content: 'To get a better insight into how the user think about the online platform, I did brief coffee interviews with 2 Unity users. One is a seasoned developer and another one is an artist who just transitioned to Unity recently.',
  columns: [{
    Header: <b>Questions</b>,
    accessor: 'questions' // String-based value accessors!
  }, {
    Header: [<b>Developer</b>, <br />,<img src='../../../assets/images/proj_unity/avatar-13.png' /> ],
    accessor: 'user1'
  },{
    Header: [<b>Artist</b> , <br />,<img src='../../../assets/images/proj_unity/avatar-0.png' />],
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
  img: '../../../assets/images/proj_unity/unity_system.png',
  label: 'Here comes the question: **What can be done to mitigate all the middles steps & navigational clicks to let people directly access what they want?**'
}

const idea1 = {
  title: 'Ideation 1: Username Hovercard',
  content: '1) Hover usercard that expands additional information when mouseover. 2) An icon located next to the username that triggers a dropdown hovercard with additional information and actionable links. Option 2 is for accessibility across multiple devices.',
  img: '../../../assets/images/proj_unity/idea1.jpg'
}
const wireframe1 = {
  sectionClass: 'project-layout-wide',
  content: '**Wireframe for Ideation 1**',
  img: '../../../assets/images/proj_unity/wirefram1.png'
}
const idea1cons = {
  content: ['**PROS**: this is a dynamic approach to generating more freedom and flexibility for the users. The hovercard design is also subtle enough that it does not obscure much of the information on the original page. ',
 '**CONS**: The real estate space is very limited. Certain information has been sacrificed due to a lower priority.  ']
}
const idea2 = {
  title: 'Ideation 2: Consistent User Profile Section',
  sectionClass: 'project-layout-wide',
  content: 'While the user profile pages vary in content, layout and style. I discovered that they all share the same elements: user profile image, user name, short description and occationally links. For Ideation 2, I want to propose a **Consistent header section** for all user profile pages that allows visitors to explore different contents.',
  imgLeft: '../../../assets/images/proj_unity/idea2.jpg',
  contentLeft:'Notebook sketch of how the section should look like',
  imgRight: '../../../assets/images/proj_unity/wireframe2.png',
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
  img: '../../../assets/images/proj_unity/flow.jpg',
}

const ideacombine2 = {
  title: 'Combining both ideas',
  content: 'The 2 concepts can complement each other well. Following is a connected motion flow of a user going from the community page to the profile page with options.',
  img: '../../../assets/images/proj_unity/unity_design.gif',
}

const prototypeApp = {
  title: 'Design Mockup',
  deviceFrame: 'laptop',
  sectionClass: 'project-layout-wide',
  content: 'The following design mockup is for the forum page. The UI design follows the general style of the Unity live platform.',
  img: '../../../assets/images/proj_unity/design1.png',
}
const prototypeApp2 = {
  deviceFrame: 'desktop',
  content: 'Another design with more detailed information about the user on the Unity Connect main page.',
  img: '../../../assets/images/proj_unity/design2.png',
}

const prototypeApp3 = {
  deviceFrame: 'laptop',
  sectionClass: 'project-layout-wide',
  content: 'The visual style of the Header section contains consistency with the overall Unity scheme and palette. No matter which community page it is, the header remain unchanged.',
  imgLeft: '../../../assets/images/proj_unity/design3.png',
  contentLeft:'Community Answer page',
  imgRight: '../../../assets/images/proj_unity/design4.png',
  contentRight:'Unity Connect'
}

const usability = {
  title: 'Prospective Usability Test',
  content: [
    'In order to measure the success of the user profile design, there are 2 methods I can adpot to acquire data. One can be executed based on the wireframe and mockup; Another one can be measured using analytic tools after implementation',
    '1) For the usability test, I will test it with the two interviewers to see if the design can help them better interat with the online platform.Set up the heatmap test case on **quant.ux**. Create 2 tasks for the testers to work on: Find the Asset page through the user profile channel; Find out the projects user is working on.',
    '2) If the previous measurement had shown a promising result, I would like to implement analytic tools (google or mixpanel) to track the click rate, most clicks and least clicks, time spent and boucne rate on the hovercard / user profile.',
    '*** Usability Test result coming soon ***'
  ]
}

class Unity extends React.Component {
  render () {
    const style = {
      title: 'Design Collaboration Test',
      headerImage: '../../assets/images/proj_unity/unitylogo-w.svg',
      logo: '../../assets/images/proj_unity/unitylogo-w.svg',
      color: '#2096F3',
      url: '',
      textonColor: 'text-light'
    }
    return (
      <div>
          <LayoutNavbar style={style} />
        <Element name='Define'><ProjectTitle content={style} style={style} /></Element>
        <div className='project-content-layout'>

          {/* Problem & Challenge */}
          <LayoutText content={whoami} style={style} />
          <Problem content={problem} style={style} />
          <Problem content={challenge} style={style} />

          {/* Research */}
          <Element name='Research'><TitleDivier content={titleText1} style={style} /></Element>
          <LayoutHalf content={evaluation} style={style} />
          <LayoutHalf content={evaluation2} style={style} />
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

          {/* results and reflections */}
          <TitleDivier content={titleText5} style={style} />
          <LayoutImage content={usability} style={style} />
          <ProjectFooter content={style} style={style} />
        </div>
      </div>
    )
  }
}

export default Unity
