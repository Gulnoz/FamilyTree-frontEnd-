import React from 'react';
import { Card, Image, Button, Icon, Label } from "semantic-ui-react"
export default class Message extends React.Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <Card color="red" onClick={(e) => {console.log(this.props) }}>
                   
                    
                    <Card.Content>
                        <Card.Header>
                            {this.props.message.member.first_name}
                        </Card.Header>
                        {this.props.message.content}
                    </Card.Content>
                    <Image src={this.props.message.picture} />
                     <div> 
                        <Button as='div' size='mini' labelPosition='right'>
                        <Button color='red' size='mini'>
                            <Icon name='heart' />
                            Like
                           </Button>
                           <Label as='a' basic color='red' pointing='left'>
                            0
                           </Label>
                       </Button>
                        <Button positive size='mini' onClick={() => { this.props.editOnClickHendler(this.props.message)}}>Edit</Button>
                        <Button negative size='mini' onClick={()=>{this.props.deleteMessage(this.props.message)}}>Delete</Button>
                     </div>
                </Card>
                
            </React.Fragment>
           
        )
    }
}