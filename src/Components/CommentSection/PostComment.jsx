
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../../App.css"
import { URL_HOST } from "../../urlHost";

const PostComment = (props) => {
    const [comment, setCommnet] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let postComment = {
            "video_id": props.video_id,
            "text": comment,
        }
        await axios.post(`${URL_HOST}/api/comments/`, postComment, { headers: { Authorization: "Bearer " + localStorage.getItem('token') } });
        props.getComments()
    }

    return (
        <Container className='Header-Gradient'>
            {!localStorage.getItem('token')
                ? <div className="Name-Box">You must sign in or register to post comments</div>
                : <form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <label className='Name-Box' >Comment: </label>
                            <Form.Control as="textarea" onChange={(e) => setCommnet(e.target.value)}></Form.Control>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">Post</Button>
                </form>
            }
        </Container>
    )
}

export default PostComment;