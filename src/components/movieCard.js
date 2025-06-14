import React from "react";
import { Card, Button } from "react-bootstrap";
import "./movieCard.css";

export default function MovieCard({ title, description, image }) {
  return (
    <Card className="movie-card h-100">
      <Card.Img variant="top" src={image} alt={title} style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="truncate-title">{title}</Card.Title>
        <Card.Text className="truncate-description flex-grow-1">
          {description}
        </Card.Text>
        <Button variant="primary" className="mt-auto">Explore</Button>
      </Card.Body>
    </Card>
  );
}
