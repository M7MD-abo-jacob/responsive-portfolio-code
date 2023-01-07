import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cash, CreditCard, Headset, Truck } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { setPageTop } from "../redux/generalSlice";
import { useEffect } from "react";

const Home = () => {
  const { t } = useTranslation();
  const mainColor = useSelector((state) => state.general.mainColor);
  const darkTheme = useSelector((state) => state.general.isDarkTheme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTop("home"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="home">
      {/* main paragraph */}
      <Container className="my-2 my-lg-5 about-home">
        <h1 className="h1 fw-bold mb-0">{t("brand")}</h1>
        <h3 className={`h3 text-${mainColor}${darkTheme ? "" : "l"}`}>
          {t("brand_subtitle")}
        </h3>
        <p className="lead fw-normal">{t("lorem40")}</p>
        <Link to="/shop">
          <button
            className={`btn btn-${mainColor}${darkTheme ? "" : "l"} px-5 py-3`}
          >
            {t("shop_now")}
          </button>
        </Link>
      </Container>
      {/* stats */}
      <Container className="my-2 my-lg-5 stats-home">
        <Row className="text-center row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
          <Col>
            <div className="p-2">
              <Cash className="text-danger h3 my-4 fs-1" />
              <h4 className="fw-bolder">{t("money_title")}</h4>
              <p>{t("money_subtitle")}</p>
            </div>
          </Col>
          <Col>
            <div className="p-2">
              <Headset className="text-primary h3 my-4 fs-1" />
              <h4 className="fw-bolder">{t("support_title")}</h4>
              <p>{t("support_subtitle")}</p>
            </div>
          </Col>
          <Col>
            <div className="p-2">
              <Truck className="text-warning h3 my-4 fs-1" />
              <h4 className="fw-bolder">{t("ship_title")}</h4>
              <p>{t("ship_subtitle")}</p>
            </div>
          </Col>
          <Col>
            <div className="p-2">
              <CreditCard className="text-success h3 my-4 fs-1" />
              <h4 className="fw-bolder">{t("payment_title")}</h4>
              <p>{t("payment_subtitle")}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
