import React, { Component } from 'react';
// import logo from './logo.svg';
import NavBar from './components/NavBar';
import './App.css';
import Department from './components/Department'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Admin from './components/Admin/Admin'
import Confirmation from './components/Confirmation'
import Profile from './components/Profile'
import AdminHome from './components/Admin/AdminHome'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple React App</h1>
        </header> */}
        <NavBar />
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/Login"/>
                )}/>
                <Route exact path='/Login' component={Login} />
                <Route exact path='/SignUp' component={SignUp} />
                <Route exact path='/Admin' component={Admin} />
                <Route exact path='/Confirmation' component={Confirmation} />
                <Route exact path='/Home' component={Department} />
                <Route exact path='/Profile' component={Profile} />
                <Route exact path='/AdminHome' component={AdminHome} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
