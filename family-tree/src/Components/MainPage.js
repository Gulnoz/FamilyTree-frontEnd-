import React from 'react';
import MemberList from './MemberList'
import FamilyList from './FamilyList'
import FamilyMemberList from './FamilyMemberList'
import CreateFamilyForm from './CreateFamilyForm'
export default class MainPage extends React.Component {
   
   
    state={
        members: [],
        families: [],
        messages: [],
        currentMember: 10,
        currentFamily: null,
        showForm: false,
        familyName: '',
        familyPicture: '',
        familyMembers: []
    }
   componentDidMount(){

       fetch('http://localhost:3000/member')
           .then(res=>res.json())
           .then(this.setMembers)

       fetch('http://localhost:3000/family')
           .then(res => res.json())
           .then(this.setFamilies)


       fetch('http://localhost:3000/message')
           .then(res => res.json())
           .then(this.setMessages)
   }
    createFamily = (event) => {
        event.preventDefault()
        console.log(this.state)
        fetch('http://localhost:3000/family', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.familyName,
                picture: this.state.familyPicture
            })
        }

        )
            .then(res => res.json())
            .then((family)=>{
                this.setState({
                    families: [family, ...this.state.families],
                    showForm: false
                })
            })
    }
    setFamilyMembers=(family)=>{
        const id=family.id
        console.log(id)
        fetch(`http://localhost:3000/family/${id}`)
        .then(res=>res.json())
        .then(familyObj=>{this.setState({
            familyMembers: familyObj.family_members,
            currentFamily: familyObj
        })}
            
        )

       
    }
    addFamilyMember=(member)=>{
        this.setState({
            familyMembers: [member, ...this.state.familyMembers]
        })
    }
   setMembers=(members)=>{
       this.setState({
           members: members
       })
   }

    setFamilies = (families) => {
        this.setState({
            families: families
        })
    }

    setMessages = (messages) => {
        this.setState({
            messages: messages
        })
    }
 
    setCurrentMember = (member) => {
        this.setState({
            currentMember: member
        })
    }

    setCurrenFamily=(family)=>{
        this.setState({
            currenFamily: family
        })
    }
    changeHendler = (event) => {
        this.setState({
            [event.target.name]: `${event.target.value}`
        })
    }
    render() {
        document.body.style.height = "auto";
        document.body.style.backgroundColor = "rgba(0,0,0,.4)";
        return (
            < div class='main-div'>
               {this.state.currentFamily
                ?
                    <FamilyMemberList addFamilyMember={this.addFamilyMember} currentFamily={this.state.currentFamily} members={this.state.familyMembers} />
                :
                <>
                 <button onClick={()=>{this.setState({showForm: !this.state.showForm})}}>Create new family!</button>
                  {this.state.showForm
                  ?
                 <CreateFamilyForm name={this.state.name} password={this.state.password} changeHendler={this.changeHendler} onClickHendler={this.createFamily}/>
                 : null}
                        <FamilyList families={this.state.families} setCurrentFamily={this.setFamilyMembers}/>
                </>
               }
            </div>
        )
    }
}