import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhoIHelp from "./components/WhoIHelp";
import Specialities from "./components/Specialities";
import Methods from "./components/Methods";
import OurOffice from "./components/OurOffice";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <About />
      <WhoIHelp />
      <Specialities />
      <Methods />
      <OurOffice />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}