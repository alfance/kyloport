import React from 'react'
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
import LayoutTwoThird from './components/LayoutTwoThird'
import Reflection from './components/Reflection'
import PortfolioStore from '../../stores/PortfolioStore'

const titleText1 = {title: 'User Insights'}

const titleText2 = {title: 'Market Research'}

const titleText3 = {title: 'Solution'}

const titleText4 = {title: 'UI Design'}

const titleText5 = {title: 'Reflections'}

const projectTitle = {
  title: 'CYCNAV',
  logo: '../../../assets/images/proj_cycnav/cycnav_logo_c.svg',
  field: 'UI/UX, Interaction Design',
  intro: 'Behaviour system for online VR platform',
  link: 'briovr',
  bgImg: ''
}

const introRole = {
  sectionClass: 'list-style-circle',
  content: 'CYCNAV is an IOT bike light guilding the cyclists traveling around the city. Together with the crowd sourcing mobile app, users are updated with the latest road conditions and are provided with the best cycling route.',
  duties: ['I worked as the UX designerfor this project. Some of my responsibilities included:',
    'Conduct user and market research and analysis',
    'Defining strategies & Scope',
    'Facilitate ideation & design decisions',
    'Create Wireframes & Prototypes',
    '3D modeling & printing of the physical Component',
    'Validation test and evaluations'],
  img: '../../../assets/images/proj_cycnav/cyc_thumb.png'
}

const problem = {
  title: 'Problem - Quick and Safe biking route',
  sectionClass: 'list-style-circle',
  content: [ 'The biggest pain that every cyclist has experienced, especially the urban cyclist, is to navigate in various road conditions and incidents that lead to unexpected detours. Looking for an applicable route can be time consuming, while bypassing the original road can be dangerous.',
    'Troubled by the Downtown road conditions',
    'Limited apps to give guidence and suggestions on routes',
    'Existing apps are often distractive and pause safety concerns to the users']
}

const interviews = {
  title: 'Interviews',
  content: 'At the discovery phase of my project, we conducted user interviews from people use bike on a regular basis. Following is a summary of the answers:',
  columns: [{
    Header: '#',
    accessor: 'number' // String-based value accessors!
  }, {
    Header: 'Type',
    accessor: 'type'
  }, {
    Header: 'Biking Frequency(daily)',
    accessor: 'frequency'
  }, {
    Header: 'Need for map?',
    accessor: 'map'
  }],
  data: [{
    number: 1,
    type: 'Professional',
    frequency: '2 - 3',
    map: 'NO'
  }, {
    number: 2,
    type: 'Student',
    frequency: '2 - 4',
    map: 'Sometimes'
  }, {
    number: 3,
    type: 'Delivery Worker',
    frequency: '> 10',
    map: 'Yes'
  }, {
    number: 4,
    type: 'Hobbists',
    frequency: '1 - 4',
    map: 'Sometimes'
  }]
}

const persona = {
  title: 'Personas',
  content: 'As a result, the two types of users that will be benfited the most from our app are student bikers and Food delivery individula.Their similarity is the need of safe and correct route when cycling in the urban environment.',
  imgLeft: '../../../assets/images/proj_cycnav/avatar-0.svg',
  imgRight: '../../../assets/images/proj_cycnav/avatar-2.svg',
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

const findingPersona = {
  subtitle: 'finding',
  content: 'The users who will benefit the most from our app are frequent users of bicycles, and travel to various places'
}

const userJourney = {
  title: 'User Roadmap',
  sectionClass: 'project-layout-wide',
  content: 'Cycnav focuses on the two main purposes: 1) Get to the destination. 2) Fast and safe.',
  img: '../../../assets/images/proj_cycnav/roadmap.png',
  label: 'The highlighted bubble are the main functions users will be using, while supporting features(grey bubble) will be the key to the overall NUX'
}

const storyboard = {
  sectionClass: 'project-layout-wide',
  title: 'Storyboard',
  content: 'I created storyboard to better help us visualize and predit the user experience with Cycnav. This let us realize that majority of the usage happens on the road where the bike light navigates cyclists. On the other hand, the app serves at the back to do all the calculation and processing.',
  img: '../../../assets/images/proj_cycnav/storyboard.jpg'
}

const comparativeAnalysis = {
  title: 'Comparactive Analysis',
  data: [{
    number: 1,
    app: [<img src='../../../assets/images/proj_cycnav/google_map.png' />, <br />, 'Google maps'],
    work: ['• Bike friendly trails and lanes', <br />,
      '• Route suggestion based on cyclists preference', <br />
    ],
    nowork: ['•Driving centric navigation', <br />,
      '• No Bike share map'
    ]
  }, {
    number: 2,
    app: [ <img src='../../../assets/images/proj_cycnav/vanhawks_logo.png' />, <br />, 'Vanhawks'],
    work: ['• Self sustained, no need for phone / GPS', <br />,
      '• Speed tracking', <br />,
      '• feature that notifies nearby traffic in the blindspot.'
    ],
    nowork: ['• Costly', <br />,
      '• No live updates of current road condition'
    ]
  }, {
    number: 3,
    app: [<img src='../../../assets/images/proj_cycnav/waze.png' />, <br />, 'Waze'
    ],
    work: ['• User Contribution', <br />,
      '• Social feature, friends option'
    ],
    nowork: ['• Car focused, not for cyclists', <br />,
      '• no offline map'
    ]
  }],
  columns: [{
    Header: 'App /Device',
    accessor: 'app' // String-based value accessors!
  }, {
    Header: 'What works',
    accessor: 'work'
  }, {
    Header: 'What doesnt work ',
    accessor: 'nowork'
  }]
}

const findingCompare = {
  subtitle: 'Finding',
  content: 'A lot of the solutions out in the market is either app based, or hardware based. Many times, the problem can not be simply solved with just one method.As for CYCNAV, it is a combined solution that tackle the problem using both technologies.'
}

const devices = {
  title: 'App vs IOT',
  imgLeft: '../../../assets/images/proj_cycnav/phone.svg',
  imgRight: '../../../assets/images/proj_cycnav/bikelight.svg',
  sectionClass: 'section-devices',
  contentLeft: [
    '**Digital App**',
    '**Pros**: Accurante and fast route search',
    '**Cons**: Distractive, pro to light flare'
  ],
  contentRight: [
    '**Physical Device**',
    '**Pros**: Safe & all-in-one navigation and user contribution',
    '**Cons**: Costly'
  ]
}

const solutions = {
  content: 'Based on the result of comparative analysis, we decide to approach the problem using both digital and physical solutions. that is building a physical navigational device that would be powered by a digital app.',
  img: '../../../assets/images/proj_cycnav/phone_iot_wireframe.png',
  label: ['**Nav App**: The app uses googles map api to calculate the best route for the users, users can also input their finding of road conditions using the app.',
    '**Bike light**:The bike light is connected to the app using bluetooth. While the app is calculating and adjusting the route,the bike light functions as the visual portal to help guide the cyclists while they are biking.']
}

const wireframe1 = {
  title: 'Wireframe',
  sectionClass: 'project-layout-wide',
  content: '**Navigation App Wireframe 1**: For the earlier wireframe versions, we used Balsamiq to quickly block out the basic functionalities that cyclists had given us. We wan to make sure we include everything needed by our users and nothing unnecessary.',
  img: '../../../assets/images/proj_cycnav/wireframes1.png'
}
const wireframe2 = {
  sectionClass: 'project-layout-wide',
  content: '**Navigation App Wireframe 2**: I started laying out the frameworks of the app with consideration of the app&#39;s interaction with the IOT.',
  img: '../../../assets/images/proj_cycnav/wireframes2.png'
}

const usability = {
  title: 'Usability Test',
  content: [
    '1) Users often forgot to move from the mobile app to the bike light. a more clear and obvious indication is needed',
    '2) While using the bike light, people sometimes got confused by complex routes. This is caused by lack of instructive indicators.'
  ]
}

const iterations = {
  title: 'Iterations',
  sectionClass: 'list-style-circle',
  content: [
    'We focuse improvements on the following two major components:',
    '1) Spend more time with the user on the onboarding, especially when they are connecting the bike light to the app.',
    '2) Reformat the UI of buttons on the bike lights, increase the size to max out accessibility.'
  ],
  img: '../../../assets/images/proj_cycnav/journey_map.jpg'

}

const testResult = {
  title: 'Result',
  columns: [{
    Header: 'Feature',
    accessor: 'feature' // String-based value accessors!
  }, {
    Header: 'Problem',
    accessor: 'problem'
  }, {
    Header: 'Iteration',
    accessor: 'iteration'
  }, {
    Header: 'Results',
    accessor: 'result'
  }],
  data: [{
    feature: 'App to Device transition',
    problem: 'User stuck after connect to bike light',
    iteration: 'Redirect to app main map',
    result: [<i className='icon-up' />, '50% Smooth']
  }, {
    feature: 'Onboarding',
    problem: 'User neglected message to transit to ',
    iteration: 'Full screen instruction',
    result: [<i className='icon-up' />, '25% Smooth']
  }, {
    feature: 'Bike light navigation',
    problem: 'Missing or unclear indicators',
    iteration: 'Create vartions in indicator size',
    result: [<i className='icon-up' />, '75% Smooth']
  }]
}

const prototypeApp = {
  title: 'Prototype - APP',
  deviceFrame: 'phone',
  content: 'We had a few variations for the Prototype as shown below. One consideration that is more important than the asthetics of the app itself, is the readability of the screen under different light conditions.',
  imgLeft: '../../../assets/images/proj_cycnav/app_prototype1.png',
  imgMiddle: '../../../assets/images/proj_cycnav/prototye-2.jpg',
  imgRight: '../../../assets/images/proj_cycnav/app_prototype3.png',
  contentLeft: '**Design 1**: a green theme is used as we are hoping to achive a eco travel method.',
  contentMiddle: '**Design 2**: a green theme is used as we are hoping to achive a eco travel method.',
  contentRight: '**Design 3**: a green theme is used as we are hoping to achive a eco travel method. '
}

const moreprototypes = {
  deviceFrame: 'phone',
  contentLeft: ['#### Crowd sourcing map ####',
    'Crowdsourcing is an addon component to help live update the route. While doing research, we founded out that many of the minor road changes and modifications are not recorded in mainstream navigational apps. We wanted to adopt a similar strategy as Wazer. ',
    'This is most beneficial to delivery courier due to their high demand on the road conditions.'],
  imgMiddle: '../../../assets/images/proj_cycnav/prototype2.png',
  imgRight: '../../../assets/images/proj_cycnav/prototype3.png'
}

const accessibility = {
  title: 'Accessibility',
  sectionClass: 'project-layout-wide',
  content: 'Cycnav will be used by users with various backgrounds under unpredictable lighting conditions. It is our utmost priority to ensure the readability of the UI not only for regular users but also users with vision disabilities.',
  imgLeft: '../../../assets/images/proj_cycnav/app_color.png',
  contentRight: ['The color scheme of Cycnav should be accessible for vision deficient users. This is the reason for us to use complimentary colors in the navigational part. We had tested the accissibility of each screento make sure they are readable for everyone.',
    '**Left**: Red-Weak/Protanomaly',
    '**Middle**: Blue-Blind/Tritanopia',
    '**Right**: Blue Cone Monochromacy',
    'In the end, we decide to go with design 3 due to its readability even under extreme cenarios and conditions.']
}

const decision = {
  title: 'Final - Digital app',
  deviceFrame: 'phone',
  contentLeft: ['Putting everything together, the flow comes together. The video below briefly displayed the core flow of one of the most frequently used features. ',
    '1) User searches destination place',
    '2) User picks a route fro the suggestions',
    '3) Popup directing user to switch to bike light while the app continues',
    '4) Upon arrival, the app notifies the user'],
  videoRight: 'https://youtu.be/C-rnmIXUA0k'
}

const prototypeDevice = {
  title: 'Prototype - Bike Light',
  content: 'Same as the app, we tested multiple paper prototypes before making a decision. ',
  img: '../../../assets/images/proj_cycnav/light_prototype.jpg',
  label: 'The Best result is a fluid capsule with a slanted angle for optimized viewing experience.'
}

const device3D = {
  title: '3D & UI - Bike Light',
  sectionClass: 'project-layout-wide',
  content: 'We want to minimize the UI so bikers will not get distracted when using the bike light. ',
  img: '../../../assets/images/proj_cycnav/3d_design.png'
}

const variance3D = {
  content: 'Thanks to the modern technology, I was able to rapidly model the light in Rhinoceros and 3D print it using Makerbot. By having a tangible prototype, It allowed us to perform user test beyong a conceptual level.',
  sectionClass: 'project-layout-wide',
  imgLeft: '../../../assets/images/proj_cycnav/final_model.jpg',
  contentLeft: '**3D model**',
  imgRight: '../../../assets/images/proj_cycnav/3dprint.jpg',
  contentRight: '**3D printed light**'
}

const useCase = {
  title: 'Testing on the road',
  sectionClass: 'project-layout-wide',
  content: ['There is no better way to test the prototype other than use it like a real use, so we 3D printed the prototype and brought the light to the road to see how it responded to an actual use case environment.',
    'Real life testing was a lot different than monitored testing, we had acquired usability data that could not be collected in a staged environment.'],
  imgLeft: '../../../assets/images/proj_cycnav/case_img1.jpg',
  imgMiddle: '../../../assets/images/proj_cycnav/case_img2.jpg',
  imgRight: '../../../assets/images/proj_cycnav/case_img3.jpg'
}

const combine = {
  title: 'Combine the app and the light',
  content: 'Finally, we combine the design prototypes together. The following video explained how the app and light onboard first time users. ',
  video: 'https://youtu.be/N4n03C902iY'
}

const dobetter = {
  title: 'What can I do better?',
  sectionClass: 'list-style-circle',
  content: ['',
    'If possible resource wise, I would love to spend more time to test out the feasibility of the physical bike light. ',
    'The project was first started in 2015, a lot had since changed. Eventhough I did updated the research to be relevant to current market, the usability tests were outdated.',
    'Create a MVP of the bike light.']
}

const reflections = [
  { title: 'Learning',
    subject: 'Adaptive design is crucial for various format of medium.',
    learn: 'The essense of UX design is to solve problems, not using templates '
  }, {
    subject: 'Sometimes the perfect solution is not one, but multiple approaches.',
    learn: 'If we have not done the user test and market analysis, we were Automatically assumed to go with one of the twocompletely different method for the problem we are presented. By adapting the UX research process we were able to focus on our users, coming up with valid solutions for the problems insead of making assumptions for the sake of building a tool.'
  }, {
    subject: 'Being able to pick up new skills and learn quickly is part of the UX.',
    learn: 'This probject was done with limited time and resources. at times I had to learn new softwares, pick up technical skills along the way. This is not only helpful to me personaly, but it broadens my pespective as an UX design, where I was able to develop empathy for other field of personnels.'
  }
]

class Cycnav extends React.Component {
  render () {
    const style = PortfolioStore[2]
    return (
      <div>
        <ProjectTitle content={projectTitle} style={style} />
        <div className='project-content-layout'>
          <IntroRole content={introRole} />
          {/* early state UX research */}
          <Problem content={problem} style={style} />

          <TitleDivier content={titleText1} style={style} />
          <TableComponent content={interviews} style={style} />
          <LayoutHalf content={persona} />
          <FindingComponent content={findingPersona} style={style} />
          <LayoutImage content={userJourney} />

          {/* market research */}
          <TitleDivier content={titleText2} style={style} />
          <TableComponent content={comparativeAnalysis} style={style} />
          <FindingComponent content={findingCompare} style={style} />
          <LayoutHalf content={devices} />

          {/* UX solutions */}
          <TitleDivier content={titleText3} style={style} />
          <LayoutImage content={solutions} />
          <LayoutImage content={storyboard} />
          <LayoutImage content={wireframe1} />
          <LayoutImage content={wireframe2} />
          <h4>Test with the wireframes revealed some major areas to improve on:</h4>
          <FindingComponent content={usability} style={style} />
          <LayoutImage content={iterations} />
          <TableComponent content={testResult} style={style} />

          {/* UI design */}
          <TitleDivier content={titleText4} style={style} />
          <LayoutThree content={prototypeApp} />
          <LayoutTwoThird content={accessibility} />
          <LayoutThree content={moreprototypes} />
          <LayoutHalf content={decision} />
          <LayoutImage content={prototypeDevice} />
          <LayoutImage content={device3D} />
          <LayoutHalf content={variance3D} style={style} />

          {/* results and reflections */}
          <LayoutThree content={useCase} />
          <LayoutImage content={combine} />
          <TitleDivier content={titleText5} style={style} />
          <LayoutText content={dobetter} />
          <Reflection content={reflections} />

        </div>
      </div>
    )
  }
}

export default Cycnav
