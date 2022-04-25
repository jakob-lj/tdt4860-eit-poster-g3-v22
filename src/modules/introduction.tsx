import React from "react";
import G3TextModule from "../components/G3textModule";
import Header from "../components/Header";
import Image from "../components/Image";
import Paragraph from "../components/Paragrah";

const TitleModule: React.FC = () => {
  return (
    <G3TextModule header={"Introduksjon"} skin={"purple"}>
      <>
        <Paragraph>
          Vi har i samarbeid med Terratec utviklet en løsning på deteksjon av
          veg mar- kering hvor vi skal detektere og vurdere tilstanden på
          gangfelt på Norges veger. Dette skal da gjennom Terratec sin
          registeringsklient MapSpace registreres i nasjo- nal vegdatabank
          (NVDB) og videre bli brukt til å planlegge vedlikehold av vegene.
        </Paragraph>
      </>
    </G3TextModule>
  );
};

export default TitleModule;
