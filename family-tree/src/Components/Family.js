import React from 'react';
import { Card, Image, Icon } from "semantic-ui-react"
export default class Family extends React.Component {
    render() {
        console.log(this.props.family.name)
        return (
            <React.Fragment>
                <Card color="red" onClick={(e) => { this.props.setFamilyMembers(this.props.family)}}>
                    <Image src={this.props.family.picture} />
                   
                    <Card.Content>
                        <Card.Header>
                         {this.props.family.name}
                            </Card.Header>
                    </Card.Content>
                   
                </Card>
            </React.Fragment>
           

            
        )
    }
}