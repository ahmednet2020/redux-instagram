import React, { Component } from 'react';
//react-router-dom components
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
//components layout
import Main from './components/main';
import Photogrid from './components/photogrid';
import Single from './components/single';
//store
import { Provider } from 'react-redux';
import store from './store';
//import { connect } from 'react-redux';

//Router app pages content view
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      	<Router>
      	    <Switch>
    	    		<Route path="/" exact render={({match}) => <Main match={match}><Photogrid/></Main>} />
    	    		<Route path="/view" exact render={() => <Redirect to="/" />} />
    	    		<Route path="/view/:photoid" exact render={({match}) => <Main match={match}><Single/></Main>} />
      		</Switch>
      	</Router>
      </Provider>
    );
  }
}
