 import React from 'react'
 import { Spring } from 'react-spring'

 export default class ProjectTitle extends React.Component {
   render () {
     const {title, logo, bgImg, headerImage} = this.props.content
     const {color} = this.props.style
     const titleBG = {
       backgroundImage: 'url(' + bgImg + ')',
       backgroundColor: color,
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'contain'
     }

     return (
       <Spring from={{ opacity: 0, marginTop: 300 }} to={{opacity: 1, marginTop: 0}}>
         {({ opacity, marginTop }) =>
           <div style={{opacity, marginTop}}>
             <div className='project-title-layout' style={titleBG}>
               <div className='project-title-bg' style={{ backgroundColor: color }} />
               <div className='project-title-text'>
                 <img className=' project-title-logo' src={headerImage} />
                 <h2>{title}</h2>
               </div>
             </div>
           </div>
     }
       </Spring>
     )
   }
}
