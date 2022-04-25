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
      </>
    </G3TextModule>
  );
};

export default TitleModule;
