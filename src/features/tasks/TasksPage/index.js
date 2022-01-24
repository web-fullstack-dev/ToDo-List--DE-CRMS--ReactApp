import React from 'react';
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Projects from "../../../common/Projects";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";

function TasksPage() {

  return (
    <Container>
      <Projects />
      <Header title="Aufgabenliste" />
      <Section 
        title="Neue Aufgabe hinzufügen" 
        body={<Form />} 
        />
        <Section 
        title="Suchmaschine" 
        body={<Search />} 
        />
      <Section 
        title="Aufgabenliste"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
        />
  </Container>
  );
};


export default TasksPage;
