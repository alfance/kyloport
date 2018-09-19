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
import Reflection from './components/Reflection'
import LayoutHalf from './components/LayoutHalf'

const style = {
  color: '#5C41B4',
  TextonColor: 'text-light',
  titleBgP: 'right',
  bgSize: ''
}

const titleText1 = {title: 'Who are the users?'}

const titleText2 = {title: 'Market Research'}

const titleText3 = {title: 'Solution'}

const titleText4 = {title: 'UI Design'}

const titleText5 = {title: 'Learnings'}

const placeholder = require('../../../assets/images/proj_cycnav/journey_map.jpg')

const projectTitle = {
  logo: '../../../assets/images/proj_cycnav/cycnav_logo_w.svg',
  title: 'UI/UX, Interaction Design',
  bgImg: '../../../assets/images/proj_cycnav/journey_map.jpg'
}

const introRole = {
  content: 'CYCNAV is a combination of an navigational app and a physical bike light to guide the cyclists roaming around the city. It not only provide the fastest routes,but also guarantees the users safety by avoiding bad road conditions.',
  role: 'UX designer',
  duties: ['1. Conduct user and market research and analysis',
    '2. Defining strategies & Scope',
    '3. Facilitate ideation & design decisions',
    '4. Create Wireframes & Prototypes',
    '5. 3D modeling & printing of the physical Component',
    '6. Validation test and evaluations'],
  img: '../../../assets/images/proj_cycnav/journey_map.jpg'
}

const problem = {
  title: 'Problem',
  content: 'The biggest pain that every cyclist has experienced, especially the urban cyclist, is to navigate in various road conditions and incidents that lead to unexpected detours. Looking for an applicable route can be time consuming, while bypassing the original road can be dangerous.',
  list: ['Troubled by the Downtown road conditions',
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
  p1Img: '../../../assets/images/proj_cycnav/avatar-0.svg',
  p2Img: '../../../assets/images/proj_cycnav/avatar-2.svg',
  p1content: [
    'Ann Goldshire',
    'Student',
    'Age: 17 to 27',
    'Bikes 2 - 6 times a day',
    'Ann uses bikes for most of her daily commute. Thus Ann values most effortless routes.'
  ],
  p2content: [
    'Oliver Dimaran',
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
  title: 'User journey',
  content: 'Cycnav focuses on the two main purposes: 1) Get to the destination. 2) Fast and safe.',
  img: '../../../assets/images/proj_cycnav/journey_map.jpg',
  label: 'The highlighted bubble are the main functions users will be using, while supporting features(grey bubble) will be the key to the overall NUX'
}

const comparativeAnalysis = {
  title: 'Comparactive Analysis',
  columns: [{
    Header: 'App /Device',
    accessor: 'app' // String-based value accessors!
  }, {
    Header: 'What works',
    accessor: 'work'
  }, {
    Header: 'What doesnt work ',
    accessor: 'nowork'
  }],
  data: [{
    number: 1,
    img: '../../../assets/images/proj_cycnav/google_map.png',
    app: 'Google maps',
    work: ['Bike friendly trails and lanes',
      'Route suggestion based on cyclists preference',
      '3D elevation on geographic features'
    ],
    nowork: ['Driving centric navigation',
      'No Bike share map'
    ]
  }, {
    number: 2,
    img: '../../../assets/images/proj_cycnav/vanhawks_logo.png',
    app: 'Google maps',
    work: ['Bike friendly trails and lanes',
      'Route suggestion based on cyclists preference',
      '3D elevation on geographic features'
    ],
    nowork: ['Driving centric navigation',
      'No Bike share map'
    ]
  }, {
    number: 3,
    img: '../../../assets/images/proj_cycnav/waze.png',
    app: 'Google maps',
    work: ['Bike friendly trails and lanes',
      'Route suggestion based on cyclists preference',
      '3D elevation on geographic features'
    ],
    nowork: ['Driving centric navigation',
      'No Bike share map'
    ]
  }]
}

const findingCompare = {
  subtitle: 'Finding',
  content: 'A lot of the solutions out in the market is either app based, or hardware based. Many times, the problem can not be simply solved with just one method.As for CYCNAV, it is a combined solution that tackle the problem using both technologies.'
}

const devices = {
  title: 'App vs IOT',
  p1Img: '../../../assets/images/proj_cycnav/phone.png',
  p2Img: '../../../assets/images/proj_cycnav/bikelight.png',
  p1content: [
    'Digital App',
    'Pros: Accurante and fast route search',
    'Cons: Distractive, pro to light flare'
  ],
  p2content: [
    'Physical Device',
    'Pros: Safe & all-in-one navigation and user contribution',
    'Cons: Costly'
  ]
}

const solutions = {
  content: 'Based on the result of comparative analysis, we decide to approach the problem using both digital and physical solutions. that is building a physical navigational device that would be powered by a digital app.',
  img: '../../../assets/images/proj_cycnav/journey_map.jpg',
  label: ['Nav App: The app uses googles map api to calculate the best route for the users, use can also input their finding of road conditions using the app.',
    'Cycnav Bike Light: The bike light is connected to the app using bluetooth. While the app is calculating and adjusting the route,the bike light functions as the visual portal to help guide the cyclists while they are biking.']
}

const usability = {
  title: 'Usability Test',
  content: [
    'Test with the wireframes revealed some major areas to improve on:',
    '1. Users encountered trouble moving from the mobile app to the bike light. ',
    '2. They prefer staying on the app while biking.',
    '3. Not enough feedback on botht the app and the bike light, users sometimes get confused while traveling.'
  ]
}

const iterations = {
  title: 'Iterations',
  content: [
    'We focuse improvements on the following two major components:',
    '• Spend more time with the user on the onboarding, especially when they are connecting the bike light to the app.',
    '• Redefine the search process to make it more intuitive, less steps.',
    '• Reduce the number of button on the lights, and increase the size'
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
    result: '50% Smooth'
  }, {
    feature: 'Onboarding',
    problem: 'User neglected message to transit to ',
    iteration: 'Full screen instruction',
    result: '25% Smooth'
  }, {
    feature: 'Bike light navigation',
    problem: 'Missing or unclear indicators',
    iteration: 'Create vartions in indicator size',
    result: '75% Smooth'
  }]
}

const prototypeApp = {
  title: ' Prototype - APP',
  content: 'We had a few variations for the Prototype as shown below. One consideration that is more important than the asthetics of the app itself, is the readability of the screen under different light conditions.',
  imgLeft: {placeholder},
  imgMiddle: {placeholder},
  imgRight: {placeholder},
  contentLeft: 'Design 1: a green theme is used as we are hoping to achive a eco travel method.',
  contentMiddle: 'Design 2: a green theme is used as we are hoping to achive a eco travel method.',
  contentRight: 'Design 3: a green theme is used as we are hoping to achive a eco travel method. '
}

const decision = {
  title: 'Decision',
  content: 'In the end, we decide to go with design 3 due to its readability even under extreme sun light. For this design,the users can grasp the information in the shortest amoutn of time, which is fatal when they are on the road.',
  img: {placeholder}
}

const prototypeDevice = {
  title: 'Prototype - Bike Light',
  content: 'Same as the app, we tested multiple paper prototypes before making a decision. ',
  img: {placeholder},
  label: 'The Best result is a fluid capsule with a slanted angle for optimized viewing experience.'
}

const reflections = {
  reflections: {
    subject: [
      'Adaptive design is crucial for various format of medium.',
      'Sometimes the perfect solution is not one, but multiple approaches',
      'Being able to pick up new skills and learn quickly is part of the UX.'
    ],
    learn: [
      'The essense of UX design is to solve problems, not using templates ',
      'If we have not done the user test and market analysis, we were Automatically assumed to go with one of the twocompletely different method for the problem we are presented. By adapting the UX research process we were able to focus on our users, coming up with valid solutions for the problems insead of making assumptions for the sake of building a tool.',
      'his probject was done with limited time and resources. at times I had to learn new softwares, pick up technical skills along the way. This is not only helpful to me personaly, but it broadens my pespective as an UX design, where I was able to develop empathy for other field of personnels.'
    ]
  }
}

class Briovr extends React.Component {
  render () {
    return (
      <div>
        <ProjectTitle content={projectTitle} style={style} />
        <div className='project-content-layout'>
          <IntroRole content={introRole} />
          {/* early state UX research */}
          <Problem content={problem} style={style} />

          <TitleDivier content={titleText1} style={style} />
          <TableComponent content={interviews} />
          <LayoutHalf content={persona} />
          <FindingComponent content={findingPersona} style={style} />
          <LayoutImage content={userJourney} />

          {/* market research */}
          <TitleDivier content={titleText2} style={style} />
          <TableComponent content={comparativeAnalysis} />
          <FindingComponent content={findingCompare} style={style} />
          <LayoutHalf content={devices} />

          {/* UX solutions */}
          <TitleDivier content={titleText3} style={style} />
          <LayoutImage content={solutions} />
          <LayoutText content={usability} />
          <LayoutImage content={iterations} />
          <TableComponent content={testResult} />

          {/* UI design */}
          <TitleDivier content={titleText4} style={style} />
          <LayoutThree content={prototypeApp} />
          <LayoutImage content={decision} />
          <LayoutImage content={prototypeDevice} />

          {/* results and reflections */}
          <TitleDivier content={titleText5} style={style} />
          <Reflection content={reflections} />

        </div>
      </div>
    )
  }
}

export default Briovr
