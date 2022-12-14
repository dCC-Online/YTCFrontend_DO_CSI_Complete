
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../../App.css"
import { URL_HOST } from "../../urlHost";

const PostReply = (props) => {
    const [reply, setReply] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let postComment = {
            "text": reply,
        }
        let response2 = await axios.post(`${URL_HOST}/api/comments/${props.commentId}/replies/`, postComment, { headers: { Authorization: "Bearer " + localStorage.getItem('token') } });
        props.rerender()
    }

    return (
        <Container className='Header-Gradient'>
            {!localStorage.getItem('token') ? <div className="Name-Box">You must sign in or register to post replies</div> :
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <label className='Name-Box' >Reply: </label>
                            <Form.Control style={{backgroundColor: "black",color: "white"}} as="textarea" onChange={(e) => setReply(e.target.value)}></Form.Control>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">Post</Button>
                </form>
            }
        </Container>
    )
}

export default PostReply;