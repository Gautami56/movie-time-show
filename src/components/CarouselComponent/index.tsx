import React from "react";

interface CarouselComponentProps {
  children: React.ReactNode; // Use React.ReactNode for children
}

export const CarouselComponent: React.FC<CarouselComponentProps> = ({
  children,
}) => {
  return <div>{children}</div>;
};
