import React from 'react';
import { BrowserRouter} from 'react-router-dom'

import { Card, Image, Icon } from "semantic-ui-react"
export default class Member extends React.Component {
    
    //  abc = () => {
    //     this.props.setCurrenMember(this.props.member);
    //     this.props.history.push('./family')
    // }
    render() {
    
        console.log(this.props.member)
        return (
            <React.Fragment>
                <Card color="red" onClick={(e) => {return this.props.setCurrenMember ? this.props.setCurrenMember(this.props.member) : null}}>
           
                    <Image src={ this.props.member.picture} />

                    <Card.Content>
                        <Card.Header>
                            {this.props.memberStatus ? this.props.memberStatus : null}
                            <div>Name: {this.props.member.first_name}</div>
                        {this.props.member.last_name}
                        {this.props.member.middle_name}
                        </Card.Header>
                        Age: {this.props.member.age}
                    </Card.Content>
                   
                </Card>
            </React.Fragment>
           
        )
    }
}