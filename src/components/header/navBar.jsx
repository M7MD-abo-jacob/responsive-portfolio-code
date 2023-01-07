import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  Form,
  Button,
  Dropdown,
  FormGroup,
  CloseButton,
  Col,
} from "react-bootstrap";
import {
  BagHeartFill,
  Cart3,
  Translate,
  Palette,
  DoorOpen,
  Search,
  GeoAlt,
  Brush,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQ } from "../../redux/filterSlice";
import {
  setLanguage,
  toggleTheme,
  setCartIsOpen,
  setLoggedIn,
  setMainColor,
} from "../../redux/generalSlice";
import { Link, useNavigate } from "react-router-dom";
import CartComponent from "../cart/cartComponent";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Cookies from "js-cookie";
import { languages } from "../../data/data";
import { colors } from "../../data/data";
import { useState } from "react";
import NavigationLG from "./navigationLG";
import NavigationSM from "./navigationSM";

const NavBar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const cart = useSelector((state) => state.cart.value);
  const iconStyle = { color: "#666", fontSize: "2em" };
  const filters = useSelector((state) => state.filters);
  const darkTheme = useSelector((state) => state.general.isDarkTheme);
  const mainColor = useSelector((state) => state.general.mainColor);
  const language = useSelector((state) => state.general.language);
  const loggedIn = useSelector((state) => state.general.loggedIn);
  const dispatch = useDispatch();
  const expand = "md";

  const currentLanguageCode = Cookies.get("i18next") || "en";

  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar
        dir="ltr"
        id="navbar"
        collapseOnSelect
        key={expand}
        bg={`${mainColor}${darkTheme ? "l" : ""}`}
        variant={darkTheme ? "dark" : "light"}
        expand={false}
        expanded={expanded}
        sticky="top"
        className={`navbar py-0 mb-3 mb-lg-0 shadow ${
          darkTheme ? "l bg-gradient" : ""
        }`}
      >
        <Container className="">
          <Col
            xs={12}
            className="d-flex justify-content-between align-items-center"
          >
            <Navbar.Brand>
              <Link to="/" className="navbar-brand d-flex align-items-center">
                <BagHeartFill className="h1 mb-0 me-2" />
                <h2 className="h2 header-t mb-0">{t("brand")}</h2>
              </Link>
            </Navbar.Brand>
            <Form
              dir={language === "ar" ? "rtl" : "ltr"}
              className="d-none w-50 d-lg-flex"
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/shop");
              }}
            >
              <FormGroup className="w-100 position-relative">
                <Form.Control
                  type="text"
                  placeholder={t("search_placeholder")}
                  className="me-2"
                  aria-label="text"
                  value={filters.searchQ}
                  onChange={(e) => {
                    dispatch(setSearchQ(e.target.value));
                  }}
                />
                <Button
                  variant="link"
                  style={{ color: "gray" }}
                  className={`position-absolute top-0 ${
                    language === "en" ? "end-0" : "start-0"
                  }`}
                  onClick={() => navigate("/shop")}
                >
                  <Search className="fs-4" />
                </Button>
              </FormGroup>
            </Form>
            <div>
              <Button
                variant="link"
                className="position-relative"
                onClick={() => {
                  dispatch(setCartIsOpen(true));
                }}
              >
                <Cart3
                  className={`h3 ${darkTheme ? "text-light" : "text-dark"}`}
                />
                {cart.length > 0 && (
                  <span
                    className={`position-absolute ${
                      language === "en" ? "start-0" : "start-100"
                    } translate-middle badge rounded-pill bg-danger`}
                    style={{ top: "10%", left: "60%" }}
                  >
                    {cart.length}
                    <span className="visually-hidden">
                      {t("cart_items_count")}
                    </span>
                  </span>
                )}
              </Button>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                className="fw-bolder"
                style={{ border: "none", fontSize: "1.6rem" }}
                onClick={() => setExpanded(true)}
              />
            </div>
          </Col>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className={`rounded ${
              darkTheme ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            onHide={() => setExpanded(false)}
          >
            <Offcanvas.Header
              className={`rounded shadow position-sticky pe-3 top-0 bg-${mainColor}${
                darkTheme ? "l" : ""
              }`}
              onClick={() => setExpanded(false)}
            >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Nav.Item
                  href="/"
                  className="navbar-brand d-flex align-items-center"
                >
                  <BagHeartFill className="h1 mb-0 me-2" />
                  <h2 className="h2 header-t mb-0">{t("brand")}</h2>
                </Nav.Item>
              </Offcanvas.Title>
              <CloseButton onClick={() => setExpanded(false)} />
            </Offcanvas.Header>
            <Offcanvas.Body className="pt-0">
              <Nav
                dir={language === "ar" ? "rtl" : "ltr"}
                className={`justify-content-end flex-grow-1 pe-3 ${
                  darkTheme ? "bg-dark text-light" : "bg-light text-dark"
                }`}
              >
                {/* personal info if logged in*/}
                {loggedIn && (
                  <>
                    <div className="d-flex align-items-center">
                      <img
                        style={{ width: "35%" }}
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="me"
                      />
                      <div>
                        <div className="fs-3 fw-bold">John Doe</div>
                        <div className="fs-6">@johnd</div>
                        <div className="fs-6">
                          <GeoAlt /> Damascus
                        </div>
                      </div>
                    </div>
                    <hr className="mb-3" />
                  </>
                )}
                {/* search on small scrn */}
                <Form
                  className="d-flex d-lg-none mb-3"
                  onSubmit={(e) => {
                    navigate("/shop");
                    setExpanded(false);
                    e.preventDefault();
                  }}
                >
                  <FormGroup className="w-100 position-relative">
                    <Form.Control
                      type="text"
                      placeholder={t("search_placeholder")}
                      className="me-2"
                      aria-label="Search"
                      value={filters.searchQ}
                      onChange={(e) => {
                        dispatch(setSearchQ(e.target.value));
                      }}
                    />
                    <Button
                      variant="link"
                      style={{ color: "gray" }}
                      className={`position-absolute top-0 ${
                        language === "en" ? "end-0" : "start-0"
                      }`}
                      onClick={() => {
                        navigate("/shop");
                        setExpanded(false);
                      }}
                    >
                      <Search className="fs-4" />
                    </Button>
                  </FormGroup>
                </Form>
                {/* nav links */}
                <NavigationSM setExpanded={setExpanded} iconStyle={iconStyle} />
                {/* dark theme */}
                <Nav.Item>
                  <Form>
                    <Form.Group
                      className={`cursor-pointer d-flex w-100 align-items-center ${
                        darkTheme ? "text-light" : "text-dark"
                      }`}
                    >
                      <Form.Label
                        role="button"
                        htmlFor="custom-switch"
                        className="d-flex align-items-center w-100 m-0 py-2"
                      >
                        <Palette style={iconStyle} />
                        <h2 className="mx-3 mb-0">{t("dark_theme")}</h2>
                      </Form.Label>
                      <Form.Check
                        role="button"
                        type="switch"
                        id="custom-switch"
                        checked={darkTheme}
                        onChange={() => {
                          dispatch(toggleTheme());
                        }}
                        className="fs-4"
                      />
                    </Form.Group>
                  </Form>
                </Nav.Item>
                {/* main color */}
                <Nav.Item>
                  <Dropdown>
                    <Dropdown.Toggle
                      htmlFor="main-color"
                      variant="text"
                      className={`w-100 py-2 px-0  d-flex justify-content-start align-items-center ${
                        darkTheme ? "text-light" : "text-dark"
                      }`}
                    >
                      <Brush style={iconStyle} />
                      <h2 className="h2 mx-3 mb-0">{t("theme")}</h2>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      id="main-color"
                      style={{
                        outline: "none !important",
                        border: "none !important",
                      }}
                      className={`text-start ${
                        darkTheme ? "bg-dark" : "bg-kight"
                      }`}
                    >
                      <div className="d-flex flex-row flex-wrap">
                        {colors.map((c) => (
                          <Dropdown.Item
                            className="h5 w-auto"
                            key={c}
                            onClick={(e) => {
                              // i18next.changeLanguage(code);
                              dispatch(setMainColor(c));
                              e.stopPropagation();
                            }}
                          >
                            <Button
                              style={{
                                width: "50px",
                                height: "50px",
                              }}
                              variant="text"
                              className={`bg-${c}`}
                            ></Button>
                          </Dropdown.Item>
                        ))}
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>
                {/* language */}
                <Nav.Item>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="text"
                      className={`w-100 py-2 px-0  d-flex justify-content-start align-items-center ${
                        darkTheme ? "text-light" : "text-dark"
                      }`}
                    >
                      <Translate style={iconStyle} />
                      <h2 className="h2 mx-3 mb-0">{t("language")}</h2>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{
                        outline: "none !important",
                        border: "none !important",
                      }}
                      className={`text-start ${
                        darkTheme ? "bg-dark" : "bg-kight"
                      }`}
                    >
                      {languages.map(({ code, country_name, country_code }) => (
                        <Dropdown.Item className="h5 mb-0" key={country_code}>
                          <Button
                            variant="text"
                            className={`w-100 ${
                              darkTheme ? "text-light" : "text-dark"
                            }`}
                            disabled={code === currentLanguageCode}
                            onClick={() => {
                              i18next.changeLanguage(code);
                              dispatch(setLanguage(code));
                            }}
                          >
                            <span
                              className={`flag-icon flag-icon-${country_code} mx-2`}
                            ></span>
                            {country_name}
                          </Button>
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>
                {/* log out */}
                {loggedIn && (
                  <Nav.Item
                    role="button"
                    onClick={() => {
                      setExpanded(false);
                      dispatch(setLoggedIn(false));
                      navigate("/");
                    }}
                    className={`py-2 d-flex w-100 ${
                      darkTheme ? "text-light" : "text-dark"
                    }`}
                  >
                    <DoorOpen style={iconStyle} />
                    <h2 className="mx-3 mb-0">{t("log_out")}</h2>
                  </Nav.Item>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
        <CartComponent />
      </Navbar>
      <NavigationLG />
    </>
  );
};

export default NavBar;
