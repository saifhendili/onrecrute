import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Component/Layout/Navbar';
import Alert from './Component/Layout/Alert';
import Register from './Component/Auth/Register';
import Login from './Component/Auth/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './Component/routing/PrivateRoute';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import AddOffre from './Component/DRH/Offre/AddOffre';
import EditOffre from './Component/DRH/Offre/EditOffre';
import ShowDetails from './Component/DRH/Offre/ShowDetails';
import GetOffre from './Component/Condidat/Postuler/GetOffre';
import InternshipList from './Component/Condidat/InternshipList';
import MyNotification from './Component/Condidat/Notification/MyNotification';
import Video from './Component/VideoChat/Video'
import Home from './Component/VideoChat/Home'
import LandingPage from './Component/Layout/LandingPage';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />          
              <Route exact path='/' component={LandingPage} />

          {/* <Route exact path='/' component={Landing} /> */}
          <section className='container'>
            <Alert className='aaa' />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/AddOffre' component={AddOffre} />
              <PrivateRoute exact path='/EditOffre' component={EditOffre} />
              <PrivateRoute exact path='/myoffre' component={ShowDetails} />
              <PrivateRoute exact path='/offredetails' component={GetOffre} />
              <PrivateRoute exact path='/InternshipList' component={InternshipList} />
              <PrivateRoute exact path='/MyNotification' component={MyNotification} />

              <Route exact path='/:url' component={Video} />
              {/* <Route exact path='/Meeting' component={Meeting} /> */}
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
