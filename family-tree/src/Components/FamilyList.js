import React from 'react';
import Family from './Family'
import FamilyMemberList from './FamilyMemberList'
import CreateFamilyForm from './CreateFamilyForm'

export default class FamilyList extends React.Component {
   state={
       showForm: false,
       familyName: '',
       familyPicture: '',
       
      
   }
    changeHendler = (event) => {
        this.setState({
            [event.target.name]: `${event.target.value}`
        })
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
            .then((family) => {
                this.props.addFamily(family)
                this.setState({
                    showForm: false
                })
            })
    }
    // setCurrentFamily = (family) => {
    //     this.setState({
    //         currentFamily: family
    //     })
    // }
    familyHendler=()=>{
        return this.props.families.map(family => <Family key={family.id} family={family} setFamilyMembers={this.props.setFamilyMembers}/>)
   }
    
    
    setMembers = (members) => {
        this.setState({
            members: members
        })
    }

    render() {
        document.body.style.height = "auto";
        document.body.style.backgroundColor = "rgba(0,0,0,.4)";
        document.body.style.color='white'
        return (
            <>
            <h2>Family list:</h2>
                {this.props.currentFamily
                    ?
                    <FamilyMemberList addFamilyMember={this.props.addFamilyMember} setFamilyMembers={this.props.setFamilyMembers} currentFamily={this.props.currentFamily} members={this.props.familyMembers} />
                    :
                    <>
                        <button onClick={() => { this.setState({ showForm: !this.state.showForm }) }}>Create new family!</button>
                        {this.state.showForm
                            ?
                            <CreateFamilyForm name={this.state.name} password={this.state.password} changeHendler={this.changeHendler} onClickHendler={this.createFamily} />
                            : null}
                            {this.familyHendler()}
                        </>}
               {/* {this.familyHendler()} */}
            </>
        )
    }
}