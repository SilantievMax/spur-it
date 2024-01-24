import { FC, ReactNode } from "react";

interface BaseLayoutProps {
  /**
   *  Контент.
   */
  children: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = (props) => {
  const { children } = props;

  return <div className="min-h-screen w-full bg-white p-10">{children}</div>;
};

export default BaseLayout;
