import { Outlet } from "react-router";
import { MainHero } from "../main-hero";
import { PageLayout } from "./page-layout";

export const MainLayout = () => {
  return (
    <div className="bg-black grid w-full min-h-full grid-cols-1 md:grid-cols-2 ">
      <MainHero />

      <PageLayout>
        <Outlet />
      </PageLayout>
    </div>
  );
};
