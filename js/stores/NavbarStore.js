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
        id: 1,
        name: 'About',
        link: 'about'
      }
    ]
  }

  getAll () {
    return this.navitems
  }
}

const navbarStore = new NavbarStore()

export default navbarStore
