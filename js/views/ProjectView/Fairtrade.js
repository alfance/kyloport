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

const titleText1 = {title: 'Goal'}

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

const goal = {
  sectionClass: 'list-style-number',
  title: 'Our goal',
  content: ['', '1. To help the new comers and refugees get the necessities when coming to a new country',
    '2. Bridge the gap between new comers, refugees and locals',
    '3. Build communications amoung people with various backgrounds']
}

const persona0 = {
  title: 'Personas',
  content: 'Our users are people who are new to the country, and whom were born or had spent years in the same country. We researched the habit of each group. Hence we can fit into their life instead of sole purse of using the app.'
}
const persona1 = {
  title: 'New comers',
  content: '',
  imgLeft: '../../../assets/images/proj_fairtrade/avatar-10.svg',
  imgRight: '../../../assets/images/proj_fairtrade/avatar-13.svg',
  sectionClass: 'section-persona',
  contentLeft: [
    '**Ralphy**',
    'Refugee',
    'Less than a week in Canada',
    'Has nothing other than clothing',
    'Ralphy needs anything to get him started, from small housewares, accessories to large appliances'
  ],
  contentRight: [
    '**Sol**',
    'International Students',
    'Less than 2 months in Canada',
    'Came with personal belongings',
    'Sol needs more for stuffs she could not bring overseas, which means furnitures for her to start a new life that is not too far from her oirignal country'
  ]
}
const persona2 = {
  title: 'Locals',
  content: '',
  imgLeft: '../../../assets/images/proj_fairtrade/avatar-3.svg',
  imgRight: '../../../assets/images/proj_fairtrade/avatar-6.svg',
  sectionClass: 'section-persona',
  contentLeft: [
    '**Rachel**',
    'Immigrants',
    'Being in Canada for over 10 years',
    'Rachel was once a new comer. After spent over a decade adapting in the new country, she had made a life and would like to help out people whom once were in the same situation.'
  ],
  contentRight: [
    '**Brad**',
    'Local',
    'Born in Canada',
    'brad is a local who never spent time outside of this country. He has abundant of housewares/electronics that he would like to donate to whom is in need.'
  ]
}

const idea1 = {
  title: 'Ideation 1 - Onling donation',
  contentLeft: 'The first ideation we came up was focusing on a donating platform dedicate to refugees and new comers.',
  imgRight: ''
}
const validity1 = {
  title: 'Validation : Polarized feedbacks',
  content: 'After we tested the ideation to potential users we received polarized reactions from the users. Donors are very receptive of the idea and are willing to donate their belongs. On the other hand, the concept of pure taking has put a burden on their self-esteem, especially if their profiles are exposed online.',
  columns: [{
    Header: 'User',
    accessor: 'user' // String-based value accessors!
  }, {
    Header: 'Acceptance',
    accessor: 'accept'
  }, {
    Header: 'Needs',
    accessor: 'need'
  }],
  data: [{
    user: 'Shopper',
    accept: '3/5',
    need: '4/5'
  }, {
    user: 'Donor',
    accept: '5/5',
    need: '2/5'
  }]
}

const feedback1 = {
  content: '#### *"I don&#39;t want people to perceive me as a taker."* - Shopper'
}

const idea2 = {
  title: 'Ideation 2 - Culturally diversified Homecook',
  contentLeft: 'We realized the importance of acknowledge people pride. While we were conducting interviews, we came across a major ',
  imgRight: ''
}
const validity2 = {
  title: 'Validation : Kitchen Hygiene',
  content: 'After we tested the ideation to potential users we received polarized reactions from the users. Donors are very receptive of the idea and are willing to donate their belongs. On the other hand, the concept of pure taking has put a burden on their self-esteem, especially if their profiles are exposed online.',
  columns: [{
    Header: 'User',
    accessor: 'user' // String-based value accessors!
  }, {
    Header: 'Acceptance',
    accessor: 'accept'
  }, {
    Header: 'Needs',
    accessor: 'need'
  }],
  data: [{
    user: 'Shopper',
    accept: '3/5',
    need: '4/5'
  }, {
    user: 'Donor',
    accept: '5/5',
    need: '2/5'
  }]
}

const idea3 = {
  title: 'Ideation 3 - Exchange platform',
  contentLeft: 'Combining preivous ideations, we finally came to a unanimous decision.',
  imgRight: ''
}
const validity3 = {
  title: 'Validation : Polarized feedbacks',
  content: 'After we tested the ideation to potential users we received polarized reactions from the users. Donors are very receptive of the idea and are willing to donate their belongs. On the other hand, the concept of pure taking has put a burden on their self-esteem, especially if their profiles are exposed online.',
  columns: [{
    Header: 'User',
    accessor: 'user' // String-based value accessors!
  }, {
    Header: 'Acceptance',
    accessor: 'accept'
  }, {
    Header: 'Needs',
    accessor: 'need'
  }],
  data: [{
    user: 'Shopper',
    accept: '3/5',
    need: '4/5'
  }, {
    user: 'Donor',
    accept: '5/5',
    need: '2/5'
  }]
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

          {/* goal */}
          <LayoutText content={goal} style={style} />
          {/* user */}
          <TitleDivier content={titleText2} style={style} />
          <LayoutText content={persona0} style={style} />
          <LayoutHalf content={persona1} style={style} />
          <LayoutHalf content={persona2} style={style} />

          {/* ideations */}
          <TitleDivier content={titleText3} style={style} />
          <LayoutHalf content={idea1} style={style} />
          <TableComponent content={validity1} style={style} />
          <LayoutText content={feedback1} style={style} />

          <LayoutHalf content={idea2} style={style} />
          <TableComponent content={validity2} style={style} />
          <LayoutHalf content={idea3} style={style} />
          <TableComponent content={validity3} style={style} />

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
