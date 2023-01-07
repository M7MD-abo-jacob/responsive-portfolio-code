import { Button } from "react-bootstrap";
import { BagDash } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

function RemoveFromCartBtn({ product }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);

  const handleRemove = () => {
    let i = cart.findIndex((object) => {
      return object.id === product.id;
    });
    if (i > -1) {
      dispatch(removeFromCart({ id: product.id }));
    } else {
      console.log("beeb! not found!");
    }
  };

  return (
    <Button
      className="d-flex align-items-center"
      variant="danger"
      onClick={() => {
        handleRemove();
      }}
    >
      <div>{t("remove_from_cart")}</div>
      <BagDash className="fs-1" />
    </Button>
  );
}

export default RemoveFromCartBtn;
