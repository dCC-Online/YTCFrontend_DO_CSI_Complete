
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// const URL_HOST = process.env.HOST || 'localhost';

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let user = {
            "username": username,
            "password": password,
        }
        let response2 = await axios.post("http://127.0.0.1:8000/api/auth/login/", user);
        console.log("JWT", response2.data.access)
        localStorage.setItem("token", response2.data.access)
        props.router("Home")
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <label>Username:</label>
                        <input onChange={(e) => setUsername(e.target.value)}></input></Col>
                    <Col>
                        <label>Password:</label>
                        <input onChange={(e) => setPassword(e.target.value)}></input>
                    </Col>
                </Row>
                <center><button type="submit">Login</button></center>
            </form>
        </Container>
    )
}


export default Login;