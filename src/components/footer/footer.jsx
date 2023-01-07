import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BgIcons from "./bgIcons";

function Footer() {
  const { t } = useTranslation();
  const darkTheme = useSelector((state) => state.general.isDarkTheme);
  const mainColor = useSelector((state) => state.general.mainColor);

  return (
    <footer
      id="footer"
      className={`page-footer position-relative font-small mt-5 pt-4 pt-lg-5 bg-gradient ${
        darkTheme
          ? "bg-dark text-light bg-opacity-75"
          : "bg-dark text-dark bg-opacity-10"
      }`}
    >
      <BgIcons />
      <Container className="text-center text-md-left">
        <Row>
          <Col md={8} className="mt-md-0 mt-3">
            <h5 className="text-uppercase">{t("brand")}</h5>
            <p>{t("lorem20")}</p>
          </Col>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <Col md={4} className="mb-md-0 mb-3">
            <h5 className="text-uppercase">{t("links")}</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  className={`text-${mainColor}${darkTheme ? "" : "l"}`}
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className={`text-${mainColor}${darkTheme ? "" : "l"}`}
                >
                  {t("shop")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`text-${mainColor}${darkTheme ? "" : "l"}`}
                >
                  {t("about_us")}
                </Link>
              </li>
              <li>
                <Link
                  to="/customerservice"
                  className={`text-${mainColor}${darkTheme ? "" : "l"}`}
                >
                  {t("customer_service")}
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        <div className="footer-copyright text-center py-3">
          <span>&#169; {t("copyright")}</span>
          <a
            href="https://m7md-abo-jacob.github.io/uShopia---my-fake-store/"
            className={`text-${mainColor}${darkTheme ? "" : "l"}`}
          >
            {" Mohammad Kikhia"}
          </a>
          {t("rights")}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
