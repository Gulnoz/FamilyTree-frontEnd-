import React from 'react';

export default class Member extends React.Component {
    render() {
        //console.log(this.props.member.name)
        return (
            <>
                <h2>{this.props.memberStatus}</h2>
                <img src={this.props.member.picture} alt=''/> 
                <div> {this.props.member.name}</div>
                <div> {this.props.member.age}</div>
           
            </>
        )
    }
}