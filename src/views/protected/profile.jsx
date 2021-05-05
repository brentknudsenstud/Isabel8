import React, {Component} from 'react';
import {Form, Button, Checkbox} from 'semantic-ui-react'; 

export default function Profile() {
        return (
            <div>
                <h1>Profile</h1>
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input name='firstName' placeholder='first name' value='first name'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input name='lastName' placeholder='last name' value='last name'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input name='email' type='email' placeholder='email' value='email'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Phone</label>
                        <input name='phone' type='phone' placeholder='8005551234' value='phone'/>
                    </Form.Field>
                    <Form.Field>
                        <label>How big of a fan are you of Isabel 8?</label>
                        <input name='phone' type='phone' placeholder='8005551234' value='phone'/>
                    </Form.Field>
                    <Button type='submit'>Save User</Button>
                </Form>
            </div>
        );
    }


