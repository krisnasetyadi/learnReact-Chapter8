
import {Form,Button,Container,InputGroup,FormControl} from 'react-bootstrap'
import './index.css'
import { useState } from "react";
const EditProfile = ()=>{
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


    return <Form className="editPlayer">
        <br/><br/><br/>
    <h1>Edit player</h1>
    <h6></h6>
    <>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1" value={username}>Username</InputGroup.Text>
    <FormControl
      onChange={handleUsername}
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
    onChange={handleEmail}
      type="email"
      placeholder="Email"
      aria-label="email"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2" value={email}>@gmail.com</InputGroup.Text>
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text>Status Messages</InputGroup.Text>
    <FormControl />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text value={level}>Level</InputGroup.Text>
    <FormControl onChange={handleLevel} />
  </InputGroup>
  <InputGroup className="mb-3" type="number">
    <InputGroup.Text value={experience}>Experience</InputGroup.Text>
    <FormControl  onChange={handleExperience}/>
  </InputGroup>
</>
  
   
     <Button onClick={handleSubmit} variant="contained" type="submit" >
    Update
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


export default EditProfile;