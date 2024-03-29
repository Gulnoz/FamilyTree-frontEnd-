import React from 'react';
import Login from './Login'
import MainPage from './MainPage'
import MemberList from './MemberList'
import { Route, NavLink, Switch, Link } from 'react-router-dom';
import '../index.css';
export default class Home extends React.Component {
   
    state = {
        name: '',
        password: '',
        currenMember: null
    }

    setCurrentMember = (member) => {
        this.setState({
            currenMember: member
        })
    }
    changeHendler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onClickHendler = (event) => {
        event.preventDefault()
        console.log(this.state)
        fetch('http://localhost:3000/member',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
            name: this.state.name,
            password: this.state.password})}
            
        )
        .then(res=>res.json())
        .then((member)=>{
            this.setState({currenMember: member})
            
        })
    }
   

    render() {
        document.body.style.height = "auto";
        document.body.style.backgroundColor = "rgba(0,0,0,.4)";
        document.body.style.color = "white";
        document.body.style.textAlign ="center";
        return (
            <div class='home-div'>
                {
                    this.props.userLogedIn
                         ?
                        <MemberList members={this.props.members} setCurrenMember={this.props.setCurrenMember}/>
                        : <><h1>Welcome to Family Tree Platform!</h1>
                        <Login name={this.state.name} password={this.state.password} changeHendler={this.changeHendler} onClickHendler={this.onClickHendler} />
                          </>
                }
                {/* <img src="https://stmed.net/sites/default/files/tree-root-wallpapers-28078-5737484.jpg" alt=''/> */}
                
            </div>
        )
    }
}