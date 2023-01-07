import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import RemoveFromCartBtn from "../components/buttons/removeFromCartBtn";
import { ArrowBarLeft, Dash, Plus, StarFill } from "react-bootstrap-icons";
import axios from "axios";
import Errors from "./errors";
import AddToCartBtn from "../components/buttons/addToCartBtn";
import { minusOne, plusOne } from "../redux/cartSlice";
import { useTranslation } from "react-i18next";
import { setPageTop } from "../redux/generalSlice";

function Product() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const language = useSelector((state) => state.general.language);
  const mainColor = useSelector((state) => state.general.mainColor);
  const darkTheme = useSelector((state) => state.general.isDarkTheme);
  const [err, setErr] = useState(null);
  const dispatch = useDispatch();

  const getProduct = (id) => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        setErr(err.message);
      });
  };
  const cart = useSelector((state) => state.cart.value);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setPageTop("nothing"));
    getProduct(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {err ? (
        <Errors message={err} />
      ) : !product ? (
        <Spinner
          animation="border"
          variant={`${mainColor}${darkTheme ? "" : "l"}`}
          style={{
            width: "50vw",
            height: "50vw",
          }}
        />
      ) : (
        <div>
          <Container className="py-2">
            <Row className="align-items-center flex-column flex-lg-row">
              <Col className="col-11 col-lg-5">
                <img
                  src={`${product.image}`}
                  alt={`${product.title}`}
                  className="product-img d-block mb-3 mb-md-4 h-25"
                />
              </Col>
              <Col className="col-11 col-lg-7">
                <Row className="d-flex flex-column mb-2">
                  <h3>{product.title}</h3>
                  <h5 className={`text-${mainColor}${darkTheme ? "" : "l"}`}>
                    {product.category}
                  </h5>
                  <p>{product.description}</p>
                  {/* rating and reviews */}
                  <div className="mb-4" dir={language === "ar" ? "rtl" : "ltr"}>
                    <div className="d-flex">
                      <p className="text-muted mb-2">{t("rating")}</p>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="cursor-pointer me-1">
                          {
                            <StarFill
                              className={`${
                                Math.round(product.rating.rate) > i
                                  ? `text-${mainColor}${darkTheme ? "" : "l"}`
                                  : "text-muted"
                              }`}
                              fontSize="15px"
                            />
                          }
                        </span>
                      ))}
                      <div className="mx-3">({product.rating.rate})</div>
                    </div>
                    <div className="text-muted mb-2">
                      {t("reviewed_by")}
                      <span
                        className={`text-${mainColor}${darkTheme ? "" : "l"}`}
                      >
                        {product.rating.count}
                      </span>{" "}
                      {t("people")}
                    </div>
                  </div>
                  {/* price and btn */}
                  <Container>
                    <Row className="flex-column flex-md-row align-items-center justify-content-between">
                      <Col
                        xs={12}
                        md={4}
                        className="d-flex align-items-center justify-content-center justify-content-md-start"
                      >
                        {/* price */}
                        <h5
                          className={`text-${mainColor}${darkTheme ? "" : "l"}`}
                        >
                          <span className="fs-1">
                            {"$" + product.price.toString().split(".")[0]}
                          </span>
                          {"."}
                          <span className="fs-5">
                            {product.price.toFixed(2).toString().split(".")[1]}
                          </span>
                        </h5>
                      </Col>
                      {cart.findIndex((prod) => prod.id === product.id) > -1 ? (
                        // qnt & remove
                        <Col
                          xs={12}
                          md={8}
                          className="d-flex align-items-center justify-content-center justify-content-md-end"
                        >
                          <Row className="d-flex align-items-center justify-content-center flex-row">
                            {/* qnt */}
                            <Col xs={6}>
                              <Row className="d-flex justify-content-end align-items-center">
                                {/* plus/minus */}
                                <Col xs={4} className="p-0">
                                  <Button
                                    variant={mainColor}
                                    className={`btn-${mainColor}`}
                                    onClick={() => {
                                      dispatch(minusOne(product));
                                    }}
                                  >
                                    <Dash />
                                  </Button>
                                </Col>
                                <Col xs={4} className="p-0 text-center">
                                  <div className="w-100 h3">
                                    {
                                      cart[
                                        cart.findIndex(
                                          (prod) => prod.id === product.id
                                        )
                                      ].count
                                    }
                                  </div>
                                </Col>
                                <Col xs={4} className="p-0">
                                  <Button
                                    variant={mainColor}
                                    className={`btn-${mainColor}`}
                                    onClick={() => {
                                      dispatch(plusOne(product));
                                    }}
                                  >
                                    <Plus />
                                  </Button>
                                </Col>
                              </Row>
                            </Col>
                            {/* remove */}
                            <Col xs={6}>
                              <RemoveFromCartBtn product={product} />
                            </Col>
                          </Row>
                        </Col>
                      ) : (
                        <Col
                          xs={8}
                          className="d-flex align-items-center justify-content-center justify-content-md-end"
                        >
                          <AddToCartBtn
                            product={product}
                            className="align-self-end"
                          />
                        </Col>
                      )}
                    </Row>
                  </Container>
                  <div className="d-flex justify-content-between w-100">
                    {/* btns */}
                  </div>
                  <Button
                    className=" col-auto d-flex align-self-center align-self-md-start  text-center align-items-center mt-4"
                    variant={`outline-${mainColor}${darkTheme ? "" : "l"}`}
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    <ArrowBarLeft className="mx-2" />
                    {t("back_to_shop")}
                  </Button>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </Container>
  );
}

export default Product;
