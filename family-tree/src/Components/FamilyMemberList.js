import React from 'react';
import Member from './Member'
import CreateMember from './CreatMember'

export default class FamilyMemberList extends React.Component {
   state={
       showForm: false,
       firstName: '',
       lastName: '',
       middleName: '',
       age: null,
       birthDate: '',
       picture: '',
       status: '',
       newMember: null
   }

    changeHendler=(e)=>{
       e.preventDefault()
    this.setState({
        [e.target.name]: e.target.value
    })
   }

    clickHendler = (event) => {
        event.preventDefault()
        console.log(this.state)
        fetch('http://localhost:3000/member', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                first_name: this.state.firstName,
                middle_name: this.state.lastName,
                last_name: this.state.middleName,
                age: this.state.age,
                birth_date: this.state.birthDate,
                picture: this.state.picture
              }) })
            .then(res => res.json())
            .then((member) => {


                fetch('http://localhost:3000/family_member', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        status: this.state.status,
                        family_id: this.props.currentFamily.id,
                        member_id: member.id
                        
                    })
                })
                .then(res=>res.json())
                .then((familyMember)=>{
                    this.setState({
                        newMember: member,
                        showForm: false
                    })
                    this.props.addFamilyMember({
                        
                        status: this.state.status,
                        member: member
                    })
                })
             })
    }

    

   
    oneMember = () => {
        console.log(this.props.members[0])
        return this.props.members.map(member => <Member key = {member.id} memberStatus={member.status} member={member.member} />)
    }

    render() {
        return (
            <>
            <p>{this.state.newMember
                ?
                    <span>{this.state.newMember.first_name} was added!</span>
                : null
                }</p>
            <button onClick={() => { this.setState({ showForm: !this.state.showForm }) }}>Add new member!</button>
                {
                this.state.showForm
                 ?
                        <CreateMember onClickHendler={this.clickHendler} changeHendler={this.changeHendler} formValues={this.state}/>
                 : null
                 }
                <h2>Member list:</h2>
                {this.oneMember()}
            </>
        )
    }
}