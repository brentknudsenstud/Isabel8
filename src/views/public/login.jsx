import {Form, Button} from 'semantic-ui-react';
import {useContext, useState} from 'react'
import {AuthContext} from  '../../index';
import { Redirect} from 'react-router-dom';


export default function Login() {
    const {login, isAuthed} = useContext(AuthContext);
    const [credentials, setCredentials] = useState({});
    
    if (isAuthed) {
        return <Redirect to='/about'/>
    }
    
    const handleSubmit = () => {
        login(credentials);
    }

    const handleChange = ({target: {value,name}}) =>{
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    return (
        <Form style={{width: 400}} onSubmit = {handleSubmit}>
            <Form.Field>
                <label>Email</label>
                <input type='email' onChange={handleChange} name='email'></input>
            </Form.Field>
       
        
        <Form.Field>
            <label>Password</label>
            <input type='password' onChange={handleChange} name='password'></input>
        </Form.Field>
        <Button type="submit">Login</Button>
        </Form>
   
    )
    }