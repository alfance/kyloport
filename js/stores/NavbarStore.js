import {EventEmitter} from 'events'

class NavbarStore extends EventEmitter {
  constructor () {
    super()
    this.navitems = [
      {
        id: 1,
        name: 'Projects',
        link: 'projectmain'
      },
      {
        id: 4,
        name: 'Resume',
        link: 'resume'
      }
    ]
  }

  getAll () {
    return this.navitems
  }
}

const navbarStore = new NavbarStore()

export default navbarStore
