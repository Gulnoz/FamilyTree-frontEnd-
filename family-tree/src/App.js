import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './Components/MenuBar'
import NotFound from './Components/NotFound'
import MainPage from './Components/MainPage'
import Login from './Components/Login'
import Home from './Components/Home'
import FamilyList from './Components/FamilyList'
import MessageList from './Components/MessageList'
import { Redirect,Route, Switch, withRouter } from 'react-router-dom';


class App extends React.Component {
 state={
   members: [],
   families: [],
   messages: [],
   currentFamily: null,
   currentMember: null,
   familyMembers: [],
   showForm: false,
   userLogedIn: true
  
 }
addMessages=(message)=>{
console.log(message)
this.setState({
  messages: [...this.state.messages, message]
})
}
deleteMessage=(message)=>{
  let newArr = this.state.messages.filter((el)=> el.id!==message.id)
  this.setState({
    messages: newArr
  })
  fetch(`http://localhost:3000/message/${message.id}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
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
  
    fetch('http://localhost:3000/member')
      .then(res => res.json())
      .then((memberObjs)=>{this.setState({
        members: memberObjs
      })})
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
 
  setCurrenMember=(member)=>{
    console.log(member)
    this.setState({
      currentMember: member
    })
     
    }

  logedIn=()=>{
    this.setState({
      userLogedIn: true
    })
  }
  logOut = () => {
    console.log("logedOut")
    this.setState({
      userLogedIn: false
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
          messages: familyObj.messages,
          
        })
      }

      )


  }
  editMessageHendler=(message)=>{
   let newArr=this.state.messages.map((el)=>{return el.id===message.id ? message : el })
   this.setState({
     messages: newArr
   })
  }
  familyListHendler=()=>{
    // this.setState({
    //  currenFamily: null
    // })
    
    return <FamilyList  currentMember={this.state.currentMember}addFamily={this.addFamily} currentFamily={this.state.currentFamily} families={this.state.families} familyMembers={this.state.familyMembers} setFamilyMembers={this.setFamilyMembers} addFamilyMember={this.addFamilyMember} />
   }
 render(){
   console.log(this.state.messages)
  return (
    <div className="App">
      <span className="sidebar">
        <MenuBar logOut={this.logOut}setCurrentFamilyToNull={this.setCurrentFamilyToNull}/>
      </span>
       <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact render={() => {return this.state.currentMember ? <Redirect to='/family'/> : <Home members={this.state.members}userLogedIn={this.state.userLogedIn}setCurrenMember={this.setCurrenMember}currentMember={this.state.currentMember}/>}} />
        <Route path="/main" exact component={MainPage} />
        <Route path="/message" exact render={() => { return this.state.currentMember ? <MessageList currentMember={this.state.currentMember} deleteMessage={this.deleteMessage} addMessages={this.addMessages} editMessageHendler={this.editMessageHendler}  currentFamily={this.state.currentFamily} messages={this.state.messages}/>  : null}} />
        <Route path="/family" exact render={this.familyListHendler}/>
        <Route path="/logIn" exact component={Login} />
       
        <Route component={NotFound} />
      </Switch>
    </div>
 );
}
}

export default withRouter(App)

