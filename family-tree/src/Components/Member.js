import React from 'react';
import { BrowserRouter} from 'react-router-dom'

import { Card, Image, Icon } from "semantic-ui-react"
export default class Member extends React.Component {
    
    //  abc = () => {
    //     this.props.setCurrenMember(this.props.member);
    //     this.props.history.push('./family')
    // }
    render() {
       
        //console.log(this.props.member.name)
        return (
            <React.Fragment>
                <Card color="red" onClick={(e) => {this.props.setCurrenMember(this.props.member)}}>
           
                    <Image src={ this.props.member.picture} />

                    <Card.Content>
                        <Card.Header>
                        {this.props.member.first_name}
                        {this.props.member.last_name}
                        </Card.Header>
                        Age: {this.props.member.age}
                    </Card.Content>
                   
                </Card>
            </React.Fragment>
           
        )
    }
}