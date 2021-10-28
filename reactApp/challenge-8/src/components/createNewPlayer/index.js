
import {Form,Button,Container} from 'react-bootstrap'
import './index.css'
import { useState } from "react";
import TablePlayer from './list';
import e from 'cors';


const CreateNewPlayer = ()=>{
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [submitData, setSubmitData] = useState({
        username:'',
        email:'',
        password:'',
        confirm:''
    })

const handleSubmit = (e) =>{
    // untuk prevent behaviour default dari formakan reload ketika submit
    e.preventDefault()
    const isPasswordMatch = password === confirmpassword
    console.log('Username :',username)
    console.log('Email :',email)
    console.log('Confirm Password :',password)
    console.log('Match Status :',isPasswordMatch)
    setSubmitData({
        username:username,
        email:email,
        password:password,
        confirm:confirmpassword
    })
}
const handleUsername = (data) => {
    setUsername(data.target.value)
}

const handleEmail = (data) => {
    setEmail(data.target.value)
}

const handlePassword = (data) => {
    setPassword(data.target.value)
}

const handleConfirmPassword = (data) => {
    setConfirmPassword(data.target.value)
}


    return <Form className="register" onSubmit={this.handleSubmit}>
    <h1>Seteam Register</h1>
    <h6>Create Your Account First!</h6>
    <Form.Group className="mb-3" controlId="username">
    <Form.Label >Username</Form.Label>
    <Form.Control onChange={handleUsername} type="text" placeholder="Enter Username" required/>
    <Form.Text value={username}  >   
    </Form.Text>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="email">
    <Form.Label >Email address</Form.Label>
    <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" required />
    <Form.Text value={email}  >
    </Form.Text>
    </Form.Group>
    
    <Form.Group  className="mb-3" controlId="password">
    <Form.Label >Password</Form.Label>
    <Form.Control onChange={handlePassword} type="password" placeholder="Password" required />
    </Form.Group>
    <Form.Text value={password} >
    </Form.Text>
    
    <Form.Group  className="mb-3" controlId="confirmpassword">
    <Form.Label >Confirm Password</Form.Label>
    <Form.Control onChange={handleConfirmPassword}  type="password" placeholder="Confirm Password" required/>
    <Form.Text value={confirmpassword} >
    </Form.Text>
    </Form.Group>
  
   
    <Button onClick={handleSubmit} variant="contained" type="submit" >
    Submit
    </Button>
    <br/><br/>
    <Container>
        <div>{`Username : ${submitData.username}`}</div>
        <div>{`Email :${submitData.email}`}</div>
        <div>{`Password :${submitData.password}`}</div>
        <div>{`Confirm :${submitData.confirm}`}</div>
          <TablePlayer/>
    </Container>
    </Form>
}


export default CreateNewPlayer;