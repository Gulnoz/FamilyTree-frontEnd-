import React from 'react';



export default class NotFound extends React.Component {

    render() {
        document.body.style.height = "auto";
        document.body.style.backgroundColor = "rgba(0,0,0,.4)";
        document.body.style.color = 'white'
        return (
            <div>
               Not Found!!!
            </div>
        )
    }
}