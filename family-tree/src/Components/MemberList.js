import React from 'react';
import Member from './Member'


export default class MemberList extends React.Component {

    oneMember = () => {
        return this.props.members.map(member => <Member setCurrenMember={this.props.setCurrenMember}key={member.id} member={member}/>)
    }

      render() {
        return (
            <>
                <div >Select which member are you!</div>
               {this.oneMember()}
            </>
        )
    }
}