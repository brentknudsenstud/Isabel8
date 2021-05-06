
import { Form, Button } from 'semantic-ui-react';
import { useState } from 'react';
function ProfileInput(props) {
    const { placeholder, label, name, storageKey } = props
    const [userInput, setUserInput] = useState(window.localStorage.getItem(storageKey) ?? '')
    const onChange = (e) => {
        const newUserInput = e.target.value
        console.log(newUserInput)
        window.localStorage.setItem(storageKey, newUserInput);
        setUserInput(newUserInput)
    }
    return (<Form.Field>
        <label>{label}</label>
        <input onChange={onChange} name={name} placeholder={placeholder} value={userInput} />
    </Form.Field>)
}

export default function Profile() {

    return (
        <div>
            <h1>Profile</h1>
            <Form>
                <ProfileInput name='firstname' placeholder='first name' label='First Name' storageKey='firstname' />
                <ProfileInput name='lastname' placeholder='last name' label='Last Name' storageKey='lastname' />
                <ProfileInput name='email' placeholder='email' label='Email' storageKey='email' />
                <ProfileInput name='phone' placeholder='8015551234' label='Phone' storageKey='phone' />
                <Button type='submit'>Save User</Button>
            </Form>
        </div>
    );
}


