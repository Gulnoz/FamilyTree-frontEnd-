import React from 'react';
import { Button, Form, Segment } from "semantic-ui-react"
export default class CreateMember extends React.Component {
    render() {
        return (
            <Segment compact color="blue">
                <Form onSubmit={(e) => { this.props.onClickHendler(e) }}>
                    
                    <Form.Field>
                        <label>Status:</label>
                        <input name="status" placeholder="(ex: mom, dad, son etc.)" value={this.props.formValues.status} onChange={this.props.changeHendler} />

                    </Form.Field>

                    <Form.Field>
                        <label>First Name:</label>
                        <input name="firstName" placeholder="first name" value={this.props.formValues.firstName} onChange={this.props.changeHendler} />

                    </Form.Field>
                    
                    <Form.Field>
                        <label>Middle Name:</label>
                        <input name="middleName" placeholder="middle name" value={this.props.formValues.middleName} onChange={this.props.changeHendler} />

                    </Form.Field>

                    <Form.Field>
                        <label>Last Name:</label>
                        <input name="lastName" placeholder="last name" value={this.props.formValues.lastName} onChange={this.props.changeHendler} />

                    </Form.Field>

                    <Form.Field>
                        <label>Age:</label>
                        <input name="age" placeholder="(ex: 17)" value={this.props.formValues.age} onChange={this.props.changeHendler} />

                    </Form.Field>

                    <Form.Field>
                        <label>Birth Date:</label>
                        <input name="birthDate" placeholder="(ex: MM/DD/YYYY)" value={this.props.formValues.birthDate} onChange={this.props.changeHendler} />

                    </Form.Field>
                    <Form.Field>
                        <label>Picture</label>
                        <input name="picture" placeholder="link" value={this.props.formValues.picture} onChange={this.props.changeHendler} />
                    </Form.Field>

                    <Button type='submit'>Submit</Button>

                </Form>
            </Segment>
        )
    }
}