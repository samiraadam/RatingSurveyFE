import React, { Component } from 'react';
// import logo from './logo.svg';
import NavBar from './components/NavBar';
import './App.css';
import Department from './components/User/Department'
import Login from './components/User/Login'
import SignUp from './components/User/SignUp'
import SystemAdmin from './components/SystemAdminComponent/SystemAdmin'
import Confirmation from './components/Navigation/Confirmation'
import Profile from './components/Navigation/Profile'
import DepartmentAdmin from './components/DepartmentAdminComponent/DepartmentAdmin';
import SystemAdminDashboard from './components/SystemAdminComponent/SystemAdminDashboard';
import DepartmentAdminDashboard from './components/DepartmentAdminComponent/DepartmentAdminDashboard';
import SignupConfirmation from './components/Navigation/SignupConfirmation'
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
                <Route exact path='/SystemAdmin' component={SystemAdmin} />
                <Route exact path='/Confirmation' component={Confirmation} />
                <Route exact path='/SignupConfirmation' component={SignupConfirmation} />
                <Route exact path='/Home' component={Department} />
                <Route exact path='/Profile' component={Profile} />
                <Route exact path='/SystemAdminDashboard' component={SystemAdminDashboard} />
                <Route exact path='/DepartmentAdmin' component={DepartmentAdmin} />
                <Route exact path='/DepartmentAdminDashboard' component={DepartmentAdminDashboard} />


          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
