import React from 'react';
import Message from './Message'
import MessageForm from './MessageForm'
export default class MessageList extends React.Component {
    state = {
        showForm: false,
        content: '',
        picture: '',
        currentMessage: '',
        likes: null,
        edit: false
    }

    
    messageHendler = () => {
        console.log(this.props.messages)
        return this.props.messages.map(message => <Message key={message.id} message={message} likes={this.state.likes}likeHendler={this.likeHendler} editOnClickHendler={this.editOnClickHendler}deleteMessage={this.props.deleteMessage}/>)
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
                likes: 0,
                member_id: this.props.currentMember.id,
                family_id: this.props.currentFamily.id
            })})
            .then(res => res.json())
            .then((message) => {
         
                console.log(message)
                this.props.addMessages(message)
                this.setState({
                    content: '',
                    picture: '',
                    
                    // newMessage: message
                })
            })
       
    }
    editOnClickHendler=(message)=>{
        
        this.setState({
        edit: true,
        content: message.content,
        picture: message.picture,
        currentMessage: message
        })
    }

    editMessage=(e)=>{
        e.preventDefault()
       
        const id = this.state.currentMessage.id
        fetch(`http://localhost:3000/message/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: this.state.content,
                picture: this.state.picture
                })
        })
        .then(res=>res.json())
            .then(this.props.editMessageHendler)

        this.setState({
            currentMessage: '',
            edit: false,
            content: '',
            picture: '',
        })
    }
    onClickHendler=(e)=>{
        console.log("onClickHendler")
       return this.state.edit ? this.editMessage(e) : this.newMessage(e)
    }
    likeHendler=(message)=>{
       const id=message.id
       let likes=message.likes+1
        this.setState({
            likes: likes
        })

        fetch(`http://localhost:3000/message/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                likes: likes
               
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
                    <MessageForm content={this.state.content} picture={this.state.picture} changeHendler={this.changeHendler} onClickHendler={this.onClickHendler} />
                        : null}
                
            
               </> 
                )}
}