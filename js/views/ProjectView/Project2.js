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

          <h2>Personas</h2>
          <div className='project-layout-third'>
            <div>
              <b>Jason Wong</b><br />
              Working Professional<br />
               Age: 24 to 60<br />
               Bikes 2 times a day, to and from work<br />
               Jason bikes mainly between work and home because of its convenience, he values safety the most then speed.<br />
            </div>

            <div>
              <b>Ann Goldshire</b><br />
               Student<br />
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

        </div>
      </div>
    )
  }
}

export default Project2
