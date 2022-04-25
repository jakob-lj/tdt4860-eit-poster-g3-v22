import { Container } from "@mui/material";
import React from "react";
import G3TextModule from "../../components/G3textModule";
import Title from "../../components/title";
import Conclusion from "../../modules/conclusion";
import Methods from "../../modules/methods";
import Results from "../../modules/results";

const Poster: React.FC = () => {
  return (
    <div>
      <Container>
        <Title />
        <Methods />
        <Results />
        <Conclusion />
      </Container>
    </div>
  );
};
export default Poster;
