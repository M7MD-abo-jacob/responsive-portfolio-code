import "./index.css";
import Navbar from "./components/sections/header/navbar";
import Hero from "./components/sections/home/hero";
import About from "./components/sections/about/about";
import Skills from "./components/sections/skills/skills";
import Work from "./components/sections/work/work";
import Contact from "./components/sections/contact/contact";
import Footer from "./components/sections/footer/footer";
import ScrollTopButton from "./components/scrollTopButton";

function App() {
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      document.title = "Portfolio | Mohammad Kikhia";
    } else {
      document.title = "Psst... Come Back";
    }
  });

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
export default App;
