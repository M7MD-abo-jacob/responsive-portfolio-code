import { Button } from "react-bootstrap";
import { BagDash, BagPlus, StarFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Item({ item }) {
  const darkTheme = useSelector((state) => state.general.isDarkTheme);
  const mainColor = useSelector((state) => state.general.mainColor);
  const cart = useSelector((state) => state.cart.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    // <Link
    //   className="item col-sm-12 col-md-6 col-lg-4 col-xl-3"
    //   to={{
    //     pathname: `/product/${item.id}`,
    //   }}
    // >
    <div className="item col-12 col-md-6 col-lg-4 mb-2">
      <div
        role="button"
        className={`card p-0 cursor-pointer bg-gradient border-${mainColor}${
          darkTheme ? "" : "l"
        } ${darkTheme ? "bg-dark text-light" : "bg-light text-dark"}`}
        onClick={() => {
          navigate(`/product/${item.id}`);
        }}
      >
        <img
          loading="lazy"
          src={`${item.image}`}
          alt={item.title}
          className="card-img-top"
          style={{ width: "100%" }}
        />
        <div className="card-body d-flex flex-column justify-content-between align-content-end px-1 py-0">
          <div className="card-footer p-2">
            <h4 className="card-title mb-1 p-1">{item.title}</h4>
            {/* star rating */}
            <div className="d-flex align-items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="cursor-pointer mb-2">
                  {
                    <StarFill
                      className={`${
                        Math.round(item.rating.rate) > i
                          ? `text-${mainColor}${darkTheme ? "" : "l"}`
                          : "text-muted"
                      }`}
                      fontSize="15px"
                    />
                  }
                </span>
              ))}
              <span className="mx-3">({item.rating.rate})</span>
            </div>
            <div className="d-flex flex-sm-row justify-content-between align-items-center px-1">
              <p
                className={`price text-center d-block mb-1 text-${mainColor}${
                  darkTheme ? "" : "l"
                }`}
              >
                <span className="fs-3">
                  {"$" + item.price.toString().split(".")[0]}
                </span>
                {"."}
                <span className="fs-5">
                  {item.price.toFixed(2).toString().split(".")[1]}
                </span>
              </p>
              {cart.findIndex((prod) => prod.id === item.id) > -1 ? (
                <Button
                  variant="danger"
                  className="px-4 py-2 d-block align-self-stretch bg-gradient"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(removeFromCart(item));
                  }}
                >
                  <BagDash className="fs-4" />
                </Button>
              ) : (
                <Button
                  variant={`${mainColor}${darkTheme ? "" : "l"}`}
                  className={`px-4 py-2 d-block align-self-stretch`}
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addToCart({ ...item, count: 1 }));
                  }}
                >
                  <BagPlus className="fs-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
}

export default Item;
