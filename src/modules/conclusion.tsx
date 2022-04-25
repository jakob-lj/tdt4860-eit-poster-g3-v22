import React from "react";
import G3TextModule from "../components/G3textModule";
import Header from "../components/Header";
import Image from "../components/Image";
import Paragraph from "../components/Paragrah";

const Conclusion: React.FC = () => {
  return (
    <G3TextModule header={"Konklusjon"} skin={"orange"}>
      <>
        <Paragraph>Her kan vi skrive paragrapher</Paragraph>
        <Header>Hvis vi trenger en overskrift</Header>
        <Paragraph>Dette er vår vegard:</Paragraph>
        <Image
          link={
            "data:image/jpeg;base64,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"
          }
        />
      </>
    </G3TextModule>
  );
};

export default Conclusion;
