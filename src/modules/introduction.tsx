import React from "react";
import G3TextModule from "../components/G3textModule";
import Header from "../components/Header";
import Image from "../components/Image";
import Paragraph from "../components/Paragrah";

const TitleModule: React.FC = () => {
  return (
    <G3TextModule header={"Introduksjon"} skin={"purple"}>
      <>
        <Paragraph>Her skriver vi introduksjonen</Paragraph>
        <Header>Her er en underoverskrift</Header>
        <Paragraph>Nok en paragraph og et bilde under</Paragraph>
        <Image
          link={
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e464752284120.5eea3640d666d.png"
          }
        />
      </>
    </G3TextModule>
  );
};

export default TitleModule;
