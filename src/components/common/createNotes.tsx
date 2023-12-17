
import Button from "react-bootstrap/Button";
import * as React from "react";
import { Note } from './module/note.model';
import { Alert, Form } from 'react-bootstrap';

interface ICreateNotesProps {
  notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {
   const [error, setError] = React.useState<string>("");
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === "" || textRef.current?.value === "") {
            return setError("All fields are mandatory");
        }
  
      }
  return (
    <>
      <h2>Create Notes</h2>
      <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title for the Note"
            ref={titleRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title for the Note"
            rows={3}
            ref={textRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            title="Choose your color"
            ref={colorRef}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
