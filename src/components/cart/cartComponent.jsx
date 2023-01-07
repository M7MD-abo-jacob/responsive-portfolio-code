import { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { clearAll } from "../../redux/cartSlice";
import { setCartIsOpen } from "../../redux/generalSlice";
import CartItem from "./cartItem";

// TODO // clear all

function CartComponent() {
  const { t } = useTranslation();
  const cartIsOpen = useSelector((state) => state.general.cartIsOpen);
  const [items, setItems] = useState(null);
  const cart = useSelector((state) => state.cart.value);
  const darkTheme = useSelector((state) => state.general.isDarkTheme);
  const mainColor = useSelector((state) => state.general.mainColor);
  const language = useSelector((state) => state.general.language);
  const dispatch = useDispatch();
  let data = [];

  let prices = cart
    .reduce((accumulator, object) => {
      return accumulator + object.price * object.count;
    }, 0)
    .toFixed(2);

  const showItems = () => {
    cart.forEach((product, index) => {
      data.push(<CartItem key={index} product={product} />);
    });
    setItems(data);
  };

  useEffect(() => {
    showItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <div
      id="cart-container"
      className={`cart-container ${cartIsOpen ? "show" : "hide-cart"}`}
    >
      <Col
        className="cart-bg"
        onClick={() => {
          dispatch(setCartIsOpen(false));
        }}
      ></Col>
      <div
        className={`rounded cart col ${cartIsOpen ? "show-cart" : "hide-cart"}`}
      >
        <Card
          dir={language === "ar" ? "rtl" : "ltr"}
          className={`mb-1 ${darkTheme ? "bg-dark text-light" : "text-dark"}`}
        >
          {/* cart header */}
          <CardHeader
            dir="ltr"
            className={`shadow position-sticky top-0 py-3 row justify-content-between align-items-center bg-${mainColor}${
              darkTheme ? "l" : ""
            }`}
          >
            <h5 className="mb-0 col-auto fw-bold">
              {t("cart")} - {cart.length} {t("cart_items")}
            </h5>
            <Button
              className="btn-close col-1 px-2"
              onClick={() => {
                dispatch(setCartIsOpen(false));
              }}
            ></Button>
          </CardHeader>
          {/* cart body */}
          {cart.length === 0 ? (
            <div className="card-body px-1 fw-bold">{t("cart_empty")}</div>
          ) : (
            <>
              <div className="card-body px-1">{items && items}</div>
              <div className="d-flex justify-content-center">
                <Button
                  variant={`${mainColor}${darkTheme ? "" : "l"}`}
                  className="w-75 mb-4"
                  onClick={() => dispatch(clearAll())}
                >
                  {t("clear_all")}
                </Button>
              </div>
            </>
          )}
        </Card>
        {/* cart summary */}

        {cart.length > 0 && (
          <div className="col">
            <Card
              dir={language === "ar" ? "rtl" : "ltr"}
              className={`mb-4 ${
                darkTheme ? "bg-dark text-light" : "text-dark"
              }`}
            >
              <CardHeader className="py-3">
                <h5 className="mb-0 fw-bold">{t("summary")}</h5>
              </CardHeader>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li
                    className={`list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 ${
                      darkTheme ? "bg-dark text-light" : "text-dark"
                    }`}
                  >
                    {t("summary_products")}
                    <span>${prices}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span>{t("summary_shipping")}</span>
                    <span>${prices > 100 ? "0" : "5"}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>{t("summary_total")}</strong>
                    </div>
                    <span>
                      <strong>
                        ${(Number(prices) + (prices > 100 ? 0 : 5)).toFixed(2)}
                      </strong>
                    </span>
                  </li>
                </ul>

                <Button
                  variant={`${mainColor}${darkTheme ? "" : "l"}`}
                  size="lg"
                >
                  {t("checkout")}
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartComponent;
