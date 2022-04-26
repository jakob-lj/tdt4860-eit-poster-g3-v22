import React from "react";
import G3TextModule from "../../components/G3textModule";
import Header from "../../components/Header";
import Paragraph from "../../components/Paragrah";
import Image from "../../components/Image";
import gray from "../../assets/gray.png";
import hsl from "../../assets/HLS.png";
import crosswalk from "../../assets/crosswalk_detection.png";
import masked from "../../assets/masked_image.png";
import rectangles from "../../assets/withrectangles.png";
import result from "./../../assets/result.png";
import styles from "./index.module.css";

const SmallImg: React.FC<{ img: any }> = ({ img }) => {
  return <img className={styles.smallImg} src={img} alt={"something"} />;
};

const InteractiveData: React.FC = () => {
  return <div>Ikke implementert</div>;
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
        <SmallImg img={crosswalk} />
        <SmallImg img={hsl} />
        <SmallImg img={gray} />
        <SmallImg img={masked} />
        <SmallImg img={rectangles} />
      </div>

      <div className={styles.resultWrapper}>
        <h2>Det endelige resutlatet ser da slik ut:</h2>
        <img className={styles.result} src={result} alt={"final result"} />
      </div>

      <p>
        <b>
          (Disclaimer: Vi fikk ikke google linken til å ha samme nøyaktighet som
          dataen vår dessverre)
        </b>
      </p>
      <p>
        <b>
          (DISCLAIMER: Vi fant ingen fotgjengerfelt i datasettet så vi har laget
          et fake et. Men posisjonen er helt korrekt)
        </b>
      </p>
      <a href="https://www.google.com/maps/place/58%C2%B033'02.1%22N+7%C2%B046'07.8%22E/@58.5505899,7.7682583,136m/data=!3m1!1e3!4m5!3m4!1s0x0:0xfeea71b5f77842a2!8m2!3d58.5505804!4d7.7688321">
        Vis fotgjengerfelt på kart
      </a>
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
  const isInteractive = false;

  return (
    <G3TextModule header={"Resultater"} skin={"blue"}>
      <>
        <ResultsData isInteractive={isInteractive} />
      </>
    </G3TextModule>
  );
};

export default Results;
