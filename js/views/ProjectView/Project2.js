import React from 'react'

class Project2 extends React.Component {
  render () {
    return (
      <div>
        <div className='project-title-layout'>
          <h1> CYCNAV </h1>
          <h2> UI/UX, Interaction Design</h2>
        </div>

        <div className='project-content-layout'>
          <p>CYCNAV is both an app and a physical IOT that provides real time and interactive bikers map of the city. It allows cyclists to see where current construction, potholes and obstructions are taking place.
          It offers user the best route suggestions according to the road condition. Users, in return, can contribute to the community to create real time map.
        </p>
          <p>The project began in 2014 as an UX research project for my master study at Ryerson. I have been continously revisiting it through out the years.
            After spending years working and living in Downtown Toronto, I discovered the potential of the app as more than a navigational mapping tool,
            but it can become a handy aid for the food delivery business.
        </p>

          <h2>Where is the problem coming from</h2>
          <p>
          The biggest pain that every cyclist has experienced, especially the urban cyclist, is various road conditions and incidents that lead to unexpected detours.
          Looking for an applicable route can be time consuming, while bypassing the original road can be dangerous.
          Currently there have been apps that help cyclists navigate through the road, but they do not offer alternate route options.
          most importantly, cyclists needed to be constantly updated while they are biking.
          <ul>
            <li>Troubled by the Downtown road conditions</li>
            <li>Limited apps to give guidence and suggestions on routes</li>
            <li>Existing apps are often distractive and pause safety concerns to the users</li>
          </ul>
          </p>

          <h2> Interviews </h2>
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

          <h2>Personas</h2>
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

          <h2>Comparative Analysis</h2>
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
        </div>
        <h3>A lot of the solutions out in the market is either app based, or hardware based. Many times, the problem can not be simply solved with just one method.
        As for Nacnav, it is a combined solution that tackle the problem using both technologies.</h3>

        <h2> User Journey</h2>
        <p>Cycnav focuses on the two main purposes: 1) Get to the destination. 2) Fast and safe.</p>
        <p>The highlighted bubble are the main functions users will be using, while supporting features(grey bubble) will be the key to the overall NUX</p>

        <h2>Wireframes</h2>
        <div className='project-layout-13'>
          <div>We started by creating several different versions of wireframes. Based on internal test result, we decided to:
        <ul>
          <li>Spend more time with the user on the onboarding</li>
          <li>Reduce the number of button on the lights, and increase the size</li>
        </ul>
          </div>
          <div>
          sdfsdfsdfdf</div>
        </div>

        <h2>Usability Test</h2>
        Test with the wireframes revealed some major areas to improve on:
        <br />
        <b>"sdfsdfsdf"</b> sdfsdfsdjlfksjdflskdf

        <h2> Solution - Wireframe N </h2>

        <h2> Prototype - APP</h2>
        <div className='project-layout-half'>
          <div>
            <h3> Version 1 </h3>
          </div>
          <div>
            <h3> Version 2 </h3>
          </div>
        </div>

        <h2> Prototype - BIKE LIGHT</h2>

      </div>
    )
  }
}

export default Project2
