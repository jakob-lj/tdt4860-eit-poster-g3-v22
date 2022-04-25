import React from "react";

type Props = {
  children: React.ReactNode;
};

const Header: React.FC<Props> = ({ children }) => {
  return <h2>{children}</h2>;
};

export default Header;
