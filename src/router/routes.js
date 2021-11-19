import Home from '../pages/home'
import Lawyer from '../pages/lawyer'
import Adviser from '../pages/adviser'

export default {
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/abogada',
      name: 'Lawyer',
      component: Lawyer
    },
    {
      path: '/asesora',
      name: 'Adviser',
      component: Adviser
    }
  ]
}
