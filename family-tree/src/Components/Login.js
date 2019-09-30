import React from "react"
import { Button, Form, Segment } from "semantic-ui-react"

const LoginForm = (props) => {
    return (
        <Segment compact color="blue">
            <Form onSubmit={(e)=>{props.onClickHendler(e)}}>

                <Form.Field>
                    <label>Username</label>
                    <input name="name" placeholder="Username" value={props.name} onChange={props.changeHendler}/>
               
                </Form.Field>

                <Form.Field>
                    <label>Password</label>
                    <input name="password" type="password" placeholder="Password" value={props.password} onChange={props.changeHendler}/>
                </Form.Field>

                <Button type='submit'>Sign Up</Button>

            </Form>
        </Segment>
    )
}


export default LoginForm