import React, { Component } from "react";
import { Navbar, FormGroup, FormControl, Button, Glyphicon } from "react-bootstrap";
import api from "../../api";
import { Container, Row, Col } from "../Grid";
import "./body.css";


class Body extends Component {


    state = {
        search: "",
        results: []
    };

    searchMovie = query => {
        api.search(query)
            .then(res => {
                console.log(res);
                this.setState({ results: res.data.Search });
            })
            .catch(err => alert('Something went wrong. Please check your title.'));
    };

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            search: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchMovie(this.state.search);
    };

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="https://ilkovs.github.io"><Glyphicon glyph="glyphicon glyphicon-film" /> Omdb React App</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <FormControl type="text" placeholder="Pick a Movie" onChange={this.handleInputChange} />
                            </FormGroup>
                            <Button type="submit" onClick={this.handleFormSubmit}>Search</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
                <h1>Results</h1>
                {this.state.results.map(movie => {
                    return (
                        <div>
                            <Container>
                                <Row>
                                    <Col size="md-6 sm-12">
                                        <ul>
                                            <li>
                                                <h2>Title: {movie.Title}</h2>
                                            </li>
                                            <li>
                                                <h2>Year: {movie.Year}</h2>
                                            </li>
                                            <li>
                                                <h2>Type: {movie.Type}</h2>
                                            </li>
                                        </ul>
                                    </Col >
                                    <Col size="md-6 sm-12">
                                        <img alt="" src={movie.Poster}></img>
                                    </Col>

                                </Row>
                            </Container>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default Body;
