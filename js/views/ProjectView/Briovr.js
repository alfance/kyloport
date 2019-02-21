import React from 'react'
import TitleDivier from './components/TitleDivider'
import ProjectTitle from './components/ProjectTitle'
import IntroRole from './components/IntroRole'
import Problem from './components/Problem'
import TableComponent from './components/TableComponent'
import FindingComponent from './components/FindingComponent'
import LayoutImage from './components/LayoutImage'
import LayoutText from './components/LayoutText'
import LayoutOneThird from './components/LayoutOneThird'
import LayoutTwoThird from './components/LayoutTwoThird'
import LayoutThree from './components/LayoutThree'
import Reflection from './components/Reflection'
import LayoutHalf from './components/LayoutHalf'
import PortfolioStore from '../../stores/PortfolioStore'

const titleText1 = {
  title: 'Research'
}

const titleText2 = {
  title: 'Ideate the Core Architecture'
}

const titleText3 = {
  title: 'Prototype & Validation'
}

const titleText4 = {
  title: 'UI Design'
}

const titleText5 = {
  title: 'Motion Design'
}

const titleText6 = {
  title: 'Production'
}

const titleText7 = {
  title: 'Reflections'
}

const introRole = {
  sectionClass: 'list-style-circle',
  content: 'BRIOVR is an online platform for 3D prototyping and VR/AR visualization. This tool allows users to upload their models to the cloud, create animations and interactions, and share instantly with others.',
  duties: ['I was the sole designer and currently one of the leading designers for BRIOVR. I have adopted a variety of UX methodologies:',
    'User interviews',
    'Comparative analysis',
    'Design workshops',
    'Wireframe development',
    'Usability testing',
    'Prototype development',
    'Motion design'
  ],
  img: '../../../assets/images/proj_briovr/behaviourstart.gif'
}

const background = {
  title: 'Background - an online model viewing and editing app',
  deviceFrame: 'laptop',
  img: '../../../assets/images/proj_briovr/brio_model_import.gif',
  content: 'BRIOVR empowers the user to create VR/AR experience at ease. To demo the app, the process to add assets (images, video, 3D model and audio) in BRIOVR is as easy as dragging it to the editor.'
}
const backgroundLayout = {
  deviceFrame: 'laptop',
  img: '../../../assets/images/proj_briovr/background.png',
  content: 'The fundamental interface of BRIOVR also honours the modern major design and modelling apps. Majority of the screen is dedicated to the 3D working space as supplementary features and tools are located on the side and bottom.'
}

const challenge = {
  title: 'Challenge - create an intuitive and easy to use interactive system',
  sectionClass: 'list-style-circle',
  content: [' Some of the shareholder requirements include:', 'No coding knowledge is required', 'Preferably as simple as click, drag and drop', 'Do not use Node graph', 'Need to have game mechanics (click, move, pickup etc)']
}

const challenge2 = {
    content: '### * "I want to click the launch button and the rocket fires off." * ###'
}

const interview = {
    title:'User interviews',
    content: '### * "I want to click the launch button and the rocket fires off." * ###'
}
const competitor = {
  title: 'Comparative analysis',
  content: 'At the discovery phase of my project, I have researched popular apps and software in the market to get a better understanding of the problem.',
  columns: [
    {
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Code type',
      accessor: 'code'
    }, {
      Header: 'Tutorial time',
      accessor: 'time'
    }, {
      Header: 'User type',
      accessor: 'user'
    }
  ],
  data: [
    {
      name: [<img src='../../../assets/images/proj_briovr/logo_competitor_unreal.png' />,' Unreal'],
      code: 'Blueprint , C++',
      time: '10 hours',
      user: 'Game developer'
    }, {
      name: [<img src='../../../assets/images/proj_briovr/logo_competitor_unity.png' />,' Unity'],
      code: 'C#, Javascript',
      time: '12 hours',
      user: 'Game developer'
    }, {
      name: [<img src='../../../assets/images/proj_briovr/logo_competitor_playcanvas.png' />,' Play Canvas'],
      code: 'Javascript',
      time: '2.5 hours',
      user: 'Front End Dev'
    }, {
      name: [<img src='../../../assets/images/proj_briovr/logo_competitor_instavr.png' />,' InstaVR'],
      code: '/',
      time: '5 min',
      user: '360 video maker'
    }
  ]
}

const findingCompetitor = {
  subtitle: 'finding',
  content: 'The capability of an app or software is often inversely correlated with the amount of time the user needs to spend learning. Unreal and Unity offer the users immense freedom and abilities - at a cost of 10 plus hours of learning time. On another hand, InstaVR only requires the uses to spend 5 minutes learning how to make a 360 video.'
}

const competitorInterface = {
    title:'',
    content:'We went to each of the competitors and tried to learn their system to create interactions. Some of the apps use one of **programming languages**, which exclude themselves from programmers. Some use a **visual scripting system** based on the concept of node-based interface for creating gameplay elements. The scripting system inherits the core logistics of programming languages. while it is comparatively visually pleasant and clear, it doesn&#39;t solve the problem of **high barrier to entry**. The last type is easy enough for a non-technical person to learn, but its **ability is limited** to a single or couple usages.',
    imgLeft:'../../../assets/images/proj_briovr/unity.jpg',
    contentLeft: '**Unity**: C# or Javascript for scripting interactions.',
    imgMiddle:'../../../assets/images/proj_briovr/unreal.jpg',
    contentMiddle: '**Unreal**: Unreal uses C++ or Blueprint (visual scripting system).',
    imgRight:'../../../assets/images/proj_briovr/instavr.jpg',
    contentRight: '**InstaVR**: Drag and drop, limited to 360 videos.',
}
const game = {
  title: 'Gamification study',
  content: 'We took inspirations from games and Internet of Things(IoT) that have creative builder mode. Differ from software, the Interaction system in **games and IoT has a much less cognitive overload** at the learning stage and is **more entertaining**.',
  contentLeft: '**Little big planet**: creates mode contains lots of trigger for user to create their own level.',
  contentRight: '**Little Bits**: Electronic building blocks empowering kids to build bots. ',
  imgLeft: '../../../assets/images/proj_briovr/planet.jpg',
  imgRight: '../../../assets/images/proj_briovr/littlebits.jpg'
}

const userJourney = {
  title: 'Adding interactions comes at the end',
  sectionClass: 'project-layout-wide',
  content: 'After studying other applications and interviews. I came up with a simplified user journey for the system. This helped me realize that creating **interactions comes at the late stage** of the user flow.',
  img: '../../../assets/images/proj_briovr/user_journey_map.png',
  label: 'Behaviour onboarding is separate from the general onboarding.  Combining onboardings have resulted in loss of interests prior to the completion. I then changed the behaviour onboarding to be initiated only when users express interest.'
}

const rules = {
  title: 'Setting rules & logics',
  content: 'After studying the preceders and conducting studies to gather insights, I have layout the essential components of a viable interaction system. The system is constructed by two types: motion and trigger.',
  imgLeft: '../../../assets/images/proj_briovr/action-icon.svg',
  imgRight: '../../../assets/images/proj_briovr/trigger-icon.svg',
  contentLeft: [
    '**Action**', 'Physical transformation and animation that altered the state of an object.', '**Example**: move, rotate, scale'
  ],
  contentRight: ['**Trigger**', 'The logic that sets off the mechanism.', '**Example**: click, look, time']
}

const behaviourflow1 = {
  title: 'Interactive behaviour flow',
  content: [
    'The first priority of behaviour flow is **simplicity and flexibility**. My reasoning behind is that if a user wants to make an item scale in size, they should not need to do excessive steps other than specifying a scale value on the item', 'Method 1 and method 2 yield the same outcome. This gives users maximum freedom to achieve their goals.'
  ],
  img: '../../../assets/images/proj_briovr/actionflow.png'
}

const behaviourflow2 = {
  content: [
    'Trigger in BRIOVR is equivalent to conditionals in coding. In order to compromise users with different technical backgrounds, I adapted the same logic as the basic mechanism.', 'In the following diagram, method 1 and method 2 have the same outcome. To trigger an action, the mandatory criteria are the item and the trigger method, the order is not critical.'
  ],
  img: '../../../assets/images/proj_briovr/actionflow1.png'
}

const behaviourflow3 = {
  content: 'To expand further along the road, more complex interactions can be generated. An example would be object A triggers an action of object B.',
  img: '../../../assets/images/proj_briovr/actionflow2.png'
}

const sketches = {
  title: 'Sketches',
  sectionClass: 'project-layout-wide',
  imgLeft: '../../../assets/images/proj_briovr/brio_sketch.jpg',
  contentRight: 'In the design process, I started with low fidelity sketches. This method allowed me to iterate many design options in a quick manner. At the same time, I asked my team to provid their sketches during the design sprint. This activity allows us to share our ideas and aligned them better in a technical aspect.'
}

const wireframes = {
  title: 'Wireframes',
  sectionClass: 'project-layout-wide',
  contentLeft: [
    'I have created both low and high fidelity wireframes for different user test purposes.', 'The  paper wireframes are used to quickly obtain user feedback at group design workshops - testers were mainly from within the team.', 'The digital wireframes are used for individual user test so all the user behaviours are closely observed and recorded. Afterwards, I expanded the testers to be outside the company. '
  ],
  imgRight: '../../../assets/images/proj_briovr/wireframe.jpg'
}

const usability = {
  title: 'Usability test',
  content: [
    'For each iteration, We have conducted usability tests with people from different background. The initial designs had limited number of successes.',
    '**"Tutorial was too fast"**',
    'Users had a hard time following the video tutorial. We switched the tutorial to a more immersive onboarding that guided the users step by step.',
    '**"I want instant feedback"**',
    'Whenever users added translation changes, they are unable to view the changes right away. A more direct and instant feed is needed',
    'The onboarding sometimes was neglected',
    '**"Can I modify the code?""**',
    'This is commonly asked by people with a programming background. After carefully analyzing and discussion, instead of opening up the ability for this user group, we decided to make the system more friendly to technical users.'
  ]
}

const findingTest = {
  subtitle: 'Roadblock',
  content: 'Due to the nature of 3D apps, we could only simulate a test environment that partially resembles the end product. This limit the outcomes we can receive.'
}
const prototypeMain = {
  title: 'Main interface',
  sectionClass: 'project-layout-wide',
  deviceFrame: 'laptop',
  content: 'The overall layout embraces the design of the app. The main feature panel at the bottom allows users to open up the sub-features list, and divided the triggers and actions.',
  img: '../../../assets/images/proj_briovr/ui-main.png'
}
const prototypeChain = {
  title: 'Behaviour chain panel',
  content: 'The behaviour chain contains all the logic happening on an object. We embraced the flow of a node based system; however, we decide to take a bold step by making the behaviour chain linear. This comes at a cost of reduced flexibility but reached our standards for simplicity and ease of use. ',
  img: '../../../assets/images/proj_briovr/behaviour_chain.png'
}
const prototypePop = {
  title: 'Property popup',
  img: '../../../assets/images/proj_briovr/property_panel.png',
  content: 'Property pop-up serves as an adjustable value controller for each individual trigger and action. We made the popup in the context of the menu location and semi-Automatic. '
}

const motion = {
  sectionClass: 'list-style-circle',
  content: [
    'Differ from 2D apps, Motion in 3D plays an important role especially true for behaviours. By applying motion design into our usability test, we have seen significant improvements in:', 'Maintaining user attention.', 'A more clear understanding of upcoming steps', 'Increase tolerance in wait time'
  ],
  imgLeft: '../../../assets/images/proj_briovr/animate1.gif',
  contentLeft: '**Up**: Add behaviour to object. **Right**: Modify and Deleting a behaviour',
  imgRight: '../../../assets/images/proj_briovr/animate23.gif'
}

const endResult = {
  content: 'Combining all the aspects, we were able to create a rather intuitive system that is been used by thousands of people. The following video is a 30 seconds demo showing how you can create a click button to trigger a movement of a rocket.',
  video: 'https://youtu.be/SKdtGiESaO4',
  label: 'to see more of our user creation, __[Click Here](https://briovr.com/discover)__'
}

const achieve = {
  title: 'Use case',
  content: 'Through collaboration, we had created an interactive Casino Royal experience for **Crowdlinkers** at Toronto Elevate Conference after-party.',
  imgLeft: '../../../assets/images/proj_briovr/playing1.jpg',
  imgRight: '../../../assets/images/proj_briovr/playing2.jpg'
}

const dobetter = {
  title: 'What can I do better?',
  sectionClass: 'list-style-circle',
  content: ['',
    'The behaviour chain can be further optimized. The current design is too ambiguous.',
    'An alternative way to let the user create multiple-item triggers',
    'More accessible design of the UI interface.']
}

const kidsimage = {
  img: '../../../assets/images/proj_briovr/kidsuser.jpg'
}
const reflections = [
  {
    subject: 'Don not just copy, adapt.',
    learn: 'It is equally imperative to take inspiration from existing solutions and to adapt it to your solution. Part of the reason that people are accepting Brio interaction system is that it has evolved from products that are been approved by users.'
  }, {
    subject: 'UX design is not just research and low fidelity prototypes',
    learn: 'I learned that UX design exists in every step of product development. Your job is not completed after the wireframe. It is crucial to stay all the way until and after product delivery.'
  }, {
    subject: 'Working in 3D is a different story than working in 2D',
    learn: 'Add a dimension can mean a completely separate design flow and system. I have encountered countless limitations prototyping and testing. On another hand, I learned and invented ways to validate the design method for a 3D app.'
  }
]

class Briovr extends React.Component {
  render () {
    const style = PortfolioStore[0]

    return (<div>
      <ProjectTitle content={style} style={style} />
      <div className='project-content-layout'>
        <IntroRole content={introRole} />
        <LayoutImage content={background} style={style} />
        <LayoutImage content={backgroundLayout} style={style} />
        <Problem content={challenge} style={style} /> {/* early state research */}
        <LayoutImage content={challenge2} style={style} />
        <TitleDivier content={titleText1} style={style} />
        <TableComponent content={competitor} style={style} />
        <FindingComponent content={findingCompetitor} style={style} />
        <LayoutThree content={competitorInterface} style={style} />
        <LayoutHalf content={game} /> {/* Solution */}
        <TitleDivier content={titleText2} style={style} />
        <LayoutImage content={userJourney} />
        <LayoutHalf content={rules} />
        <LayoutImage content={behaviourflow1} />
        <LayoutImage content={behaviourflow2} />
        <LayoutImage content={behaviourflow3} /> {/* UX */}
        <TitleDivier content={titleText3} style={style} />
        <LayoutTwoThird content={sketches} style={style} />
        <LayoutOneThird content={wireframes} style={style} />
        <LayoutText content={usability} />
        <FindingComponent content={findingTest} style={style} /> {/* UI design */}
        <TitleDivier content={titleText4} style={style} />
        <LayoutImage content={prototypeMain} />
        <LayoutImage content={prototypeChain} />
        <LayoutImage content={prototypePop} /> {/* Interaction design */}
        <TitleDivier content={titleText5} style={style} />
        <LayoutHalf content={motion} style={style} />
        <TitleDivier content={titleText6} style={style} />
        <LayoutImage content={endResult} style={style} /> {/* results and reflections */}
        <LayoutHalf content={achieve} />
        <iframe id='iframe-brio' src='https://view.briovr.com/1cb632f4-2a89-45d3-9e4e-bd71c93ecaa1' frameBorder='0' allowFullScreen />
        <TitleDivier content={titleText7} style={style} />
        <LayoutText content={dobetter} />
        <LayoutImage content={kidsimage} />
        <Reflection content={reflections} />

      </div>
    </div>)
  }
}

export default Briovr
