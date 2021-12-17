import { Route, Switch } from 'react-router';
import './App.css';
import Home from './Component/Home/Home';
import Signin from './Component/Signin/Signin';
import Signup from './Component/Signup/Signup';

function App() {
  return (
    <div className="App">
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/signin" component={Signin}/>
         <Route exact path="/signup" component={Signup}/>
       </Switch>
    </div>
  );
}

export default App;
