import React from 'react';
import axios from 'axios';
import HeadElement from './HeadElement'
import { Component } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import CurrentVideo from './CurrentVideo';
import VideoList from './VideoList';
import SearchBar from './SearchBar';
import CommentSection from './CommentSection/CommentSection';


class YouTubePage extends Component{
    constructor(props){
        super(props);
        this.state ={
            collection: {},
            testValues: ['hello', 'there', 'kenobe'],
            searchTerm: '',
            currentVidId: "yM_psdd1bT8",
            comments:[{
                YouTubeId: "yM_psdd1bT8",
                UserName: "Me",
                UserComment: "Hello"
            }]
        };
    }
    getComments=()=>{
        axios.get(`https://localhost:44358/api/comments/${this.state.currentVidId}`)
        .then(result=>{
            console.log(result);
        })
    }
    getVideos=()=>{
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.searchTerm}&type=video&key=AIzaSyAx573_FpemBH0d0_8kez-YxzHrxlmofAI`)
        .then(response=>{
            console.log(response);
            this.setState({
                collection : response.data,
                testValues : response.data.items,
            });
        }).catch(err => {
            console.log(err.response)
        });
    }
    searchForVideos = (searchValue)=>{
        this.createQuery(searchValue);
    }
    createQuery = (strValue)=>{
        let q = ''
        for(let i = 0; i< strValue.length; i++){
            if(strValue[i] === " "){
                q += "+";
            }
            else{
                q += strValue[i];
            }
        }
        console.log(q);
        this.setState({
            searchTerm : q
        },this.getVideos);
    }
    changeCurrentVideo=(id)=>{
        this.setState({
            currentVidId: id
        })
    }
    render(){
        return(
            <div>
                <HeadElement></HeadElement>
                <SearchBar search={this.searchForVideos}></SearchBar>
                <Container name="this"style={{margin: '50px', maxWidth:'1500px'}} fluid >
                    <Row>
                        <Col xs={6}><CurrentVideo videoId={this.state.currentVidId}/></Col>
                        <Col xs={4}><VideoList handleVideo={this.changeCurrentVideo} videos={this.state.testValues}/></Col>
                    </Row>
                </Container>
                <Container style={{margin: '50px'}}>
                    <CommentSection comments={this.state.comments}/>
                </Container>
                <Button style={{marginLeft: '50px'}} onClick={this.getComments}>Get Videos</Button>
            </div>
        );
    }
}
export default YouTubePage;