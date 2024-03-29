import React from 'react';
import { Card, Image, Button, Icon, Label } from "semantic-ui-react"
export default class Message extends React.Component {

    
    likeOnClickHendler=()=>{
        this.props.likeHendler(this.props.message)
         this.setState({
             likes: this.state.likes+1
         })
    }
   state={
       likes: this.props.message.likes
   }
    
    render() {
        
        console.log(this.props.message)
        
        return (
            <React.Fragment>
                <Card color="red" >
                   
                    {/* onClick={(e) => { console.log(this.props) }} */}
                    <Card.Content>
                        <Card.Header>
                <div>{this.props.message.member.first_name}: {this.props.message.content}</div>
                        </Card.Header>
                       
                    </Card.Content>
                    <Image src={this.props.message.picture} />
                     <div> 
                        <Button as='div' size='mini' labelPosition='right' onClick={this.likeOnClickHendler}>
                            <Button color='red' size='mini' >
                            <Icon name='heart' />
                            Like
                           </Button>
                           <Label as='a' basic color='red' pointing='left'>
                                {this.state.likes ? this.state.likes : 0}
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