import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';


const HeadElement = (props) => {


    const logout = () => {
        props.router("Home");
        localStorage.removeItem("token");
    }
    return (
        <Container style={{ backgroundColor: "black" }} fluid={true}>
            <Row>
                <Col onClick={() => { props.home(false); props.router("Home") }} 
                     style={{ margin: '50px', cursor: "pointer" }} 
                     className="Header-Gradient rounded" 
                     xs md lg={2}>
                    <h2>React YouTube Project!</h2>
                </Col>
                <Col xs md lg={5}></Col>
                <Col style={{ margin: '50px' }} className="Header-Gradient rounded" xs={2}>
                    <Row>
                        {!localStorage.getItem("token") ?
                            <>
                                <Col xs md lg={5}><a style={{ cursor: 'pointer' }} onClick={() => props.router("Register")}>Register</a></Col>
                                <Col xs md lg={5}><a style={{ cursor: 'pointer' }} onClick={() => props.router("Login")}>Login</a></Col>
                            </> :
                            <Col><a style={{ cursor: 'pointer' }} onClick={logout}>Logout</a></Col>
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default HeadElement;