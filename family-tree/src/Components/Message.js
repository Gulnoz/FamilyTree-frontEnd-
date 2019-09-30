import React from 'react';

export default class Message extends React.Component {
    render() {
        console.log(this.props)
        return (
            <>    <div>Content:</div>
                <div>{this.props.message.content}</div>
                  <img src={this.props.message.picture} alt='' />
            </>
        )
    }
}