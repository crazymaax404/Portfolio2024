import { Divider, Footer, Header } from "modules/components";
import { Best } from "modules/sections/Best/Best";
import { Contact } from "modules/sections/Contact";
import { Home } from "modules/sections/Home";
import { Projects } from "modules/sections/Projects";
import { Skills } from "modules/sections/Skills";

export const Portfolio = () => {
  return (
    <>
      <Header />
      <Home />
      <Divider />
      <Best />
      <Skills />
      <Projects />
      <Divider />
      <Contact />
      <Footer />
    </>
  );
};
