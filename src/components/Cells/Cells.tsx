import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { CellType } from "../../types/Cell";
import { Cell } from "../Cell/Cell";

import * as styles from "./styles";

export const Cells: React.FC<{ cells: CellType[] }> = ({ cells }) => (
  <TransitionGroup component={styles.Wrapper}>
    {cells.map(({ id, type }) => (
      <CSSTransition key={id} classNames="transition" timeout={1500}>
        <Cell type={type}></Cell>
      </CSSTransition>
    ))}
  </TransitionGroup>
);
