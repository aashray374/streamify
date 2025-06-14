import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import MovieCard from "./components/movieCard";
import Navbar from "./components/navbar";

const dummyMovies = [
  {
    id: 1,
    title: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    image: "https://via.placeholder.com/300x180",
  },
  {
    id: 2,
    title: "Interstellar",
    description: "Exploration of time, space and gravity.",
    image: "https://via.placeholder.com/300x180",
  },
  {
    id: 3,
    title: "The Dark Knight",
    description: "The legendary rise of the caped crusader.",
    image: "https://via.placeholder.com/300x180",
  },
  {
    id: 4,
    title: "Tenet",
    description: "Inversion of time and reality.",
    image: "https://via.placeholder.com/300x180",
  },
  {
    id: 5,
    title: "Dunkirk",
    description: "A gripping World War II survival tale.",
    image: "https://via.placeholder.com/300x180",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="py-4">
        <Row className="g-4">
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

export default App;
