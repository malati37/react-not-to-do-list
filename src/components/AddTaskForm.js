import { useState } from "react";
import { Button } from "bootstrap";
import { Col, Form, Row } from "react-bootstrap";
import { configure } from "@testing-library/react";

const initialFormDt = {
  task: "",
  hr: 0,
};

export const AddTaskForm = () => {
  const [formdt, setFormDt] = useState(initialFormDt);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormDt({
      ...formDt,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formDt);
  };

  return (
    <form onSubmit={handleOnChange}>
      <Row>
        <Col xs={7}>
          <Form.Control
            name="task"
            placeholder="task"
            required
            onChange={handleOnChange}
          />
        </Col>

        <Col>
          <Form.Control
            name="hr"
            required
            type="number"
            placeholder="hour"
            onChange={handleOnChange}
          />
        </Col>
        <Col>
          <Button type="submit"></Button>
        </Col>
      </Row>
    </form>
  );
};
