import BannerImage from "../assets/images/banner.png";
import LogoAtImg from "../assets/images/logo-at.svg";

export const MainHero = () => {
  return (
    <div className="relative bg-black w-full h-full ">
      <img
        src={LogoAtImg}
        alt="logo_at"
        className="block md:hidden m-auto h-[60px] mt-10 mb-2"
      />

      <img
        src={BannerImage}
        alt="Banner"
        className="md:absolute top-1/12 inset-0 w-full  object-cover z-0"
      />

      {/* Gradiente encima */}
      <div className="md:absolute inset-0 md:z-10 bg-[radial-gradient(122%_100%_at_-5%_120%,rgba(184,0,0,0.8)_0%,transparent_60%)]" />
    </div>
  );
};
