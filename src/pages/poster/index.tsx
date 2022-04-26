import { Container } from "@mui/material";
import React from "react";
import Title from "../../components/title";
import Methods from "../../modules/methods";
import Results from "../../modules/results";

const Poster: React.FC = () => {
  return (
    <div>
      <Container>
        <Title />
        <Methods />
        <Results />
      </Container>
    </div>
  );
};
export default Poster;
