import { Contact } from "./sections/contact/Contact";
import { Footer } from "./sections/footer/Footer";
import { Header } from "./sections/header/Header";
import { Hero } from "./sections/hero/Hero";
import { Packages } from "./sections/packages/Packages";
import { Services } from "./sections/services/Services";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
        <Packages />
      </main>
      <Footer />
    </>
  );
}

export default App;
