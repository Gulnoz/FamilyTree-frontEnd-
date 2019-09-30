import React from 'react';
import Member from './Member'


export default class MemberList extends React.Component {

    oneMember = () => {
        return this.props.members.map(member => <Member key={member.id} member={member}/>)
    }

      render() {
        return (
            <>
                Members:
               {this.oneMember()}
            </>
        )
    }
}