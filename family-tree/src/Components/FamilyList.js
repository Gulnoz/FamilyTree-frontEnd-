import React from 'react';
import Family from './Family'

export default class FamilyList extends React.Component {
   familyHendler=()=>{
       return this.props.families.map(family => <Family key={family.id} family={family} setCurrentFamily={this.props.setCurrentFamily}/>)
   }
   
    render() {
        return (
            <>
            <h2>Family list:</h2>
            {this.familyHendler()}
            </>
        )
    }
}