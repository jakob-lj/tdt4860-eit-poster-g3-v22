import React from "react";

type Props = {
  children: React.ReactNode;
};

const Paragraph: React.FC<Props> = ({ children }) => {
  return <p>{children}</p>;
};

export default Paragraph;
