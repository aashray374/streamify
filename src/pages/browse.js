import React from "react";
import { Button, Col, Container, Form, Row, Badge } from "react-bootstrap";
import MovieCard from "../components/movieCard";
import "./browse.css"; // Custom styling

const dummyMovies = [
  {
    id: 1,
    title: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    image: "https://via.placeholder.com/300x180",
    genre: "Sci-Fi",
  },
  {
    id: 2,
    title: "Interstellar",
    description: "Exploration of time, space and gravity.",
    image: "https://via.placeholder.com/300x180",
    genre: "Sci-Fi",
  },
  {
    id: 3,
    title: "The Dark Knight",
    description: "The legendary rise of the caped crusader.",
    image: "https://via.placeholder.com/300x180",
    genre: "Action",
  },
  {
    id: 4,
    title: "Tenet",
    description: "Inversion of time and reality.",
    image: "https://via.placeholder.com/300x180",
    genre: "Action",
  },
  {
    id: 5,
    title: "Dunkirk",
    description: "A gripping World War II survival tale.",
    image: "https://via.placeholder.com/300x180",
    genre: "War",
  },
];

const genres = ["All", "Action", "Drama", "Sci-Fi", "Comedy", "Thriller", "War"];

export default function Browse() {
  return (
    <div className="browse-page bg-dark text-white min-vh-100">
      <Container className="py-4">
        <h2 className="text-center mb-4">Browse Movies</h2>

        <Form className="mb-4">
          <Row className="gy-2">
            <Col xs={12} md={8}>
              <Form.Control type="text" placeholder="Search movies..." />
            </Col>
            <Col xs={12} md={4}>
              <Button type="submit" className="w-100" variant="primary">
                Search
              </Button>
            </Col>
          </Row>
        </Form>

        <div className="mb-4 text-center">
          {genres.map((genre, index) => (
            <Badge
              key={index}
              bg="secondary"
              pill
              className="mx-1 px-3 py-2 genre-badge"
              style={{ cursor: "pointer" }}
            >
              {genre}
            </Badge>
          ))}
        </div>

        <Row className="g-5">
          {dummyMovies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard
                title={movie.title}
                description={movie.description}
                image={movie.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
