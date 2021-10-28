import Suit from '../components/suit'
import CreateNewPlayer from '../components/createNewPlayer';
import SearchPlayer from '../components/searchPlayer';
import LoginPlayer from '../components/loginPlayer';
import EditProfile from '../components/profilePlayer';
const routes = [
  {
    path : '/',
    component:<CreateNewPlayer/>,
    exact : true
  },
    {
      path : '/signup',
      component:<CreateNewPlayer/>,
      exact : false
    },
    {
     path : '/suit',
     component:<Suit/>,
     exact : false
   },
   {
    path : '/login',
    component:<LoginPlayer/>,
    exact : false
  },
   {
    path : '/player',
    component:<SearchPlayer/>,
    exact : false
  },
  {
    path : '/edit',
    component:<EditProfile/>,
    exact : false
  }
 
 
  
  ]

export default routes