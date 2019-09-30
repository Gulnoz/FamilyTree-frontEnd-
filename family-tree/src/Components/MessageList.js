import React from 'react';
import Message from './Message'
import MessageForm from './MessageForm'
export default class FamilyList extends React.Component {
    state = {
        showForm: false,
        content: '',
        picture: '',
        newMessage: '',
       
    }


    messageHendler = () => {
        console.log(this.props.messages)
        return this.props.messages.map(message => <Message key={message.id} message={message}/>)
    }
    changeHendler = (event) => {
        this.setState({
            [event.target.name]: `${event.target.value}`
        })
    }
    newMessage = (event) => {
        event.preventDefault()
        console.log(this.state)
        fetch('http://localhost:3000/message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: this.state.content,
                picture: this.state.picture,
                member_id: this.props.currentMember,
                family_id: this.props.currentFamily.id
            })
        }

        )
            .then(res => res.json())
            .then((message) => {
                this.props.addMessages(message)
                this.setState({
                    content: '',
                    picture: '',
                   
                    newMessage: message
                })
            })
    }
    
    render() {
        document.body.style.height = "auto";
        document.body.style.backgroundColor = "rgba(0,0,0,.4)";
        document.body.style.color = 'white'
        return (
            <>
                <h2>Messages:</h2>
                {this.messageHendler()}
              
                    {this.props.currentFamily
                        ?
                    <MessageForm content={this.state.content} picture={this.state.picture} changeHendler={this.changeHendler} onClickHendler={this.newMessage} />
                        : null}
                
            
               </> 
                )}
}