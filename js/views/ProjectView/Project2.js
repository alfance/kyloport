import React from 'react'

const img1 = require('../../assets/images/journey_map.jpg')

class Project2 extends React.Component {
  render () {
    return (
      <div>
        <div className='project-title-layout project-title-cycnav'>
            <div className='project-title-text'>
              <div className ='cycnav-logo project-title-logo' />
              <h3> UI/UX, Interaction Design</h3>
          </div>
        </div>

        <div className='project-content-layout'>
          <h4>CYCNAV is a combination of an navigational app and a physical bike light to guide the cyclists roaming around the city. It not only provide the fastest routes,
          but also guarantees the users safety by avoiding bad road conditions.
        </h4>
          <h4>my Role </h4>
          <p>  I worked as the UX designer for this project. Some of my responsibilities included:<br />
              1. Conduct user and market research and analysis <br />
              2. Defining strategies & Scope<br />
              3. Facilitate ideation & design decisions<br />
              4. Create Wireframes & Prototypes<br />
              5. 3D modeling & printing of the physical Component<br />
              6. Validation test and evaluations<br />
          </p>

          <h3>Source of the Problem</h3>
          <p>
          The biggest pain that every cyclist has experienced, especially the urban cyclist, is to navigate in various road conditions and incidents that lead to unexpected detours.
          Looking for an applicable route can be time consuming, while bypassing the original road can be dangerous.
          <ul>
            <li>Troubled by the Downtown road conditions</li>
            <li>Limited apps to give guidence and suggestions on routes</li>
            <li>Existing apps are often distractive and pause safety concerns to the users</li>
          </ul>
          </p>

          <h3>Who are the users? </h3>
          <h4> Interviews </h4>
          <p>At the discovery phase of my project, we conducted user interviews from people use bike on a regular basis. Following is a summary of the answers:</p>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Number</th>
                <th>Type</th>
                <th>Biking Frequency (daily)</th>
                <th>Need for Map?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td> Professional</td>
                <td>2 - 3</td>
                <td> NO </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Student</td>
                <td>2 - 4</td>
                <td> Sometimes </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Delivery Worker</td>
                <td> > 10</td>
                <td> Yes </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Hobbists</td>
                <td>2 - 4</td>
                <td>Sometimes</td>
              </tr>
            </tbody>
          </table>

          <h4>Personas</h4>
          <p> As a result, the two types of users that will be benfited the most from our app are student bikers and Food delivery individula.
          Their similarity is the need of safe and correct route when cycling in the urban environment.</p>
          <div className='project-layout-half'>

            <div>
              <b>Ann Goldshire</b><br />
               Students<br />
               Age: 17 to 27<br />
               Bikes 2 - 6 times a day<br />
               Allen uses bikes for most of his daily commute. Thus Ann values most effortless routes. <br />
            </div>

            <div>
              <b>Oliver Dimaran</b><br />
              Food Delivery<br />
               Age: 19 to 40<br />
               Bikes multiple times a day<br />
               Biking is Oliver&#39; main source of income and he wants nothing but to get to the destination in the shortest amount of time.<br />
            </div>
          </div>

          <div className='finding-div'><b>Finding </b> The users who will benefit the most from our app are frequent users of bicycles, and travel to various places </div>

          <h3>Comparative Analysis</h3>
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
                <td>Google Maps</td>
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
                <td>Vanhawk bikes</td>
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
                <td>Waze app</td>
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

          <h3> User Journey</h3>
          <p>Cycnav focuses on the two main purposes: 1) Get to the destination. 2) Fast and safe.</p>
          <img src ={img1} />
          <p>The highlighted bubble are the main functions users will be using, while supporting features(grey bubble) will be the key to the overall NUX</p>

          <h3>Solutions</h3>
          <p>We decide to adapt both digial and physical solutions for the problems we are facing. </p>
          <div className='project-layout-half'>
            <div>
              Cycnav Navigational App: The app uses googles map api to calculate the best route for the users, use can also input their finding of road conditions using the app.
            </div>
            <div>
              Cycnav Bike Light: The bike light is connected to the app using bluetooth. While the app is calculating and adjusting the route,
              the bike light functions as the visual portal to help guide the cyclists while they are biking.
            </div>
          </div>

          <h3>Wireframes - Digital</h3>
          <div className='project-layout-13'>
            <div>
              We started by creating several different versions of wireframes. Based on internal test result, we decided to:
              Spend more time with the user on the onboarding, especially when they are connecting the bike light to the app.
                Reduce the number of button on the lights, and increase the size
            </div>

            <div>
               images places skdjfsldjfsldkjfsj
            </div>
          </div>

          <h3>Prototype - Bike Light </h3>
          <p>We used Revit to do the modeling of the bikelight, the main idea is to have a fluid shape of a light that canbe easily attached </p>
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
            <li>Spend more time with the user on the onboarding, especially when they are connecting the bike light to the app.</li>
            <li>Reduce the number of button on the lights, and increase the size</li>
          </ul>

          <h3> Solution - Wireframe N </h3>

          <h3> Prototype - APP</h3>
          <div className='project-layout-half'>
            <div>
              <h3> Version 1 </h3>
            </div>
            <div>
              <h3> Version 2 </h3>
            </div>
          </div>
          <h3> Prototype - BIKE LIGHT</h3>
          test esldfjlskdhflskdjf;sldkhfskdhflsdkf;slei
        </div>
      </div>
    )
  }
}

export default Project2
