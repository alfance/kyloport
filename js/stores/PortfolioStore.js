import {EventEmitter} from 'events'

class PortfolioStore extends EventEmitter {
  constructor () {
    super()
    this.portItems = [
      {
        id: 1,
        name: 'Project 1',
        title: 'BRIOVR',
        pitch: 'VR Presentation',
        category: 'mobile',
        link: 'Project1',
        headerImage: '../../assets/images/projects/header/proj1.jpg',
        url: ''
      },
      {
        id: 2,
        name: 'Project 2',
        title: 'CYCNAV',
        pitch: 'IOT and Mobile UX/UI',
        category: 'mobile',
        link: 'Project2',
        headerImage: '../../assets/images/projects/header/proj2.jpg',
        url: ''
      },
      {
        id: 3,
        name: 'Project 3',
        title: 'CYCNAV',
        pitch: 'Product design, UX & UI',
        category: 'mobile app & IOT',
        link: 'cycnav',
        headerImage: '../../assets/images/projects/header/proj3.jpg',
        url: ''
      },
      {
        id: 4,
        name: 'Project 4',
        title: 'GAMEON',
        pitch: 'Mobile App for Sports Fan',
        category: 'mobile',
        link: 'Project4',
        headerImage: '../../assets/images/projects/header/proj1.jpg',
        url: ''
      },
      {
        id: 5,
        name: 'Project 5',
        title: 'DIGITAL MEDIA ZONE',
        pitch: 'Website UI/UX and Branding',
        category: 'mobile',
        link: 'Project4',
        headerImage: '../../assets/images/projects/header/proj1.jpg',
        url: ''
      }
    ]
  }

  getAll () {
    return this.portItems
  }
}

const portfolioStore = new PortfolioStore()

export default portfolioStore
