import React from "react";

type Props = {
  color: "white" | "#363735" | null;
  to: string;
};

const G3Link: React.FC<Props> = ({ to: link, color }) => {
  const textColor = color ?? "blue";

  return (
    <a style={{ color: textColor }} href={link}>
      {link}
    </a>
  );
};

export default G3Link;
