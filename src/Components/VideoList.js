import React, { useEffect, useState } from 'react';
import axios from 'axios';
import APIKey from '../APIKey';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';

const VideoList = (props) =>{
    const [relatedVideos, setRelatedVideos] = useState([]);
    const getRelatedVideos = async () =>{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${props.videoId}&type=video&key=${APIKey}`)
        console.log(response.data.items)
        setRelatedVideos(response.data.items)
    }

    useEffect(()=>{
        getRelatedVideos();
    },[props.videoId])
    return(
        <Container>
                {(relatedVideos.map((el,i)=>{
                    if(el.snippet !== undefined){
                    return(
                        <Row key={i} className="Hover-Cursor Header-Gradient" onClick={()=>props.handleVideo(el)}>
                            <Col style={{fontSize : '20px', backgroundColor:'black'}}>{el.snippet.title}</Col>
                            <img src={el.snippet.thumbnails.default.url} style={{width: "140px"}} ></img>
                        </Row>
                    );
                    }
                }))}
        </Container>
    )
}
export default VideoList;