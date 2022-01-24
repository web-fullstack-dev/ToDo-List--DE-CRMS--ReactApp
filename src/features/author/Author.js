import React from "react";
import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

export default () => (
  <Container>
      <Header title="Über den Autor" />
      <Section 
        title="Nikita Rysiev" 
        body={
          <p contentEditable>
            <p>Sie können den Text unten bearbeiten</p>
            <p>Hej! Mein Name ist Nick, und ich bin ein Anfänger Junior Front-End (React) Developer und 👶 Junior Manual Software Tester mit Einführung in die Automatisierung.
             Meine Muttersprache ist Russisch, aber ich lerne und übe mehr Englisch, Polnisch und etwas Deutsch.</p> 
            <p>Jetzt versuche ich, Softwaretests und etwas Codierung einfacher Webanwendungen zu studieren.</p>
            <p>Ich möchte sehr gut codieren und Englisch sprechen können, um auf dem Arbeitsmarkt nützlich zu sein. 
            </p>
          </p>
          } 
        />
  </Container>
);