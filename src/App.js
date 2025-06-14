import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import MovieCard from "./components/movieCard";
import Navbar from "./components/navbar";
import Browse from "./pages/browse";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Browse></Browse>
    </div>
  );
}

export default App;
