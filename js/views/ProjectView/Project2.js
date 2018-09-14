import React from 'react'
import ProjectTitle from './components/ProjectTitle'
import IntroRole from './components/IntroRole'
import Problem from './components/Problem'
import TableComponent from './components/TableComponent'
import Persona from './components/persona'
import FindingComponent from './components/FindingComponent'
import RegImageComponent from './components/RegImageComponent'

const projectTitle = {
  title: 'UI/UX, Interaction Design'
}

const introRole = {
  content: 'CYCNAV is a combination of an navigational app and a physical bike light to guide the cyclists roaming around the city. It not only provide the fastest routes,but also guarantees the users safety by avoiding bad road conditions.',
  role: 'UX designer',
  duties: ['1. Conduct user and market research and analysis',
    '2. Defining strategies & Scope',
    '3. Facilitate ideation & design decisions',
    '4. Create Wireframes & Prototypes',
    '5. 3D modeling & printing of the physical Component',
    '6. Validation test and evaluations'],
  img: '../../../assets/images/proj_cycnav/journey_map.jpg'
}

const problem = {
  title: 'Source of the Problem',
  content: 'The biggest pain that every cyclist has experienced, especially the urban cyclist, is to navigate in various road conditions and incidents that lead to unexpected detours. Looking for an applicable route can be time consuming, while bypassing the original road can be dangerous.',
  list: ['Troubled by the Downtown road conditions',
    'Limited apps to give guidence and suggestions on routes',
    'Existing apps are often distractive and pause safety concerns to the users']
}

const interviews ={
    title:'Interviews',
    content:'At the discovery phase of my project, we conducted user interviews from people use bike on a regular basis. Following is a summary of the answers:',
    columns:[{
        Header: '#',
        accessor: 'number' // String-based value accessors!
      }, {
        Header: 'Type',
        accessor: 'type'
    }, {
        Header: 'Biking Frequency(daily)',
        accessor: 'frequency'
      }, {
        Header: 'Need for map?',
        accessor: 'map',
    }],
    data:[{
        number: 1,
        type: 'Professional',
        frequency: "2 - 3",
        map:'NO'
    },{
        number: 2,
        type: 'Student',
        frequency: "2 - 4",
        map:'Sometimes'
    },{
        number: 3,
        type: 'Delivery Worker',
        frequency: "> 10",
        map:'Yes'
    },{
        number: 4,
        type: 'Hobbists',
        frequency: "1 - 4",
        map:'Sometimes'
    }]
}

const persona = {
    title:'Personas',
    content:'As a result, the two types of users that will be benfited the most from our app are student bikers and Food delivery individula.Their similarity is the need of safe and correct route when cycling in the urban environment.',
p1Img: '../../../assets/images/proj_cycnav/avatar-0.svg',
p2Img:'../../../assets/images/proj_cycnav/avatar-2.svg',
p1content:[
    'Ann Goldshire',
    'Student',
    'Age: 17 to 27',
    'Bikes 2 - 6 times a day',
    'Ann uses bikes for most of her daily commute. Thus Ann values most effortless routes.'
],
p2content:[
    'Oliver Dimaran',
    'Food Delivery',
     'Age: 19 to 40',
     'Bikes multiple times a day',
     'Biking is Olivers main source of income and he wants nothing but to get to the destination in the shortest amount of time.'
]
}

const findingPersona = {
    subtitle:'finding',
    content:'The users who will benefit the most from our app are frequent users of bicycles, and travel to various places'
}

const userJourney = {
    title:'User journey',
    content:'Cycnav focuses on the two main purposes: 1) Get to the destination. 2) Fast and safe.',
    img:'../../../assets/images/proj_cycnav/journey_map.jpg',
    label:'The highlighted bubble are the main functions users will be using, while supporting features(grey bubble) will be the key to the overall NUX'
}

const img1 = require('../../../assets/images/proj_cycnav/journey_map.jpg')

const img6 = require('../../../assets/images/proj_cycnav/google_map.png')
const img7 = require('../../../assets/images/proj_cycnav/vanhawks_logo.png')
const img8 = require('../../../assets/images/proj_cycnav/waze.png')
const img9 = require('../../../assets/images/proj_cycnav/phone.png')
const img10 = require('../../../assets/images/proj_cycnav/bikelight.png')
const img11 = require('../../../assets/images/proj_cycnav/app_wireframe.png')

class Project2 extends React.Component {

  render () {
    return (
      <div>
        <ProjectTitle content={projectTitle} />
        <div className='project-content-layout'>
        <IntroRole content={introRole} />
          <Problem content={problem} />

          <h3>Who are the users? </h3>
          <TableComponent content={interviews} />

          <Persona content={persona} />
          <FindingComponent content={findingPersona} />
          <RegImageComponent content={userJourney} />

          <h3>Market Research</h3>
          <h4>Comparactive Analysis </h4>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>App / Device name</th>
                <th>What works</th>
                <th>What doesn’t work</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={img6} /><br />
                Google Maps
                </td>
                <td>
                  <ul>
                    <li>Bike friendly trails and lanes</li>
                    <li>Route suggestion based on cyclists preference</li>
                    <li>3D elevation on geographic features</li>
                  </ul>
                </td>
                <td><ul>
                  <li>No relevant information such as bike shops & repare centre</li>
                  <li>No Bike share map</li>
                </ul></td>
              </tr>
              <tr>
                <td><img src={img7} /><br />
                Vanhawk bikes</td>
                <td><ul>
                  <li>Self sustained, no need for phone / GPS</li>
                  <li>feature that notifies nearby traffic in the blindspot.</li>
                  <li>Speed tracking</li>
                </ul></td>
                <td><ul>
                  <li>Costly</li>
                  <li>No live updates of current road condition</li>
                </ul></td>
              </tr>
              <tr>
                <td><img src={img8} /><br />
                Waze app</td>
                <td><ul>
                  <li>User Contribution</li>
                  <li>Social feature, friends option</li>
                </ul></td>
                <td><ul>
                  <li>Car focused, not for cyclists</li>
                  <li>no offline maps</li>
                </ul></td>
              </tr>
            </tbody>
          </table>

          <div className='finding-div'><b>Finding </b> A lot of the solutions out in the market is either app based, or hardware based. Many times, the problem can not be simply solved with just one method.
        As for CYCNAV, it is a combined solution that tackle the problem using both technologies.</div>

          <h4>App vs IOT </h4>
          <br />
          <table className='table table-noborder'>
            <thead>
              <tr>
                <th>Digital App</th>
                <th>Physical Device</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src={img9} /></td>
                <td><img src={img10} /></td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>Accurate and fast route search</li>
                    <li>User contribution</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>More safe & all-in-one navigation</li>
                    <li>Fast feedback, cost free</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>More distractions</li>
                    <li>Dependent on light condition</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Costly, atleast $100</li>
                    <li>Cannot be stand alone</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <h3>Solutions</h3>
          <p>Based on the result of comparative analysis, we decide to approach the problem using both digital and physical solutions. that is building a physical navigational device that would be powered by a digital app.</p>
          <img src={img1} />
          <div className='project-layout-half'>
            <div>
              <b>Cycnav Navigational App</b>: The app uses googles map api to calculate the best route for the users, use can also input their finding of road conditions using the app.
            </div>
            <div>
              <b>Cycnav Bike Light</b>: The bike light is connected to the app using bluetooth. While the app is calculating and adjusting the route,
              the bike light functions as the visual portal to help guide the cyclists while they are biking.
            </div>
          </div>

          <h3>Wireframes - Digital</h3>
          <p>
              We started by creating several different versions of wireframes. The focus of the wireframe is to help the user find the route of their destination. Then leads them to the bike light.
            </p>
          <p>
            the features of the app: <br />
            <ul>
              <li>Search for destination </li>
              <li>Find the desired route </li>
              <li>Initiate navigation </li>
            </ul>
          </p>
          <img src={img11} />

          <h3>Prototype - Bike Light </h3>
          <p>Once the user has done deciding on the route, we would like them to put away their phone and use the bike light to navigate. We used Revit to do the modeling of the bikelight, the main idea is to have a fluid shape of a light that canbe easily attached </p>
          <ul>
            <li>Serves the core functioanl requirements: Feeding and receiving data to the phone, Major biking light, indicational lights</li>
            <li>Fluid shape that can be easily attached to the bike, and easily dettached for charging</li>
            <li>Secure enough for threfting </li>
          </ul>
          <div className='project-layout-third'>
            <div> prototype 1 </div>
            <div> prototype 2 </div>
            <div> prototype 3 </div>
          </div>

          <h3>Usability Test</h3>
          <p>Test with the wireframes revealed some major areas to improve on:</p>
          <ul>
            <li>Users encountered trouble moving from the mobile app to the bike light. They prefer staying on the app while biking.</li>
            <li>Not enough feedback on botht the app and the bike light, users sometimes get confused while traveling. </li>
          </ul>

          <h3> Iterations</h3>
          <p>We focuse improvements on the following two major components: </p>
          <ul>
            <li>Spend more time with the user on the onboarding, especially when they are connecting the bike light to the app.</li>
            <li>Redefine the search process to make it more intuitive, less steps.</li>
            <li>Reduce the number of button on the lights, and increase the size</li>
          </ul>
          <img src={img1} />

          <div className='finding-div'><b>Results: </b><br />
           We tested the new design again to a different group of people and the results were way better.
           <table className='table table-bordered'>
             <thead>
               <tr>
                 <th>Features</th>
                 <th>Test 1 Problem</th>
                 <th>Fixes </th>
                 <th> Results </th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>App Onboarding</td>
                 <td>
                 Users stuck on connected page
                 </td>
                 <td>
                 Automatically direct to Map page
                 </td>
                 <td>
                 50% Up
                 </td>
               </tr>
               <tr>
                 <td>App to Device transition</td>
                 <td>
                  Popup intruct user to move to bike like often neglected
                 </td>
                 <td>
                 Full screen instruction
                 </td>
                 <td>
                 25% Up
                 </td>
               </tr>
               <tr>
                 <td>Bike light Navigation</td>
                 <td>
                  Arrow light not clear, no indication of road blocks.
                 </td>
                 <td>
                 Increased the size of the arrow light, added road block type
                 </td>
                 <td>
                 75% Up
                 </td>
               </tr>
             </tbody>
           </table>
          </div>

          <h3> Prototype - APP</h3>
          <p>We had a few variations for the Prototype as shown below. One consideration that is more important than the asthetics of the app itself, is the readability of the screen under different light conditions.</p>
          <div className='project-layout-third'>
            <div>
              <img src={img1} /> <br />
              <span><b>Design 1 </b>: a 'green' theme is used as we are hoping to achive a eco travel method. </span>
            </div>
            <div>
              <img src={img1} /><br />
              <span><b>Design 2</b>: a 'green' theme is used as we are hoping to achive a eco travel method. </span>
            </div>
            <div>
              <img src={img1} /><br />
              <span><b>Design 3</b>: a 'green' theme is used as we are hoping to achive a eco travel method. </span>
            </div>
          </div>
          <p> In the end, we decide to go with design 3 due to its readability even under extreme sun light. For this design,
          the users can grasp the information in the shortest amoutn of time, which is fatal when they are on the road.</p>
          <img src={img1} />
          <p>Following are the tests of the prototype under various light conditions </p>
          <img src={img1} />

          <h3> Prototype - BIKE LIGHT</h3>
          test esldfjlskdhflskdjf;sldkhfskdhflsdkf;slei

          <h3>Reflections </h3>
          <p> <b>Sometimes the perfect solution is not one, but multiple approaches</b> <br />
          If we have not done the user test and market analysis, we were Automatically assumed to go with one of the two
          completely different method for the problem we are presented. By adapting the UX research process we were able to focus on our users, coming up with
          valid solutions for the problems insead of making assumptions for the sake of building a tool.</p>
          <p><b>Being able to pick up new skills and learn quickly is part of the UX.</b> This probject was done with limited time and resources. at times I had
          to learn new softwares, pick up technical skills along the way. This is not only helpful to me personaly, but it broadens my pespective as an UX design,
          where I was able to develop empathy for other field of personnels.
          </p>
        </div>
      </div>
    )
  }
}

export default Project2
