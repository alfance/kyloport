import React from 'react'
import ProjectTitle from './components/ProjectTitle'
import TitleDivier from './components/TitleDivider'
import PlayStore from '../../stores/PlayStore'
import IntroRole from './components/IntroRole'
import LayoutImage from './components/LayoutImage'
import LayoutHalf from './components/LayoutHalf'
import LayoutOneThird from './components/LayoutOneThird'
import LayoutTwoThird from './components/LayoutTwoThird'
import LayoutThree from './components/LayoutThree'
import ProjectFooter from './components/ProjectFooter'

const project1 = {
  title: 'Project 1: Vgarden'
}
const introRolegarden = {
    sectionClass: 'list-style-circle',
    content: 'The Modular Vertical Garden is a digital and ‘smart’ system that I designed to ease the pain points of maintaining a vertical garden. The modularity allows users to have a garden as big or as small as he/she likes, flexible to the constraints of physical space and personal preference.',
    duties: [
        'This was the capstone project for my master study. I conceptualized, designed and prototyped the whole system',
        'Thesis Development',
        'Research & Case study',
        'UI / UX design',
        'Arduino development'
    ],
    img: '../../../assets/images/play_citybeats/thumb-vgarden.jpg'
}

const problem1 = {
    title:'Problem',
    content:'Vertical gardens (green wall) are great resource for home use. However, the cost of design, construction and maintenance are factors that hinder the development of vertical garden into different architectural types and expanding into multiple user segments. Because of this, home gardening is still at a lagging stage within the rapid development of digital media.',
    imgLeft:'../../../assets/images/play_citybeats/vgarden1.jpg',
    imgRight:'../../../assets/images/play_citybeats/vgarden2.jpg',
    label:'photo curtesy: pixabay'
}

const solution1 = {
    title:'Solution',
    sectionClass: 'project-layout-wide',
    content:'The modular garden allows users to have a garden as big or as small as he/she likes, flexible to the constraints of physical space and personal preference. It talks to the web, allowing the user to observe and control the vegetation right off of their computer or smartphone device. This project benefits apartment/condo dwellers and people who have limited physical space time and efforts.',
    imgLeft:'../../../assets/images/play_citybeats/vgarden_unit2.jpg',
    imgRight:'../../../assets/images/play_citybeats/vgarden_unit1.jpg',
}

const design1 = {
    title:'Design Process',
    content:['Software - digital interface that display the status of the plants','Hardware - individual units each contain one plant & corresponding water system.'],
    imgLeft:'../../../assets/images/play_citybeats/userflow.jpg',
    imgRight:'../../../assets/images/play_citybeats/interface1.jpg',
}

const system = {
  title:'Unit System Design',
  sectionClass: 'project-layout-wide',
  imgLeft:'../../../assets/images/play_citybeats/one_unit_breakdown.png',
  imgMiddle:'../../../assets/images/play_citybeats/plant_sys.png',
  imgRight:'../../../assets/images/play_citybeats/One_unit_connection_topbottom.png',
}

const model1 = {
    title:'Modelling & Prototyping',
    content: 'Part of the project components were 3D printed. For example, the water tube connectors. The bottom part container is laser cutted, and the top part container is made of foam board covered with water-proof spray.',
    imgLeft:'../../../assets/images/play_citybeats/model2.jpg',
    imgRight:'../../../assets/images/play_citybeats/3dprint.jpg',
}

const final = {
    title:'Makeing the Vgarden work!',
    sectionClass: 'project-layout-wide',
    content: 'For ever garden, there is a central unit where power source and internet modules are stored. When additinal unit connects to the central unit, Data is transfered. Whenever the customer introduced a new plant or member to the “family”, the transmitter will send the basic information to the app, thus updated in the interface.',
    imgLeft:'../../../assets/images/play_citybeats/wires.jpg',
    imgRight:'../../../assets/images/play_citybeats/final4.jpg',
}

const project2 = {
  title: 'Project 2: CityBeat'
}

const introRole = {
    sectionClass: 'list-style-circle',
    content: 'CityBeat is an interactive dress with colour changing LEDs. It is responsive to the Open source data of Toronto, the colours changes according to the current traffic of the municipality. The purpose of the project is to connect your city via fashion.',
    duties: [
        'I worked mainly on the physical wiring between the Arduino and the LEDs. Besides, sewing the dress together. This garment was made in Hack’n’Talk 2015, where I had the fortune to work with a few talented people:',
        '__[Danning Lu](https://danninglu.com/)__',
        'Shamraiz Gul',
        'Fernando Toro'
    ],
    img: '../../../assets/images/play_citybeats/citybeat.png'
}

const groupphoto = {
    img:'../../../assets/images/play_citybeats/group.jpg'
}

const ideation = {
    title:'Ideation phase',
    content:'The topic of Hack&#39n&#39Talk is fashion-inspired wearable technology. With all 4 group members coming from different countries, we found ourselves sharing the same feeling for the city that unit us - Toronto. Spending half a day ideate, we decided to work on a garment that reflects the municipality.',
    imgLeft:'../../../assets/images/play_citybeats/idea1.jpg',
    imgRight:'../../../assets/images/play_citybeats/idea2.jpg'
}

const making = {
    title:'Sewing, Coding and Tinkering',
    sectionClass: 'project-layout-wide',
    content:['Toronto is a dynamic metropolis with a beautiful city line and soaring skyscrapers, and we want to visualize the city using wearable Arduino and real-time data abstractly.',
'In conclusion, We decide to use fibre optic lights attached to a black dress to resemble the vibrant night of Toronto. The colours of the lights are corresponding by real-time Toronto transit data.'],
    imgLeft:'../../../assets/images/play_citybeats/making1.jpg',
    imgMiddle:'../../../assets/images/play_citybeats/making2.jpg',
    imgRight:'../../../assets/images/play_citybeats/code.jpg'
}

const final1 ={
    title:'Introducing: CityBeats',
    sectionClass: 'project-layout-wide',
    imgLeft:'../../../assets/images/play_citybeats/0016.jpg',
    imgRight:'../../../assets/images/play_citybeats/0005.jpg',
}
const final2 ={
    sectionClass: 'project-layout-wide play-section-up',
    imgLeft:'../../../assets/images/play_citybeats/0011.jpg',
    imgRight:'../../../assets/images/play_citybeats/0010.jpg',
}

const present ={
    img:'../../../assets/images/play_citybeats/present.jpg',
    label:'Presenting CityBeats to the panellists at Hack&#39n&#39Talk.'
}
const result = {
    content:'In the end, one of the incubators from the University of Ryerson- Fashion Zone had liked CityBeats. We were grateful to exhibit the garment in the Zone office.',
    img:'../../../assets/images/play_citybeats/display.jpg',
}

class CityBeats extends React.Component {
    render() {
        const style = PlayStore[0]
        return (<div>
            <ProjectTitle content={style} style={style}/>
            <div className='project-content-layout'>
              <TitleDivier content={project1} style={style} />
              <IntroRole content={introRolegarden}/>
              <LayoutTwoThird content={problem1} style={style} />
              <LayoutOneThird content={solution1} style={style} />
              <LayoutHalf content={design1} style={style} />
              <LayoutThree content={system} style={style} />
              <LayoutTwoThird content={model1} style={style} />
              <LayoutHalf content={final} style={style} />

                <TitleDivier content={project2} style={style} />
                <IntroRole content={introRole}/>
                <LayoutImage content={groupphoto} />
                <LayoutHalf content={ideation} />
                <LayoutThree content={making} style={style} />
                <LayoutOneThird content={final1} style={style} />
                <LayoutTwoThird content={final2} style={style} />
                <LayoutImage content={present} style={style} />
                <LayoutImage content={result} style={style} />
                <ProjectFooter content={style} style={style} />
        </div>
        </div>)
    }
}

export default CityBeats
