
import {Form,Button,Container} from 'react-bootstrap'
import './index.css'
import { useState } from "react";
const LoginPlayer = ()=>{
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [submitData, setSubmitData] = useState({
        username:'',
        email:'',
        password:'',
        confirm:''
    })

const handleSubmit = () =>{
    const isPasswordMatch = password === confirmpassword
  
    console.log('Email :',email)
    console.log('Confirm Password :',password)
    console.log('Match Status :',isPasswordMatch)
    setSubmitData({
        email:email,
        password:password,
        confirm:confirmpassword
    })
}

const handleEmail = (data) => {
    setEmail(data.target.value)
}

const handlePassword = (data) => {
    setPassword(data.target.value)
}



    return <Form className="register">
    <h1>Seteam Login</h1>
    <h6>Please Login First! </h6>
 
    
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
    

  
   
    <Button onClick={handleSubmit} variant="contained" type="submit" >
    Submit
    </Button>
    <br/><br/>
    <Container>
        <div>{`Email :${submitData.email}`}</div>
        <div>{`Password :${submitData.password}`}</div>
          
    </Container>
    </Form>
}


export default LoginPlayer;