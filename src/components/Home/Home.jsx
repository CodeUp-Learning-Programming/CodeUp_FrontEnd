import { React } from "react";
import { HeaderHome } from "./HeaderHome";
import { FooterHome } from "./FooterHome";
import { TopSectionHome } from "./TopSectionHome";
import { BottomSectionHome } from "./BottomSectionHome";

const Home = () => {
  return (
    <>
    {/* {entrarSemCadastro} */}
    <HeaderHome />
    <TopSectionHome />
    <BottomSectionHome />
    <FooterHome/>
    </>
  );
};

export default Home;
