import {EventEmitter} from 'events'

class PortfolioStore extends EventEmitter {
  constructor () {
    super()
    this.portItems = [
      {
        id: 1,
        name: 'Project 1',
        title: 'BRIOVR',
        pitch: 'UX / UI / Interaction Design',
        category: 'Behaviour system for online VR platform',
        link: 'briovr',
        headerImage: '../../assets/images/proj_cycnav/title_img2.png',
        url: ''
      },
      {
        id: 2,
        name: 'Project 2',
        title: 'FairTrade',
        pitch: 'Product design, UX & UI',
        category: 'Non-profit mobile & web platform',
        link: 'cycnav',
        headerImage: '../../assets/images/projects/header/proj2.jpg',
        url: ''
      },
      {
        id: 3,
        name: 'Project 3',
        title: 'CYCNAV',
        pitch: 'Product design, UX & UI',
        category: 'Mobile app & IOT for cyclists',
        link: 'cycnav',
        headerImage: '../../assets/images/projects/header/proj3.jpg',
        url: ''
      },
      {
        id: 4,
        name: 'Project 4',
        title: 'M-Arcade',
        pitch: 'UX & UI redesign',
        category: 'Mobile arcade game app',
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
