import React, { CSSProperties } from "react";

export const ContentMain = ({
  children,
  className,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <div
      style={style}
      className={`px-4  lg:px-6 w-full max-w-[1640px] mx-auto  h-full ${className}`}
    >
      {children}
    </div>
  );
};
