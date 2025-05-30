import React from "react";

interface Props {
  children?: React.ReactNode;
  loading?: boolean;
}

export const AtButton = ({ children }: Props) => {
  return (
    <button className="at-button bg-[#FFC700] text-gray-800 text-sm mb-8">
      {children}
    </button>
  );
};
