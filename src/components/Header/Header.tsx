import React from "react";

import * as styles from "./styles";

export const Header: React.FC<{}> = ({ children }) => (
  <styles.Wrapper>{children}</styles.Wrapper>
);
