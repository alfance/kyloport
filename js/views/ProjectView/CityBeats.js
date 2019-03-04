import React from 'react'
import ProjectTitle from './components/ProjectTitle'
import PlayStore from '../../stores/PlayStore'
import IntroRole from './components/IntroRole'
import LayoutImage from './components/LayoutImage'
import LayoutHalf from './components/LayoutHalf'
import LayoutOneThird from './components/LayoutOneThird'
import LayoutTwoThird from './components/LayoutTwoThird'
import LayoutThree from './components/LayoutThree'
import ProjectFooter from './components/ProjectFooter'

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
