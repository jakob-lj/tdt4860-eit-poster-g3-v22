import React, { useState } from "react";
import G3TextModule from "../../components/G3textModule";
import gray from "../../assets/gray.png";
import hsl from "../../assets/HLS.png";
import crosswalk from "../../assets/crosswalk_detection.png";
import masked from "../../assets/masked_image.png";
import rectangles from "../../assets/withrectangles.png";
import result from "./../../assets/result.png";
import styles from "./index.module.css";

const ResultLink: React.FC = () => {
  return (
    <div>
      <div className={styles.resultWrapper}>
        <h2>Det endelige resutlatet ser da slik ut:</h2>
        <img className={styles.result} src={result} alt={"final result"} />
      </div>
      <p>
        <a href="https://www.google.com/maps/place/58%C2%B033'02.1%22N+7%C2%B046'07.8%22E/@58.5505899,7.7682583,136m/data=!3m1!1e3!4m5!3m4!1s0x0:0xfeea71b5f77842a2!8m2!3d58.5505804!4d7.7688321">
          Vis fotgjengerfelt på kart
        </a>
        , avrunding av koordinatene skjer under generering av google link og vil
        ikke vise helt korrekt resultat.
      </p>
    </div>
  );
};

const SmallImg: React.FC<{ img: any; imgText: string }> = ({
  img,
  imgText,
}) => {
  return (
    <div className={styles.smallImg}>
      <img className={""} src={img} alt={"something"} />
      <p>{imgText}</p>
    </div>
  );
};

const InteractiveData: React.FC = () => {
  const [imgIndex, setImgIndex] = useState<number>(0);

  const imgArr = [crosswalk, hsl, masked, rectangles];

  return (
    <div className={styles.interactiveImageWrapper}>
      <h2>
        Velkommen til våre interaktive resultater. Trykk deg gjennom
        bildeprosessen!!
      </h2>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setImgIndex((prev: number) => (prev += 1))}>
          {imgIndex % imgArr.length === imgArr.length - 1
            ? "Start på nytt"
            : "Neste bilde!"}
        </button>
      </div>
      <p></p>

      <img
        className={styles.interactiveImage}
        src={imgArr[imgIndex % imgArr.length]}
        alt={"Alt"}
      />

      <ResultLink />
    </div>
  );
};

const NonInteractiveData: React.FC = () => {
  return (
    <>
      <div>
        <h2>
          Her kan vi se hvordan programmet lager nye bilder underveis for å
          finne gangfelt
        </h2>
      </div>
      <div className={styles.imagesWrapper}>
        <SmallImg img={crosswalk} imgText="Original - bilde 1" />
        <SmallImg img={hsl} imgText={"HSL - bilde 2"} />
        <SmallImg img={gray} imgText={"Gråskala - bilde 3"} />
        <SmallImg img={masked} imgText={"Masket - bilde 4"} />
        <SmallImg
          img={rectangles}
          imgText={"Markert med rektangler - bilde 5"}
        />
      </div>

      <ResultLink />
    </>
  );
};

const ResultsData: React.FC<{ isInteractive: boolean }> = ({
  isInteractive,
}) => {
  if (isInteractive) {
    return <InteractiveData />;
  } else {
    return <NonInteractiveData />;
  }
};

const Results: React.FC = () => {
  const isInteractive = window.location.search.includes("interactive");

  return (
    <G3TextModule header={"Resultater"} skin={"blue"}>
      <>
        <ResultsData isInteractive={isInteractive} />
      </>
    </G3TextModule>
  );
};

export default Results;
