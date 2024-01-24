import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  /**
   * Контент.
   */
  children: ReactNode;
  /** */
  variant?: "";
  /**
   * Кастомный классю
   */
  className?: string;
}

const Card: FC<CardProps> = (props) => {
  const { children, className } = props;

  return (
    <div className={twMerge("min-h-86 rounded-16 w-full bg-gray", className)}>
      {children}
    </div>
  );
};

export default Card;
