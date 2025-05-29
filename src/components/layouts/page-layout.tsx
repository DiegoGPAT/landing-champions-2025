import React from "react";
import ChispasTopImg from "../../assets/images/chispasL3top.svg";
import ChispasBottomImg from "../../assets/images/chispasL3bottom.svg";
import LogoAtImg from "../../assets/images/logo-at.svg";
// import BannerImg from "../../assets/images/banner.png";

interface Props {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: Props) => {
  return (
    <div className="relative bg-black w-full bg-[radial-gradient(110%_90%_at_110%_-9%,rgba(184,0,0,0.8)_0%,transparent_60%)]">
      <img
        src={ChispasTopImg}
        alt="chispas top"
        className="absolute mb-auto inset-0 w-full h-auto object-cover z-0"
      />

      <img
        src={ChispasBottomImg}
        alt="chispas top"
        className="absolute mt-auto inset-0 w-full h-auto object-cover z-0"
      />

      <div className="relative py-10 md:pt-30">
        <img
          src={LogoAtImg}
          alt="logo_at"
          className="hidden md:block m-auto h-[70px] mb-10"
        />
        {children}
      </div>
    </div>
  );
};
