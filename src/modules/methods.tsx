import React from "react";
import G3TextModule from "../components/G3textModule";

const Methods: React.FC = () => {
  return (
    <G3TextModule header={"Metoder"} skin={"green"}>
      <>
        <p>
          Terratec har samlet inn data fra fylkesveien i agder. Denne dataen har
          de prosessert og laget raster av. Rasteret inneholder detaljerte
          gråtone-bilder og detaljert poisionsdata for hver eneste piksel i
          bildet. Vi har brukt OpenCV for å detektere elementer et
          fotgjengerfelt består av og tunet algoritmer til å gjenkjenne mønstre
          med gjentakende elementer som bygger et samlet fotgjengerfelt. Når et
          felt er oppdaget har vi beregnet en nøyaktig posisjon på sentert av
          dette, som kan sendes til NVDB.
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
