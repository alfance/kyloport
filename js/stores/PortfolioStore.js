import {EventEmitter} from 'events'

class PortfolioStore extends EventEmitter {
  constructor () {
    super()
    this.portItems = [
      {
        id: 1,
        name: 'Project 1',
        title:'brioVR',
        category:'mobile',
        link: 'Project1',
        url:''
      },
      {
        id: 2,
        name: 'Project 2',
        title:'brioVR',
        category:'mobile',
        link: 'Project2',
        url:''
      },
      {
        id: 3,
        name: 'Project 3',
        title:'brioVR',
        category:'mobile',
        link: 'Project3',
        url:''
      },
      {
        id: 4,
        name: 'Project 4',
        title:'brioVR',
        category:'mobile',
        link: 'Project4',
        url:''
      }
    ]
  }

  getAll () {
    return this.portItems
  }
}

const portfolioStore = new PortfolioStore()

export default portfolioStore
