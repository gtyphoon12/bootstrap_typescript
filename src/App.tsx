import React,{useState} from 'react';
import CreateNotes from  './components/common/createNotes'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Note } from "./components/common/module/note.model";
import {Col,Container,Row} from 'react-bootstrap';
import Navigation from './components/common/navigationbar/navigation';
import NotesList from "./components/common/NotesList";
function App() {
   const [notes, setNotes] = useState<Note[]>([
     {
       id: new Date().toString(),
       title: "Meetings",
       text: " Schedule meeting with UI/UX Team",
       color: "#dfdfdf",
       date: new Date().toString(),
     },
   ]);
  return (
    <Container className="mt-5">
      <Navigation />
      <Row>
        <Col>
          <NotesList notes={notes} setNotes={setNotes} />
        </Col>
      </Row>
      <Row>
        <Col>
          <CreateNotes notes={notes} setNotes={setNotes} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
