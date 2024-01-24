import { FC, ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

const Text: FC<TextProps> = (props) => {
  const { children } = props;

  return <p>{children}</p>;
};

export default Text;
