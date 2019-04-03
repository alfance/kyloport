import React from 'react'
import ProjectTitle from './components/ProjectTitle'
import PlayStore from '../../stores/PlayStore'
import LayoutImage from './components/LayoutImage'
import LayoutHalf from './components/LayoutHalf'
import LayoutText from './components/LayoutText'
import ProjectFooter from './components/ProjectFooter'

const intro = {
    sectionClass:'3d-intro',
    content:'When it comes to 3d modelling, I usually unleash my inner self to embrace the essence of cuteness. Throughout my experience working as a VR/AR designer, I uncovered some potential in adding a third axis to introducing a new medium to an original 2D article. '
}

const lowpoly = {
    title:'Low Poly',
    content:'Modelled, textured and baked in Cinema4d. ',
    threeDLeft:'https://sketchfab.com/models/26c3f2f271ab41a5a0c9178ac5304df8/embed',
    threeDRight:'https://sketchfab.com/models/a1342470050b479caf5ed79dda88414d/embed'
}

const animation ={
    title:'Animation',
    threeDLeft:'https://sketchfab.com/models/24a26d3d7a384f5ca015f7ee51ef9260/embed',
    contentLeft:'Original concpet by keke, modelled and animated in Cinema4d using joint animation and blendshapes.',
    threeDRight:'https://view.briovr.com/7c749e20-6b60-4228-a033-b4c8f9a91473?minimal=true',
    contentRight:'Designed in Photoshop, modelled & painted texture in Cinema4d. Animated in BRIOVR using purely transformations.'
  }

  const zbrush ={
      title:'Zbrush',
      content:'Everything is sculpted in Zbrush during the awesome tutorials taught by Cesar D!',
      threeDLeft:'https://sketchfab.com/models/48b297f81d8248d8951bce0a0ebf317e/embed',
      threeDRight:'https://sketchfab.com/models/e97f3be309ce4907afbcfa672832808d/embed'
    }

class CityBeats extends React.Component {
    render() {
        const style = PlayStore[2]
        return (<div>
            <ProjectTitle content={style} style={style}/>
            <div className='project-content-layout'>
                <LayoutText content={intro} />
                <LayoutHalf content={lowpoly} />
                <LayoutHalf content={animation} style={style} />
                <LayoutHalf content={zbrush} style={style} />
                <ProjectFooter content={style} style={style} />
        </div>
        </div>)
    }
}

export default CityBeats
