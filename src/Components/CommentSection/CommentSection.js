import React, { useEffect, useState } from 'react';
import '../../App.css';
import thumbsUp from '../../Images/like.png';
import Comment from "./Comment"
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import PostComment from './PostComment';


const CommentSection = (props) => {
    const [videoComments, setComments] = useState([])
    const getComments = async () => {
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/${props.videoId}/`)
        setComments(response.data)

    }
    const likeComment = async (comment) => {
        let userJWT = localStorage.getItem("token")
        if (userJWT != undefined) {
            comment.likes++;
            let response = await axios.put(`http://127.0.0.1:8000/api/comments/${comment.id}/update/`, comment, { headers: { Authorization: "Bearer " + userJWT } })
            getComments()
        }
        else {
            console.log("Not logged in");
        }

    }
    const dislikeComment = async (comment) => {
        let userJWT = localStorage.getItem("token")
        if (userJWT != undefined) {
            comment.dislikes++;
            let response = await axios.put(`http://127.0.0.1:8000/api/comments/${comment.id}/update/`, comment, { headers: { Authorization: "Bearer " + userJWT } })
            getComments()
        }
        else {
            console.log("Not logged in");
        }
    }
    useEffect(() => {
        getComments();
    }, [])
    return (
        <>
            <PostComment video_id={props.videoId}></PostComment>
            <br></br>
            <Container className='Header-Gradient' style={{ marginLeft: '0px' }} >
                {videoComments.map((el) => {
                    return (
                        <Row>
                            <Comment key={el.id} comment={el} />
                            <Col xs={{ span: 3, offset: 1 }}>
                                <img onClick={() => likeComment(el)} style={{ width: '50px', margin: '30px', height: '50px', cursor: "pointer" }} src={thumbsUp}></img>
                                <img onClick={() => dislikeComment(el)} className='Rotateimg180' style={{ width: '50px', margin: '10px', height: '50px', cursor: "pointer" }} src={thumbsUp}></img>
                            </Col>
                        </Row>
                    )
                })}
            </Container>
        </>
    )
}

export default CommentSection;