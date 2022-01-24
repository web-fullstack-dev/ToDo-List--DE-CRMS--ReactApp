import React from "react";
import { toAuthor, toTasks } from "../routes";
import { List, Item, StyledNavLink } from "./styled";

export default () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink to={toTasks()}>Aufgaben</StyledNavLink>
        </Item>
      </List>
      <List>
        <Item>
          <StyledNavLink to={toAuthor()}>Über den Autor</StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};