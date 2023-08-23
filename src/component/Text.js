import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function Text() {
  const [text, setText] = useState("This is state Text");
  const handleChange = () => {
    // console.log("Text changed");
    // setText("Text changed");
    let newText = text.toUpperCase()
    setText(newText);
  };

  const trackChange = (event) => {
    // console.log("Change occured");
    setText(event.target.value);
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            value={text}
            rows={3}
            onChange={trackChange}
          />
        </Form.Group>
        <div className="btn btn-primary" onClick={handleChange}>
          Click here
        </div>
      </Form>
    </div>
  );
}
