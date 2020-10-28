import React from "react";

import { CellType } from "../../types/Cell";
import { randomBoolean } from "../../helpers/random";

import * as styles from "./styles";

type childrenProps = {
  createNewCell: () => void;
  cells: CellType[];
};

type Props = {
  children: (props: childrenProps) => React.ReactNode;
};

const getRandomId = () => Math.random().toString(36).substr(2, 9);

const LIVE_PROROBABILITY = 0.6;

export const List: React.FC<Props> = ({ children }) => {
  const [cells, setCells] = React.useState<CellType[]>([]);
  const liveCellCounter = React.useRef(0);
  const deadCellCounter = React.useRef(0);
  const lastLifeId = React.useRef<string | null>(null);

  const createNewCell = (): void => {
    const type = randomBoolean(LIVE_PROROBABILITY) ? "alive" : "dead";

    if (type === "alive") {
      liveCellCounter.current += 1;
      deadCellCounter.current = 0;
    } else {
      deadCellCounter.current += 1;
      liveCellCounter.current = 0;
    }

    const id = getRandomId();

    setCells([...cells, { id, type }]);

    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const createNewLife = () => {
    const id = getRandomId();
    lastLifeId.current = id;
    setCells([...cells, { id, type: "life" }]);
  };

  const killLastLife = () => {
    const newList: CellType[] = cells.map(({ type, id }) =>
      id === lastLifeId.current ? { type: "dead", id } : { type, id }
    );

    setCells(newList);
  };

  React.useEffect(() => {
    if (liveCellCounter.current === 2) {
      liveCellCounter.current = 0;
      createNewLife();
    }
  }, [liveCellCounter.current]);

  React.useEffect(() => {
    if (deadCellCounter.current === 3 && deadCellCounter.current) {
      deadCellCounter.current = 0;
      killLastLife();
    }
  }, [deadCellCounter.current]);

  return <styles.Wrapper>{children({ createNewCell, cells })}</styles.Wrapper>;
};
