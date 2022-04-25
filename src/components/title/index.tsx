import React from "react";
import Introduction from "../../modules/introduction";
import G3Link from "../G3Link";

import styles from "./index.module.css";

const Title: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>EFFEKTIVT VEDLIKEHOLD AV VEIMARKERING</h1>
        <h3 className={styles.index}>
          Automatisk deteksjon og rapportering av fotgjengerfelt
        </h3>
        <h4 className={styles.index}>
          Et prosjekt av Styrk, Kenneth, Vegard, Astrid og Jakob
        </h4>
        <Introduction />
      </div>

      <div className={styles.img}>
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/6/66/NO_road_sign_516.H.svg"
          }
          alt={""}
        />
        <p style={{ color: "#363735" }}>
          <em>
            Bilde lånt fra wikipedia (
            <G3Link
              to={"https://no.wikipedia.org/wiki/Fotgjengerovergang"}
              color={"#363735"}
            />
            )
          </em>
        </p>
      </div>
    </div>
  );
};

export default Title;
