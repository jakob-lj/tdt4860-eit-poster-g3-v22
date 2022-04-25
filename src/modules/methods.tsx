import React from "react";
import G3TextModule from "../components/G3textModule";

const Methods: React.FC = () => {
  return (
    <G3TextModule header={"Metoder"} skin={"green"}>
      <>
        <p>
          Vi har fått data fra terratec hvor de har fotografert vegbanen i Agder
          før den er blitt prosessert og satt samme til bilder med geografisk
          posisjon som referanse for enhver piksel i bildet.
        </p>
        <p>
          Dette har vi brukt til å søke etter fotgjengerfelt med et verktøy som
          heter OpenCV og deretter lest ut hvor fotgjengerfeltet er lokalisert
          på bildet for å kunne vise til posisjonen svært nøyaktiv. Posisjonen
          er deretter klar for å lastes opp i NVDB slik at vi kan logge hvor
          fotgjengerfelt befinner seg.
        </p>
      </>
    </G3TextModule>
  );
};

export default Methods;
