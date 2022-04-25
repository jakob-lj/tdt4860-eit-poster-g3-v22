import React from "react";
import G3TextModule from "../components/G3textModule";
import Header from "../components/Header";
import Image from "../components/Image";
import Paragraph from "../components/Paragrah";

const TitleModule: React.FC = () => {
  return (
    <G3TextModule header={"Introduksjon"} skin={"yellow"}>
      <>
        <Paragraph>Her skriver vi introduksjonen</Paragraph>
        <Header>Her er en underoverskrift</Header>
        <Paragraph>Nok en paragraph og et bilde under</Paragraph>
        <Image
          link={
            "https://g.acdn.no/obscura/API/dynamic/r1/ece5/tr_1000_2000_s_f/0000/hade/2016/3/1/10/01NYHHeisekran_05-06-DSC_0026.jpg?chk=851523"
          }
        />
      </>
    </G3TextModule>
  );
};

export default TitleModule;
