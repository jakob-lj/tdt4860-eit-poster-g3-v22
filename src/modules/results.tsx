import React from "react";
import G3TextModule from "../components/G3textModule";
import Header from "../components/Header";
import Paragraph from "../components/Paragrah";
import Image from "../components/Image";

const Results: React.FC = () => {
  return (
    <G3TextModule header={"Results"} skin={"green"}>
      <>
        <Paragraph>Her kan vi skrive paragrapher</Paragraph>
        <Header>Hvis vi trenger en overskrift</Header>
        <Paragraph>De sjukeste resultatene får du her:</Paragraph>
        <Image
          link={
            "https://g.acdn.no/obscura/API/dynamic/r1/nadp/tr_1000_2000_s_f/0000/2012/08/31/8240289/1/original/styrk.jpg?chk=8B3EB9"
          }
        />
      </>
    </G3TextModule>
  );
};

export default Results;
