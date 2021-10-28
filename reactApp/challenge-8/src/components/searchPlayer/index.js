
import {Form,Button,Container} from 'react-bootstrap'
import './index.css'
import { useState } from "react";
const SearchPlayer = ()=>{
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [experience, setExperience] = useState('')
    const [level, setLevel] = useState('')
    const [submitData, setSubmitData] = useState({
        username:'',
        email:'',
        experience:'',
        level:''
    })

const handleSubmit = () =>{
    console.log('Username :',username)
    console.log('Email :',email)
    console.log('Experience :',experience)
    console.log('Level :',level)
    setSubmitData({
        username:username,
        email:email,
        experience:experience,
        level:level
    })
}
const handleUsername = (data) => {
    setUsername(data.target.value)
}

const handleEmail = (data) => {
    setEmail(data.target.value)
}

const handleExperience = (data) => {
    setExperience(data.target.value)
}

const handleLevel = (data) => {
    setLevel(data.target.value)
}


    return <Form className="register">
        <br/><br/><br/>
    <h1>Seteam Search Player</h1>
    <h6></h6>
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
    
    <Form.Group className="mb-3" controlId="experience">
    <Form.Label >Experience</Form.Label>
    <Form.Control onChange={handleExperience} type="text" placeholder="Enter Experience" required />
    <Form.Text value={experience}  >
    </Form.Text>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="level">
    <Form.Label >Level</Form.Label>
    <Form.Control onChange={handleLevel} type="number" placeholder="Enter Level" required />
    <Form.Text value={level}  >
    </Form.Text>
    </Form.Group>
  
   
    <Button onClick={handleSubmit} variant="contained" type="submit" >
    Submit
    </Button>
    <br/><br/>
    <Container>
        <div>{`Username : ${submitData.username}`}</div>
        <div>{`Email :${submitData.email}`}</div>
        <div>{`Password :${submitData.experience}`}</div>
        <div>{`Confirm :${submitData.level}`}</div>
          
    </Container>
    </Form>
}


export default SearchPlayer;