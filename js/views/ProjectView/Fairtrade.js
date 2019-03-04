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
import ProjectFooter from './components/ProjectFooter'
import PortfolioStore from '../../stores/PortfolioStore'

const titleText1 = {
  title: 'Goal'
}

const titleText2 = {
  title: 'Getting to know the users'
}

const titleText3 = {
  title: 'Ideation + Validation'
}

const titleText4 = {
  title: 'Design'
}

const titleText5 = {
  title: 'Introducing - FairTrade'
}

const titleText7 = {
  title: 'Reflections'
}

const introRole = {
  sectionClass: 'list-style-circle',
  content: 'Fairtrade is a website/app that enables newly arrived underprivileged migrants, refugees, and people in need to "fair trade" items with locals in order to improve the quality of their lives.',
  role: 'I was part of the funding member of Fairtrade, My responsibilities are the development of the app where I conducted',
  duties: [
    'I was part of the founding member of Fairtrade, I oversaw the development of the app. Some of the methodologies I used to design the app:',
    'Problem and concepts',
    'Audiences & needs',
    'Empathy sketches & affinity mapping',
    'Wireframe development & design workshops',
    'Usability testing',
    'Prototype development'
  ],
  img: '../../../assets/images/proj_fairtrade/thumb.gif'
}

const problem = {
  title: 'Problem',
  sectionClass: 'list-style-circle',
  content: 'Most refugees and newcomers arrive in a new country with only the clothes on their backs. Upon arrival, they are immediately reliant on donations. Many local families are willing to help. However, there is almost no way to tell whether the items that are donated in good faith are actually needed by the families that receive them. As a result, the recipients often receive an abundance of products that they do not need. '
}

const goal = {
  sectionClass: 'list-style-number',
  title: 'Our goal',
  content: ['', '1. To help the newcomers and refugees get the necessities when coming to a new country', '2. Bridge the gap between newcomers, refugees and locals', '3. Build communications among people with various backgrounds']
}

const interview = {
  title: 'Who are our users',
  contentLeft: ['All 3 founding members of the app can relate to the pains of newcomers and locals. We kicked off the user interview process by asking ourselves and our family around us: __ What kind of help do you need to live and settle in a new country? __', 'We recruited refugees, immigrants, international students on the one hand, and locals on the other side, to ask their opinions about the other side and their current situation. This helped us form a solid understanding of the user groups.'],
  imgMiddle: '../../../assets/images/proj_fairtrade/question2.png',
  imgRight: '../../../assets/images/proj_fairtrade/question1.png'
}

const persona0 = {
  title: 'Personas',
  content: ['Our users are people who are new to the country, and who were born or had spent years in the same country. We researched the habit of each group and conducted informal interviews. Hence we can fit better into the user&#39s life rather than a single problem they are having.', 'Reports have been given us insights on the unique risks people are facing coming to Canada. Other than the most important needs of employment security, People often find the transition to the new country difficult due to language, cultural difference and lack of resources.']
}
const persona1 = {
  title: 'Newcomers',
  content: '"Canada accepted more than **296,000** permanent residents in 2016, and more than **62,000** of those were re-settled refugees, the Government Canada said in a 2017 report to parliament on immigration. Approximately **78,000** permanent residents were admitted in the "family class"." - _Huffpost_',
  imgLeft: '../../../assets/images/proj_fairtrade/personafair-04.png',
  imgRight: '../../../assets/images/proj_fairtrade/personafair-03.png',
  sectionClass: 'section-persona',
  contentLeft: [
    '**Ralphy**', 'Refugee', 'Less than a week in Canada', 'Has nothing other than clothing', 'Ralphy needs anything to get him started, from small housewares, accessories to large appliances.'
  ],
  contentRight: ['**Sol**', 'International Students', 'Less than 2 months in Canada', 'Came with personal belongings', 'Sol needs more for stuff she could not bring overseas, which means furniture for her to start a new life that is not too far from her home country.']
}
const persona2 = {
  title: 'Locals',
  content: 'The government of Canada provides settlement and resettlement services through several hundred destination communities and service provider organizations across Canada. This is inadequate in comparison to the number of newcomers coming to Canada each year. Many of the locals have express interests to help the newcomers but were limited to be within administrative services and infrastructures. Following are two examples of the local community personas.',
  imgLeft: '../../../assets/images/proj_fairtrade/personafair-02.png',
  imgRight: '../../../assets/images/proj_fairtrade/personafair-01.png',
  sectionClass: 'section-persona',
  contentLeft: [
    '**Rachel**', 'Immigrants', 'Being in Canada for over 10 years', 'Rachel was once a newcomer. After spent over a decade adapting in the new country, she had made a life and would like to help out people whom once were in the same situation.'
  ],
  contentRight: ['**Brad**', 'Local', 'Born in Canada', 'brad is a local who never spent time outside of this country. He has abundant of housewares/electronics that he would like to donate to who is in need.']
}

const idea1 = {
  title: 'Ideation 1 - Onling donation',
  contentLeft: [
    'The first ideation we came up was focusing on a donating platform dedicated to underprivileged people. Since the pain points lie in the intransparent donation process. What we are hoping to do is to let the users from both sides &#39;communicate&#39; with each other regarding their needs and preferences.', '**Ideation: Online platform for the donors to donate items directly to the shoppers.**'
  ],
  imgRight: '../../../assets/images/proj_fairtrade/idea1.svg'
}
const validity1 = {
  title: 'Validation : Polarized feedbacks',
  content: 'After we tested the ideation to potential users we received polarized reactions from the users. Local is very receptive of the idea and are willing to donate their belongs; However, Newcomers perceive the concept as charitable sympathy. On the other hand, the concept of pure taking has put a **burden on the newcomers&#39 self-esteem**, especially if their profiles are exposed online.',
  columns: [
    {
      Header: 'User',
      accessor: 'user' // String-based value accessors!
    }, {
      Header: 'Acceptance',
      accessor: 'accept'
    }, {
      Header: 'Needs',
      accessor: 'need'
    }
  ],
  data: [
    {
      user: <b>
        <font color='55DCB0'>Shopper (new comer)</font>
      </b>,
      accept: <b>48%</b>,
      need: '4/5'
    }, {
      user: <b>
        <font color='f3446e'>Donor (local)</font>
      </b>,
      accept: '68%',
      need: <b>44%</b>
    }
  ]
}

const feedback1 = {
  content: '#### *"I don&#39;t want people to perceive me as a taker."* - Shopper'
}

const idea2 = {
  title: 'Ideation 2 - Culturally diversified homecook',
  contentLeft: [
    'We realized the importance of acknowledging people&#39; pride. While we were conducting interviews, we came across a user type that is present almost in many shopper groups: **housewives** or **househusbands**. We found out that in most refugee or immigrant families, one of the two households would stay with the youngsters rather than making earning due to limitless resources. We wanted to provide a way for the stay-at-home people a way to make a profit while the donors get to experience authentic cuisines from another culture. ', '**Ideation: an app that let the shopper sell their home-cooked meal to the donor.**'
  ],
  imgRight: '../../../assets/images/proj_fairtrade/idea2.svg'
}
const validity2 = {
  title: 'Validation: Kitchen hygiene',
  content: 'Both the donors and shoppers are happy about this idea. The shoppers are notably more open and positive compared to ideation 1. However, after conducting validation research and interviews from authorities, the **concerns on the cooking environment** emerged. In order for a home cook to legally sell their dishes, they first need to obtain an operating license after their kitchen got examined by authorized officials. This steeps the difficulty of execution.',
  columns: [
    {
      Header: 'User',
      accessor: 'user' // String-based value accessors!
    }, {
      Header: 'Acceptance',
      accessor: 'accept'
    }, {
      Header: 'Needs',
      accessor: 'need'
    }, {
      Header: 'Feasibility',
      accessor: 'feasible'
    }
  ],
  data: [
    {
      user: <b>
        <font color='55DCB0'>Shopper</font>
      </b>,
      accept: '92%',
      need: '80%',
      feasible: <b>2/5 (cooking environment)</b>
    }, {
      user: <b>
        <font color='f3446e'>Donor</font>
      </b>,
      accept: '80%',
      need: '74%',
      feasible: '5/5'
    }
  ]
}

const idea3 = {
  title: 'Ideation 3 - Exchange platform',
  contentLeft: [
    'Combining previous ideations and validations, we went back to the drawing board and came to a unanimous decision: an exchange platform that let users &#39;fairtrade&#39; anything. For donors, they can trade the abundant items. For shoppers, they can trade food, item or **karma points**: rewards points that the shoppers give to the donor as a form of appreciation. The karma points can be used as a redeemable currency at shops and stores.', '**Ideation: Platform that allows the donor and shopper to exchange tangible items or &#39;karma&#39;. **'
  ],
  imgRight: '../../../assets/images/proj_fairtrade/idea3.svg'
}

const validity3 = {
  title: 'Validation : Executable & accepted',
  content: 'The concept is widely accepted by the donors and shoppers and is determined to be feasible from both the business and technical perspective. The shoppers are amenable to the concept of giving back, and the karma point system gives them an available option even if they are scarce on the resource.',
  columns: [
    {
      Header: 'User',
      accessor: 'user' // String-based value accessors!
    }, {
      Header: 'Acceptance',
      accessor: 'accept'
    }, {
      Header: 'Needs',
      accessor: 'need'
    }, {
      Header: 'Feasibility',
      accessor: 'feasible'
    }
  ],
  data: [
    {
      user: <b>
        <font color='55DCB0'>Shopper</font>
      </b>,
      accept: '84%',
      need: '92%',
      feasible: '5/5'
    }, {
      user: <b>
        <font color='f3446e'>Donor</font>
      </b>,
      accept: '80%',
      need: '68%',
      feasible: '5/5'
    }
  ]
}

const pitch = {
  content: '### * "There is value to good will." * ###'
}

const flowChart = {
  title: 'User flow chart',
  content: 'Now we have a solid product strategy we proceeded to map out the user flow. Fairtrade would have two separate portals for the shoppers and donors. While their user experience flows are analogous the perception of interaction with the app is dissimilar. To the users, TairTrade is a trading ground that facilitates exchanges on tangible and digital items. We want to make sure the needs and trading items can be expressed clearly and effectively, and the trading process can be as intuitive as possible',
  img: '../../../assets/images/proj_fairtrade/flowchart.jpg'
}

const flowchart2 = {
  sectionClass: 'list-style-number',
  contentLeft: ['The user flow chart helped us visualize every step the user will take to complete a task. It also layouts the importance of each task and thus we can prioritize the core functions based on the developmental cycle.',
    '**Add item page**: Add the item people need or want to trade.',
    '**Discover page**: Explore what&#39;s available',
    '**Trade Monitor**: Pages that facilitate the trade to make sure everyone gets what they want',
    '**Message**: Additional communicational method.',
    '**Search**: Efficient way to let people filter out their needs.'],
  imgRight: '../../../assets/images/proj_fairtrade/frame.png'
}

const wireframe1 = {
  title: 'Wireframe',
  sectionClass: 'project-layout-wide',
  content: 'We have gone through numerous versions of the wireframes. With constructive critics from other people, we were able to quickly upgrade the designs without worrying too much about the appearance.',
  img: '../../../assets/images/proj_fairtrade/wireframe_eg1.png',
  label: '**Wireframe 1**: One of the problems with wireframe1 was laborious registration and onboarding. The user needed to fill their personal and trade item information upfront before moving on to explore page. This takes up approximately **5 pages and 6 steps**. We have discovered a high bounce rate along the registration process, which resulted in poor conversions.'
}

const userTest1 = {
  content: ['*Registration process is too long.*', '*How could I tell if a trade is success?*', '*There is no skip button*']
}

const wireframe2 = {
  sectionClass: 'project-layout-wide',
  content: 'We reduced the registration requirements and process to **2 pages and 3 steps**; separated the funnel between donors and shoppers starting on screen 1; and added flexible options for users to skip certain pages. For instance, users can choose to discover what is out in the market before making a decision or adding an item to trade.',
  img: '../../../assets/images/proj_fairtrade/wireframe_eg2.png',
  label: '**wireframe2**: Users have an improved experience with the app, however, we discovered that a few people still feel intimidated and a little uncomfortable by the personal questions FairTrade had required at the registration process.'
}

const wireframe3 = {
  sectionClass: 'project-layout-wide',
  content: 'To take it a step further, we neglected the registration as the mandatory first step to enter Fairtrade. Instead, we let people discover the trading ground freely upfront. There is no need for registration until people had shown interests in using the app to make a trade. This would help users build trust in us.',
  img: '../../../assets/images/proj_fairtrade/wireframe_eg3.png',
  label: '**wireframe3**: We have seen promising improvements with the overall app interaction.The trade offer task has noticeably higher click rate and completion rate after we removed the registration barrier.'
}

const color = {
  title: 'Colour scheme',
  sectionClass: 'list-style-circle',
  content: [
    'Out of all the profit or nonprofit apps and software we have seen, all of them use colours and design styles that are formal and official. We were given the impression that the other apps are government associated. While the placid style could bring calm and tranquil to the users, it also feels distant and solemn. For FairTrade, what we want the user to experience is welcome and cheerfulness. It is hard coming to a new country, but it also means a new starting point with full of opportunities and potentials. In the end, we all agreed upon a **colour scheme that is bright, upbeat and sparks joy**.', 'We separated the two groups with two colours  and used a third colour to indicate neutral ground. The colours are used throughout the app as a guide to indicate various situations and scenarios.'
  ],
  img: '../../../assets/images/proj_fairtrade/color-palette.png'
}

const uidesign = {
  title: 'UI design',
  content: 'Instead of the warm and homie feeling that most social responsible app have, we used modern and trailblazing approach to  '
}

const explore = {
  title: 'Explore before register',
  deviceFrame: 'phone',
  content: 'The main screen has been designed to allow users quick access to the inventory. We strived to design for confidence - no commitment is required to access the major pages. Users are able to discover freely within the app. Depending on the type, the **interface is different for shoppers and donors**.',
  imgLeft: '../../../assets/images/proj_fairtrade/donor_explore.png',
  contentLeft: '**Donor discovers page**: For donors, the focus is on the shopper&#39;s needs. By showing the shopper, there is a stronger emotional attachment to the donor.',
  imgRight: '../../../assets/images/proj_fairtrade/shopper_explore.png',
  contentRight: '**Shopper discovers page**: Differ from the donor, shoppers care more about the items. For the donor&#39;s discover page we maximize the number of items per page.'
}

const trade = {
  title: 'Offering trade',
  deviceFrame: 'phone',
  content: '',
  imgLeft: '../../../assets/images/proj_fairtrade/add_item_donor.png',
  contentLeft: '**Donor offering trade**: Other than the item specification, the donor also has the ability to decide the preferred delivery method.',
  imgRight: '../../../assets/images/proj_fairtrade/add_item_shop.gif',
  contentRight: '**Shopper offering trade**: The biggest difference between donor and shopper is that other than offering items, they can offer karma points. '
}

const tradeVideo = {
  title: 'Trade process',
  sectionClass: 'trade-video',
  content: [
    'We have gone through 4 iterations to came up with the simplistic flow which requires minimal steps, clicks and text to complete a trade. The example video below shows a trade instance offered by the donor and accepted by the shopper.'
  ],
  video: 'https://youtu.be/oKzoKQXBJ5Y'
}

const angelHack = {
  title: 'Social approval',
  content: 'We brought the concept to the 2018 Toronto angelHack. At the hackathon, we had 2 days to build a workable prototype and present it to entrepreneurs, influencers, company executives and CEOs. We communicated with various organizations and groups and received valuable suggestions and feedbacks. The event had shaped the path and guided the direction of the FairTrade. Gratefully, our concept had been approved and liked by the public. In the end, we were chosen to be the winner for "Code for a cause" Toronto division and had moved on to compete internationally.',
  img: '../../../assets/images/proj_fairtrade/angelhack.jpg'
}

const dobetter = {
  title: 'What can I do better?',
  sectionClass: 'list-style-circle',
  content: ['', 'Adding social media sharability', 'Cross-platform compatibility.', 'We still need to have a valid revenue plan.']
}

const reflections = [
  {
    subject: 'UX design is all user-driven, talk to your users to understand what they really need',
    learn: 'What you think and assume is not always what your users&#39;t need, and there is nothing worse than working on a wrong direction since the beginning. This is why it is so important to spend time researching, talking and understanding your users and their problems.'
  }, {
    subject: 'If a solution fails to work, do not give up.',
    learn: 'If a solution fails to work, try to understand the reason. Is it not solving the problem? or is it not executable? Keep trying the solution can be inches away. The job of a UX designer is to define the problem, narrow down all the possibilities and seek for the practical answer.'
  }
]

class Fairtrade extends React.Component {
  render () {
    const style = PortfolioStore[1]
    return (<div>
      <ProjectTitle content={style} style={style} />
      <div className='project-content-layout'>
        <IntroRole content={introRole} />
        <Problem content={problem} style={style} /> {/* goal */}
        <LayoutText content={goal} style={style} /> {/* user */}
        <TitleDivier content={titleText2} style={style} />
        <LayoutThree content={interview} style={style} />
        <LayoutText content={persona0} style={style} />
        <LayoutHalf content={persona1} style={style} />
        <LayoutHalf content={persona2} style={style} /> {/* ideations */}
        <TitleDivier content={titleText3} style={style} />
        <LayoutHalf content={idea1} style={style} />
        <TableComponent content={validity1} style={style} />
        <LayoutText content={feedback1} style={style} />

        <LayoutHalf content={idea2} style={style} />
        <TableComponent content={validity2} style={style} />
        <hr />
        <LayoutHalf content={idea3} style={style} />
        <TableComponent content={validity3} style={style} />
        <LayoutText content={pitch} style={style} /> {/* Design */}
        <TitleDivier content={titleText4} style={style} />
        <LayoutImage content={flowChart} style={style} />
        <LayoutOneThird content={flowchart2} style={style} />
        <LayoutImage content={wireframe1} style={style} />
        <layoutText content={userTest1} style={style} />
        <LayoutImage content={wireframe2} style={style} />
        <LayoutImage content={wireframe3} style={style} /> {/* final prototype */}
        <TitleDivier content={titleText5} style={style} />
        <LayoutImage content={color} style={style} />
        <LayoutHalf content={explore} style={style} />
        <LayoutHalf content={trade} style={style} />
        <LayoutImage content={tradeVideo} style={style} /> {/* results and reflections */}
        <LayoutImage content={angelHack} style={style} />
        <TitleDivier content={titleText7} style={style} />
        <LayoutText content={dobetter} style={style} />
        <Reflection content={reflections} />
        <ProjectFooter content={style} style={style} />
      </div>
    </div>)
  }
}

export default Fairtrade
