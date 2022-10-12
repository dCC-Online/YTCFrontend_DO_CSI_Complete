import React, { useEffect, useState } from 'react';
import '../../App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import PostReply from './PostReply';
import { URL_HOST } from '../../urlHost';

const Comment =(props)=>{
    const [replies, setReplies] = useState([]);
    const [replyBox, setReplyBox] = useState(false);
    const [triggerReplies, setTriggerReplies] = useState(false)
    const getReplies = async() =>{
        let response = await axios.get(`${URL_HOST}/api/comments/${props.comment.id}/replies/`, {headers:{Authorization: "Bearer " +localStorage.getItem("token")}});
        console.log(response.data)
        setReplies(response.data);
    }
    const rerender = ()=>{
        setTriggerReplies(!triggerReplies)
    }
    useEffect(()=>{
        getReplies();
    },[triggerReplies])
    return(
        <Container style={{maxWidth:"700px", margin:'10px',padding:'5px', borderBottom: '5px dotted #2eb9ce'}}>
            <Row>
                <Col className='Name-Box'>
                    User Name : {props.comment.user.username}
                </Col>
            </Row>
            <Row>
                <Col className='Comment-Text'>
                    {props.comment.text}
                </Col>
            </Row>
            <Row>
                <Col className='Comment-Text'>
                    Likes: {props.comment.likes}
                </Col>
                <Col className='Comment-Text'>
                    Dislikes: {props.comment.dislikes}
                </Col>
                <Col><Button onClick={()=> setReplyBox(!replyBox)}>{!replyBox? "Reply" : "Close"}</Button></Col>
            </Row>
            <Row></Row>
            {replyBox ? 
            <PostReply rerender={rerender} getComments={props.getComments} commentId={props.comment.id}></PostReply>: null
            }
           
            <Container>
                <Row><Col className='Name-Box'>Replies:</Col></Row>
                {replies.map((el, i) =>{
                    return <Row className='Comment-Text' key = {i}><Col>{el.user.username}: {el.text}</Col></Row>
                })}
               
            </Container>
        </Container>
    )
}

export default Comment;