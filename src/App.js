import { AddTaskForm } from "./components/AddTaskForm";
import { Button } from "bootstrap";
import { Alert, Container, Row, Col } from "react-bootstrap";
import "./App.css";

import { NotToDoList } from "./tasklist/NotToDoList";
import { TaskList } from "./Tasklist/tasklist";

function App() {
  return (
    <div className="wrapper text-center">
      <Container>
        <Row className="mt-5">
          <Col>
            <h1>Not to do task list </h1>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <TaskList />
          </Col>
          <Col md="6">
            <NotToDoList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
