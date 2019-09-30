import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './Components/MenuBar'
import NotFound from './Components/NotFound'
import MainPage from './Components/MainPage'
import Member from './Components/Member'
import Home from './Components/Home'
import FamilyList from './Components/FamilyList'
import MessageList from './Components/MessageList'
import { Route, Switch } from 'react-router-dom';


export default class App extends React.Component {
 state={
   members: [],
   families: [],
   messages: [],
   currentFamily: null,
   currentMember: 35,
   familyMembers: [],
   showForm: false,
  
 }
addMessages=(message)=>{
console.log(message)
this.setState({
  messages: [...this.state.messages, message]
})
}
setCurrentFamilyToNull=()=>{
  this.setState({
    currentFamily: null
  })
}
  componentDidMount() {

    fetch('http://localhost:3000/family')
      .then(res => res.json())
      .then(this.setFamilies)
  }
  setFamilies = (families) => {
    this.setState({
      families: families
    })
  }
  
  addFamily=(family)=>{
    this.setState({
          families: [family, ...this.state.families],
         })
  }
  
  addFamilyMember = (member) => {
    this.setState({
      familyMembers: [member, ...this.state.familyMembers]
    })
  }
 
  setFamilyMembers = (family) => {
    const id = family.id
    console.log(id)
    fetch(`http://localhost:3000/family/${id}`)
      .then(res => res.json())
      .then(familyObj => {
        this.setState({
          familyMembers: familyObj.family_members,
          currentFamily: familyObj,
          messages: familyObj.messages
        })
      }

      )


  }

  familyListHendler=()=>{
    // this.setState({
    //  currenFamily: null
    // })
    
    return <FamilyList addFamily={this.addFamily} currentFamily={this.state.currentFamily} families={this.state.families} familyMembers={this.state.familyMembers} setFamilyMembers={this.setFamilyMembers} addFamilyMember={this.addFamilyMember} />
   }
 render(){
   console.log(this.state.messages)
  return (
    <div className="App">
      <span className="sidebar">
        <MenuBar setCurrentFamilyToNull={this.setCurrentFamilyToNull}/>
      </span>
       <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/main" exact component={MainPage} />
        <Route path="/message" exact render={() => <MessageList addMessages={this.addMessages} currentMember={this.state.currentMember} currentFamily={this.state.currentFamily} messages={this.state.messages}/> } />
        <Route path="/family" exact render={this.familyListHendler}/>
        <Route component={NotFound} />
      </Switch>
    </div>
 );
}
}

