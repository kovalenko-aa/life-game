import React from "react";

import * as styles from "./styles";

export const Button: React.FC<JSX.IntrinsicElements["button"]> = ({
  children,
  ...props
}) => <styles.Button {...props}>{children}</styles.Button>;
