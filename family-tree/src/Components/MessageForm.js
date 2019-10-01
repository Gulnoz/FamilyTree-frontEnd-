import React from "react"
import { Button, Form, Segment } from "semantic-ui-react"

const MessageForm = (props) => {
    return (
        <Segment color="blue" >
           
            <Form onSubmit={(e) => { props.onClickHendler(e) }} className='messageForm'>

                <Form.Field>
                    <label>Content:</label>
                    <input name="content" placeholder="content" value={props.content} onChange={props.changeHendler} />

                </Form.Field>

                <Form.Field>
                    <label>Image:</label>
                    <input name="picture" placeholder="link" value={props.picture} onChange={props.changeHendler} />
                </Form.Field>

                <Button positive type='submit'>Submit</Button>

            </Form>
        </Segment>
    )
}


export default MessageForm