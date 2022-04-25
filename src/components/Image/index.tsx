import React from "react";

type Props = {
  link: string;
};

const Image: React.FC<Props> = ({ link }) => {
  return <img alt={"something"} src={link} style={{ maxWidth: "100%" }} />;
};

export default Image;
