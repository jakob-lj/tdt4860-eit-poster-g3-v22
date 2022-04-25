import React from "react";
import G3TextModule from "../components/G3textModule";

const Methods: React.FC = () => {
  return (
    <G3TextModule header={"Metoder"} skin={"green"}>
      <>
        <p>
          Terratec har samlet inn data fra fylkesveien i Agder. Denne dataen har
          de prosessert og laget raster av. Rasteret inneholder detaljerte
          gråtone-bilder og detaljert posisjonsdata for hver eneste piksel i
          bildet. Vi har brukt computer vision biblioteket OpenCV for å
          detektere elementer et fotgjengerfelt består av og justert algoritmer
          til å gjenkjenne mønstre med gjentakende elementer som bygger et
          samlet fotgjengerfelt. Når et felt er oppdaget har vi beregnet en
          nøyaktig posisjon på senteret av dette. Videre kan dette brukes
          gjennom Terratecs registreringsplatform MapSpace til å registrere
          fotgjengerfeltene som objekter i NVDB som er den nasjonale
          vegdatabasen i Norge. Informasjonen her brukes blant annet til
          planlegging av vedlikehold, kartløsninger og ruteberegninger, og som
          grunnlagsdata for støyberegninger og trafikkmodeller.
        </p>
        <p>
          <em>
            OpenCV er et bildeverktøy som muliggjør computer vision med Python
            og C++.
          </em>
        </p>
      </>
    </G3TextModule>
  );
};

export default Methods;
