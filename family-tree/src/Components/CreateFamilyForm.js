import React from "react"
import { Button, Form, Segment } from "semantic-ui-react"

const CreateFamilyForm = (props) => {
    return (
        <Segment compact color="blue">
            <Form onSubmit={(e) => { props.onClickHendler(e) }}>

                <Form.Field>
                    <label>Family Name:</label>
                    <input name="familyName" placeholder="name" value={props.familyName} onChange={props.changeHendler} />

                </Form.Field>

                <Form.Field>
                    <label>Picture</label>
                    <input name="familyPicture" placeholder="link" value={props.familyPicture} onChange={props.changeHendler} />
                </Form.Field>

                <Button type='submit'>Submit</Button>

            </Form>
        </Segment>
    )
}


export default CreateFamilyForm