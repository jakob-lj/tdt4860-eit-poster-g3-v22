import React from "react";
import G3TextModule from "../components/G3textModule";

const Methods: React.FC = () => {
  return (
    <G3TextModule header={"Metoder"} skin={"green"}>
      <>
        <h2>Bildebehandling</h2>
        <p>
          For å gjøre deteksjonen måtte vi først optimalisere bildene til et
          dataformat vi lettere kunne jobbe med. Dette gjorde vi ved å lese
          bildet inn i OpenCV og så konveretere det til HLS.
        </p>
        <p>
          <b>
            <em>HLS</em>
          </b>{" "}
          betyr å lagre bildedataen på formatet hue, light, saturation, ofte
          lagres bilder i RGB-format, altså rød, grønn, blå. I vårt tilfelle
          passet HLS godt fordi vi heller ønsker å detektere tilstedeværelsen av
          lyse objekter enn et fargespekter. Bildet i HLS kan sees i bilde 2 i
          resultater. Dessverre er det vanskelig å visualisere dette
          dataformatet på en lite abstrakt måte, så vi ser kun litt annerledes
          farger hvor detaljene er shiftet i spektert.
        </p>
        <p>
          Fra HLS bildet gjør vi en enkel maske for å hente ut de lyseste
          objektene. Dette ser dere i bilde 3.
        </p>
        <p>
          Etter å ha opprettet en maske hvor vi binært har "her er det lyst
          objekt" og "her er det mørtk" kan vi deretter enkelt gjøre mønster
          gjennkjenning på en mye lettere datastruktur. Dette øker hastigheten i
          algorimene da vi har preprossesert bildet mye.
        </p>
        <p>
          Mønstergjennkjenningen brukes med åpne biblioteker hvor vi bruker
          OpenCV sin funksjon for å lete etter rektangler.
        </p>
        <p>
          Basert på rektangler beregner vi hva som er sannsynlig størrelse på et
          fotgjengerfelt-element og hvor mange som må være tilstede for å ha et
          fotgjengerfelt. Vi ser også på avstanden mellom elementene.
        </p>
        <p>
          Det siste som skjer av bildebehandling er kun enkel matematikk hvor vi
          beregner senteret til fotgjengerfeltet basert på utkanten av
          elementene vi har funnet.
        </p>
        <h2>Koordianter</h2>
        <p>
          Når vi har funnet et fotgjengerfelt har vi kunne funnet hvor i bildet
          dette befinner seg. Nå må vi finne den geografiske posisjonen til
          fotgjengerfeltet. Dette gjør vi med å regne om punktet med en
          matematisk transform-funksjon som ligger bygget inn i bildet, som er
          en <em>TIF</em>-fil.
        </p>
      </>
    </G3TextModule>
  );
};

export default Methods;
