import {EventEmitter} from 'events'

class ProjectStore1 extends EventEmitter {
  constructor () {
    super()
    this.projItems = [
      {
        id: 1,
        name: 'Project 1',
        category:'project title',
        link: 'Project1',
        url:''
      },
      {
        id: 2,
        name: 'Project 2',
        category:'mobile',
        link: 'cycnav',
        url:''
      },
      {
        id: 3,
        name: 'Project 3',
        category:'mobile',
        link: 'Project3',
        url:''
      },
      {
        id: 4,
        name: 'Project 4',
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

const projectStore1 = new ProjectStore1()

export default projectStore1
