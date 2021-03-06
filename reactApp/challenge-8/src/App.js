import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import routes from './routes';


function App() {
  
  return (

<div>
  
<Router>
  <div>
<NavBar/>
<Switch>  
  {
    routes.map(route=>{
      return <Route exact={route.exact} path={route.path}>
        {route.component}
      </Route>
    })
  }
    

</Switch>
      </div>
    </Router>
</div>



  );
}

export default App;
