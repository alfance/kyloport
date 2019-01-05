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

const titleText4 = {title: 'Design'}

const titleText5 = {title: 'Prototype'}

const titleText6 = {title: 'Recognition'}

const titleText7 = {title: 'Reflections'}

const projectTitle = {
  title: 'Fairtrade',
  logo: '../../../assets/images/proj_fairtrade/logo-long.svg',
  field: 'Product Design & Development',
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
  contentLeft: ['The first ideation we came up was focusing on a donating platform dedicate to underprivileged people. Since the pain points lies in intransparent donation process. What we are hoping to do is to let the users from both side &#39;communicate&#39; with each other regarding their needs and preferences.',
    '**Ideation: Online platform for donor to donate items directly to the shoppers.**'],
  imgRight: ''
}
const validity1 = {
  title: 'Validation : Polarized feedbacks',
  content: 'After we tested the ideation to potential users we received polarized reactions from the users. Donors are very receptive of the idea and are willing to donate their belongs; However, they perceive the concept as charitable rather than mutual beneficial. On the other hand, the concept of pure taking has put a **burden on their self-esteem**, especially if their profiles are exposed online.',
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
    user: <b><font color='55DCB0'>Shopper</font></b>,
    accept: <b>3/5</b>,
    need: '4/5'
  }, {
    user: <b><font color='f3446e'>Donor</font></b>,
    accept: '5/5',
    need: <b>2/5</b>
  }]
}

const feedback1 = {
  content: '#### *"I don&#39;t want people to perceive me as a taker."* - Shopper'
}

const idea2 = {
  title: 'Ideation 2 - Culturally diversified Homecook',
  contentLeft: ['We realized the importance of acknowledge people pride. While we were conducting interviews, we came across a user type that is present almost in many shopper groups: **housewives** or **househusbands**. We found out that in most refugee or immigrant families, one of the two housholds would stay with the yongsters rather than making earning due to limitless resources. We wanted to provided a way for the stay-at-home people a way to make a profit while the donors get to experience authentic cuisines from another culture. ',
    '**Ideation: an app that let the shopper sell their home cooked meal to the donor.**'
  ],
  imgRight: ''
}
const validity2 = {
  title: 'Validation : Kitchen Hygiene',
  content: 'Both the donors and shoppers are happy about this idea. The shoppers are notably more open and positive compare to ideation 1. However, after conducting validation research and interviews from authorities, the **concerns on cooking environment** emerged. In order for a home cook to legally sell their dishes, they first need to obtain operating license after their kitchen got examined by authorized officials. This steeps the difficulty of execution.',
  columns: [{
    Header: 'User',
    accessor: 'user' // String-based value accessors!
  }, {
    Header: 'Acceptance',
    accessor: 'accept'
  }, {
    Header: 'Needs',
    accessor: 'need'
  },
    {
      Header: 'Feasibility',
      accessor: 'feasible'
    }],
  data: [{
    user: <b><font color='55DCB0'>Shopper</font></b>,
    accept: '5/5',
    need: '5/5',
    feasible: <b>2/5</b>
  }, {
    user: <b><font color='f3446e'>Donor</font></b>,
    accept: '5/5',
    need: '3/5',
    feasible: '5/5'
  }]
}

const idea3 = {
  title: 'Ideation 3 - Exchange platform',
  contentLeft: ['Combining preivous ideations, we finally came to a unanimous decision: a exchange platform that let users &#39;fairtrade&#39; anything. For donors, they can trade the abundant items. For shoppers, they can trade food, item or **karma points**: rewards points that the shoppers give to the donor as a form of appreciation. The karma points canbe used used as a redeemable currency at shops and stores.',
    '**Ideation: Platform that allow the donor and shopper to exchange tangible items or &#39;karma&#39;. **'],
  imgRight: ''
}

const angelHack = {
  title: 'Social Approval',
  content: 'We brought the concept to the 2018 Toronto angelHack. At the hackthon, we had 2 days to build a workable prototype and present it to entrepreneurs, influencers, company executives and CEOs. We communicated with various organizations and groups and received numerous suggestions and feedbacks. The event had shaped the path and guided the direction of the FairTrade. Gratfully, our concept had been approved and liked by the public. In the end, we were chosen to be the winner for "Code for a cause" Toronto, and had moved on to compete intertionally.',
  img: '../../../assets/images/proj_fairtrade/angelhack.png'
}

const validity3 = {
  title: 'Validation : Executatble & accepted',
  content: 'The concept is widly accepted by the donors and shoppers, and is determined to be feasible from both business and technical perspective. ',
  columns: [{
    Header: 'User',
    accessor: 'user' // String-based value accessors!
  }, {
    Header: 'Acceptance',
    accessor: 'accept'
  }, {
    Header: 'Needs',
    accessor: 'need'
  },
    {
      Header: 'Feasibility',
      accessor: 'feasible'
    }],
  data: [{
    user: <b><font color='55DCB0'>Shopper</font></b>,
    accept: '5/5',
    need: '5/5',
    feasible: '5/5'
  }, {
    user: <b><font color='f3446e'>Donor</font></b>,
    accept: '5/5',
    need: '3/5',
    feasible: '5/5'
  }]
}

const pitch = {
    content:['## * There is value to good will. * ##',
    '- Fairtrade: Exchaning platform between new comers and locals.']
}

const flowChart = {
  title: 'User Flow Chart',
  content: 'Now we have a solid product strategy we proceeded to mapping out the user flow. Fairtrade would have two separate portals for the shoppers and donnors. While their user experience flow are analogous the perception of interaction with the app is dissimilar. For the flow, we kept the two group&#39s local interaction with the app intact from each other until they started &#39trading&#39.',
  img: '../../../assets/images/proj_fairtrade/flowchart.jpg'
}

const wireframe1 = {
  title: 'Wireframe',
  sectionClass: 'project-layout-wide',
  content: 'We have gone through 3 versions of the wireframe each with a engagement upgrade. ',
  img: '../../../assets/images/proj_fairtrade/wireframe1.png',
  label:'**Wireframe 1**: The major problem with wireframe1 was laborious registration and onboarding. The user needed to fill their personal information as well as the trade item upfront before they get to explore the trading ground. This takes up approximately 5 pages and 6 steps.'
}

const userTest1 = {
  content: ['*Registration process is too long.*',
        '*How could I tell if a trade is success?*',
        '*There is no skip button*']
}

const wireframe2 = {
  sectionClass: 'project-layout-wide',
  content: 'We reduced the registration process to minimum 2 pages and 3 steps, added flexible options for many of the pages. Now users don&#39t need to add items till they wanted to trade.',
  img: '../../../assets/images/proj_fairtrade/flowchart.jpg',
  label:'**wireframe2**: Users have an improved experience with the app, however we discovered that there is still a lot of rentention problem in the beginning of the flow. People feel intimidated by the personal questions upfront.'
}

const wireframe3 = {
  sectionClass: 'project-layout-wide',
  content: 'To take it a step further, we removed the registration and let people discover freely. The register process doesn&#39t kick in till the users had made any process or showed any interests.',
  img: '../../../assets/images/proj_fairtrade/flowchart.jpg',
  label:'**wireframe3**: We have seen promising improvements with the overall app interaction..'
}

const color = {
    title:'Color Scheme',
    sectionClass:'list-style-circle',
    content:['We separated the two groups with two colors and used a third color to indicate neutral ground. The colors are used throughout the app as a guide to indicate various situations and cenarios.',
    '**Private space**: own color',
    '**Trading ground**: infused with the other group&#39ts color']
}

const uidesign = {
    title:'UI Design',
    content:'Instead of the warm and homie feeling that most social responsible app have, we used modern and trailblazing approach to  '
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
          <hr />
          <LayoutHalf content={idea3} style={style} />
          <LayoutImage content={angelHack} style={style} />
          <TableComponent content={validity3} style={style} />
          <LayoutText content ={pitch} style={style} />

          {/* Design */}
          <TitleDivier content={titleText4} style={style} />
          <LayoutImage content={flowChart} style={style} />
          <LayoutImage content={wireframe1} style={style} />
          <layoutText content={userTest1} style={style} />
          <LayoutImage content={wireframe2} style={style} />
          <LayoutImage content={wireframe3} style={style} />

          {/* final prototype */}
          <TitleDivier content={titleText5} style={style} />
          <LayoutImage content={color} style={style} />
          <LayoutImage content={uidesign} style={style} />
          {/* recognition */}
          <TitleDivier content={titleText6} style={style} />
          <LayoutImage content={achieve} />

          {/* results and reflections */}
          <TitleDivier content={titleText7} style={style} />
          <LayoutText content={dobetter} style={style} />
          <Reflection content={reflections} />

        </div>
      </div>
    )
  }
}

export default Fairtrade
