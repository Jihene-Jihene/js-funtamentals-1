import React from "react";
import { Container, Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import "./App.css";

const App = () => {
  const firstName = "John"; // Change to your first name or leave blank
  const greeting = firstName ? `Hello, ${firstName}!` : "Hello, there!";

  return (
    <Container className="mt-5">
      <Card
        className="text-center"
        style={{
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      {firstName && (
        <img src="https://picsum.photos/100" alt="Greeting" className="mt-3" />
      )}
      <h3 className="mt-3">{greeting}</h3>
    </Container>
  );
};

export default App;
