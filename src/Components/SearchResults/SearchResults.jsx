import React from "react"
import '../../App.css'
import { Col, Container, Row } from "react-bootstrap"

const SearchResults = (props) => {


    return (
        <Container>
            <Row>
                {props.searchResults.map((el,i) =>
                  
                     
                            <Col key={i} xs ={5} className="Header-Gradient rounded" style={{margin: "20px", cursor:"pointer"}} onClick={()=>props.handleVideo(el)}>
                                <img style={{objectFit:"cover", maxWidth: "100%"}} src={el.snippet.thumbnails.high.url}></img>
                                <div style ={{overflowWrap: 'break-word'}}>{el.snippet.title}</div>
                            </Col>
                  
                )}
            </Row>
        </Container>
    )
}

export default SearchResults