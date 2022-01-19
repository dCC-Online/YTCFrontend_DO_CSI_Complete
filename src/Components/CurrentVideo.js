import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';


const CurrentVideo = (props) =>{
    return(
        <Container>
            <Row>
                  <iframe className="Header-Gradient" style={{width:660, height: 415}} src={`https://www.youtube.com/embed/${props.video.id.videoId}`}></iframe>
            </Row>
            <Row><Col className="Gradient-Box-Shadow">Title:</Col></Row>
            <Row><Col>{props.video.snippet.title}</Col></Row>
            <Row><Col className="Gradient-Box-Shadow">Description:</Col></Row>
            <Row><Col>{props.video.snippet.description}</Col></Row>
           
        </Container>
    );
}
export default CurrentVideo;