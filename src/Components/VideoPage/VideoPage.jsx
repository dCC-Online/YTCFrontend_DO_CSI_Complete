import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CurrentVideo from "../CurrentVideo";
import VideoList from "../VideoList";
import CommentSection from "../CommentSection/CommentSection";

const VideoPage = (props) => {
    return (
        <>
            <Container name="this" style={{ margin: '50px', maxWidth: '1500px' }} fluid >
                <Row>
                    <Col xs={6}><CurrentVideo video={props.video} /></Col>
                    <Col xs={4}><VideoList handleVideo={props.handleVideo} videoId={props.video.id.videoId} /></Col>
                </Row>
            </Container>
            <Container style={{ margin: '50px' }}>
                <CommentSection videoId ={props.video.id.videoId} />
            </Container>
        </>

    )
}

export default VideoPage;