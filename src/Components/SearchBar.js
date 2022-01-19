import React, { useState } from 'react';
import '../App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';



const SearchBar = (props) =>{

    const [searchTerm, searchForTerm] = useState('');
    const passValueUp=(e)=>{
        e.preventDefault();
        props.search(searchTerm);
    }
    return(
        <Container className="Search-Box-Gradient" fluid={true}>
            <Row>
                <Col  style={{marginLeft:'50px'}}xs={5}>
                    <Form id="myForm" onSubmit={passValueUp}>
                        <Form.Group controlId="youTubeSearch">
                            <Form.Label  className="Gradient-Box-Shadow">Search</Form.Label>
                            <Form.Control value={searchTerm} onChange={e=>searchForTerm(
                                e.target.value)} placeholder="Enter search term"></Form.Control>
                            <Button variant="primary" type="submit">Search</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default SearchBar;