import React from "react";
import G3TextModule from "../components/G3textModule";
import Header from "../components/Header";
import Image from "../components/Image";
import Paragraph from "../components/Paragrah";

const Conclusion: React.FC = () => {
  return (
    <G3TextModule header={"Konklusjon"} skin={"orange"}>
      <>
        <Header>Overraskende bra!</Header>
        <Paragraph>
          Vi syens resutlatet av deteksjonen ble overraskende bra! Det ble ikke
          brukt mange timer med justering av algoritmene før god deteksjon var
          på plass. Videre ser vi for oss at man enkelt kan trene et datasett
          ved hjelp av algortimene til å detektere hvor vegmarkering er slitt,
          for å raskere vedlikeholde dette!
        </Paragraph>
      </>
    </G3TextModule>
  );
};

export default Conclusion;
