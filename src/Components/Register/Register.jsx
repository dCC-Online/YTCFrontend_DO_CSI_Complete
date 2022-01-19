
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


const Register = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        let user = {
            "username": username,
            "password": password,
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
        }
        let response1 = await axios.post("http://127.0.0.1:8000/api/auth/register/", user);
        console.log(response1)
        let response2 = await axios.post("http://127.0.0.1:8000/api/auth/login/", {"username": username, "password": password});
        console.log("JWT", response2.data.access)
        localStorage.setItem("token", response2.data.access)
        props.router("Home")
    }

    return (
        <Container>
        <form onSubmit={handleSubmit}>
            <Row>
                <Col>  <label>Username:</label>
            <input onChange={(e) => setUsername(e.target.value)}></input></Col>
            <Col><label>Password:</label>
            <input onChange={(e) => setPassword(e.target.value)}></input>
            </Col>
            
            </Row>
            <Row>   <Col> <label>First Name:</label>
            <input onChange={(e) => setFirstName(e.target.value)}></input></Col>
            <Col>   <label>Last Name:</label>
            <input onChange={(e) => setLastName(e.target.value)}></input></Col>
            <Col>      <label>Email:</label>
            <input onChange={(e) => setEmail(e.target.value)}></input></Col>
      </Row>
         
        
            <center><button type="submit">Register</button></center>
        </form>
        </Container>
    )
}


export default Register;