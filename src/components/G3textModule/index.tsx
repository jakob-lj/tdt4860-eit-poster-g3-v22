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
    light: "#d8e1c7",
    dark: "#6a8d26",
    textColor: "#66666b",
  },
  blue: {
    light: "#c5e1ee",
    dark: "#0069a0",
    textColor: "#66666b",
  },
  purple: {
    light: "#d8d8ed",
    dark: "#6951a1",
    textColor: "#66666b",
  },
  orange: {
    light: "#fadcc7",
    dark: "#e16b1d",
    textColor: "#66666b",
  },
};

type Props = {
  header: string;
  children: React.ReactNode;
  skin: "green" | "blue" | "orange" | "purple" | undefined;
};

const G3TextModule: React.FC<Props> = ({ header, children, skin }) => {
  const def = "green";

  const _skin = skins[skin ?? def];

  return (
    <div className={styles.container}>
      <h3 className={styles.header} style={{ backgroundColor: _skin.dark }}>
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
