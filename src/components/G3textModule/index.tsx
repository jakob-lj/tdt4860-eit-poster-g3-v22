import React from "react";

import styles from "./index.module.css";

type Skin = {
  light: string;
  dark: string;
  textColor: string;
};

type Skins = {
  [name: string]: Skin;
};

const skins: Skins = {
  green: {
    light: "red",
    dark: "blue",
    textColor: "white",
  },
  yellow: {
    light: "yellow",
    dark: "brown",
    textColor: "black",
  },
};

type Props = {
  header: string;
  children: React.ReactNode;
  skin: "green" | "yellow" | undefined;
};

const G3TextModule: React.FC<Props> = ({ header, children, skin }) => {
  const def = "green";

  const _skin = skins[skin ?? def];

  return (
    <div className={styles.container}>
      <h3
        className={styles.header}
        style={{ color: _skin.textColor, backgroundColor: _skin.dark }}
      >
        {header}
      </h3>

      <div
        className={styles.content}
        style={{
          backgroundColor: _skin.light,
          color: _skin.textColor,
          borderColor: _skin.dark,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default G3TextModule;
