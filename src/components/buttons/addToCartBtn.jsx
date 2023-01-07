import { Button } from "react-bootstrap";
import { BagPlus } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function AddToCartBtn({ product }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const mainColor = useSelector((state) => state.general.mainColor);
  const darkTheme = useSelector((state) => state.general.isDarkTheme);

  return (
    <Button
      variant={`${mainColor}${darkTheme ? "" : "l"}`}
      className="d-flex align-items-center"
      onClick={() => {
        dispatch(addToCart({ ...product, count: 1 }));
      }}
    >
      <div>{t("add_to_cart")}</div> <BagPlus className="fs-1 mx-1" />
    </Button>
  );
}

export default AddToCartBtn;
