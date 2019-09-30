import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './Components/MenuBar'
import NotFound from './Components/NotFound'
import MainPage from './Components/MainPage'
import Member from './Components/Member'
import Home from './Components/Home'
import { Route, Switch } from 'react-router-dom';


export default class App extends React.Component {
 
 render(){
  return (
    <div className="App">
      <span className="sidebar">
        <MenuBar/>
      </span>
       <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/main" exact component={MainPage} />
        <Route path="/family" exact component={MainPage} />
        
        <Route component={NotFound} />
      </Switch>
    </div>
 );
}
}

