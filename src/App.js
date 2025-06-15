import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import MovieCard from "./components/movieCard";
import Navbar from "./components/navbar";
import Browse from "./pages/browse";
import Chat from "./pages/chat";



function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Browse></Browse> */}
      <Chat></Chat>
    </div>
  );
}

export default App;
