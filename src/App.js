import { Routes, Route, HashRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/header/navBar";
import Footer from "./components/footer/footer";
import Shop from "./pages/shop";
import Home from "./pages/home";
import Errors from "./pages/errors";
import Product from "./pages/product";
import Announcements from "./components/header/announcements";
import LogIn from "./pages/logIn";
import ScrollToTop from "./components/scrollToTop";
import ScrollToTopBtn from "./components/buttons/scrollToTopBtn";
import About from "./pages/about";
import CustomerService from "./pages/customerService";
import PageTop from "./components/pageTop";

function App() {
  const loggedIn = useSelector((state) => state.general.loggedIn);
  const darkTheme = useSelector((state) => state.general.isDarkTheme);
  const language = useSelector((state) => state.general.language);
  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      id="app"
      className={`app position-relative ${
        darkTheme ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <HashRouter>
        <Announcements />
        <NavBar />
        <PageTop />
        <ScrollToTop />
        <Routes>
          <Route
            exact
            path="/"
            element={loggedIn ? <Home /> : <LogIn />}
          ></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact
            path="/customerservice"
            element={<CustomerService />}
          ></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route
            exact
            path="*"
            element={<Errors message={"Not found!"} />}
          ></Route>
        </Routes>
        <Footer />
      </HashRouter>
      <ScrollToTopBtn />
    </div>
  );
}
export default App;
