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

const introRole = {
  sectionClass: 'list-style-circle',
  content: '"Meet the Master at Foguang Temple" was an educational project commissioned by the Cultural Heritage Conservation Center, Beijing China. Through the app, users get to learn the hidden story of Foguang Temple - the third earliest preserved timber structure building during the Tang Dynasty.',
  duties: [
    'I worked as one of the product designers for this project. I also coded the front-end interface of the app. My works can be summarized below:',
    'Defining problems',
    'Research on the users & content',
    'Wireframing, storyboard & validation',
    'UI & Prototype',
    'Implementation'
  ],
  img: '../../../assets/images/proj_foguang/foguang_thumb.gif'
}

const state = {
  title: 'Current state',
  sectionClass: 'list-style-circle',
  content: 'We had finished developing this project in 2016 as a Chrome extension app, and the phrase 2 had been initiated to expand into other platforms early 2019. If you are curious about Foguang temple,  __[Check out the app](https://chrome.google.com/webstore/detail/foguangapptestapp/nklaaogghgabcbdilaapmfbjlmbinmjp?authuser=1)__.'
}

const img360 = {
  deviceFrame: 'laptop',
  video: 'https://youtu.be/5q-q4ShvlGA'
}

class Foguang extends React.Component {
  render () {
    const style = PortfolioStore[3]
    return (<div>
      <ProjectTitle content={style} style={style} />
      <div className='project-content-layout'>
        <IntroRole content={introRole} />
        <Problem content={state} style={style} /> {/* current stage */}
        <LayoutImage content={img360} style={style} />
        <ProjectFooter content={style} style={style} />
      </div>
    </div>)
  }
}

export default Foguang
