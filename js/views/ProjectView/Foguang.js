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

const projectTitle = {
  title: 'Fairtrade',
  logo: '../../../assets/images/proj_foguang/logo2.svg',
  field: 'Product Design & Development',
  intro: 'Mobile platform connecting locals and newcomers',
  link: 'fairtrade',
  bgImg: ''
}

const introRole = {
  sectionClass: 'list-style-circle',
  content: '"Meet the Master at Foguang Temple" was an educational project commissioned by the Cultural Heritage Conservation Center, Beijing China. Through the app, users get to learn the hidden story of Foguang Temple - the third earliest preserved timber structure built during the Tang Dynasty.',
  duties: [
    'I worked as one of the product designers for this project. I also coded the front-end interface of the app. My works can be summarized below:',
    'Defining problems',
    'Research on the users & content',
    'Wireframing, storyboard & validation',
    'UI & Prototype',
    'Implementation'
  ],
  img: '../../../assets/images/proj_foguang/foguang_thumb.png'
}

const problem = {
  title: 'Current state',
  sectionClass: 'list-style-circle',
  content: 'We had finished developing this project in 2016 as a Chrome extension app, and the phrase 2 had been initiated to expand into other platforms early 2019. If you are curious about Foguang temple,  __[Check out the app](https://chrome.google.com/webstore/detail/foguangapptestapp/nklaaogghgabcbdilaapmfbjlmbinmjp?authuser=1)__.'
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


class Foguang extends React.Component {
  render () {
    const style = PortfolioStore[3]
    return (<div>
      <ProjectTitle content={projectTitle} style={style} />
      <div className='project-content-layout'>
        <IntroRole content={introRole} />
        <Problem content={problem} style={style} /> {/* current stage */}
        <ProjectFooter content={style} style={style} />
      </div>
    </div>)
  }
}

export default Foguang
