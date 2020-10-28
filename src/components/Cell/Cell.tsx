import React from "react";
import { CellType } from "../../types/Cell";

import * as styles from "./styles";

type Props = {
  type: CellType["type"];
};

export const Cell: React.FC<Props> = React.memo(({ type }) => (
  <styles.Wrapper>
    <styles.Icon type={type} />

    {type === "alive" && (
      <div>
        <styles.Title>Живая</styles.Title>
        <styles.SubTitle>и шевелится!</styles.SubTitle>
      </div>
    )}

    {type === "dead" && (
      <div>
        <styles.Title>Мёртвая</styles.Title>
        <styles.SubTitle>или прикидывается</styles.SubTitle>
      </div>
    )}

    {type === "life" && (
      <div>
        <styles.Title>Жизнь</styles.Title>
        <styles.SubTitle>Ку-ку!</styles.SubTitle>
      </div>
    )}
  </styles.Wrapper>
));
