import * as React from "react";
import { render } from "react-dom";
import "reset-css";

import { Button } from "./components/Button/Button";
import { Cells } from "./components/Cells/Cells";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { List } from "./components/List/List";
import { Title } from "./components/Title/Title";

import "./styles.css";

const App = () => (
  <List>
    {({ createNewCell, cells }) => (
      <>
        <Header>
          <Title>Клеточное наполнение</Title>
        </Header>
        <Cells cells={cells} />
        <Footer>
          <Button onClick={createNewCell}>Сотворить</Button>
        </Footer>
      </>
    )}
  </List>
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
