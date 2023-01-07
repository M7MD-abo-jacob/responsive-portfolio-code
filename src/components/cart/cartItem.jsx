import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  plusOne,
  minusOne,
  setNum,
} from "../../redux/cartSlice";
import { Dash, Plus, Trash } from "react-bootstrap-icons";
import { Button, Col, Row } from "react-bootstrap";

function CartItem(props) {
  const product = props.product;
  const cart = useSelector((state) => state.cart.value);
  const mainColor = useSelector((state) => state.general.mainColor);
  const darkTheme = useSelector((state) => state.general.isDarkTheme);
  const dispatch = useDispatch();

  return (
    <Row className="my-2 h-100 d-flex align-items-center justify-content-between">
      {/* img */}
      <Col xs={3} className=" mb-4 mb-0">
        <div
          className="bg-image hover-overlay hover-zoom ripple rounded"
          data-mdb-ripple-color="light"
        >
          <img src={product.image} className="w-75 h-90" alt={product.title} />
        </div>
      </Col>
      {/* img over */}

      {/* title and quantity */}
      <Col
        xs={6}
        className="mb-0 d-flex h-100 flex-column justify-content-center align-items-stretch"
        style={{ maxHeight: "auto" }}
      >
        <div className="mb-2">
          <p className="mb-0 fw-bold">{product.title}</p>
        </div>
        <div className="d-flex row align-items-center justify-content-between">
          <Col xs={3} className="px-0">
            <div
              className={`btn w-100 btn-${mainColor}${darkTheme ? "" : "l"} `}
              onClick={() => {
                dispatch(minusOne(product));
              }}
            >
              <Dash />
            </div>
          </Col>
          <Col xs={6} className="px-0">
            <input
              id="form1"
              min="0"
              name="quantity"
              value={product.count}
              onChange={(e) => {
                dispatch(setNum({ id: product.id, count: e.target.value }));
              }}
              type="number"
              className="form-control text-center"
            />
          </Col>
          <Col xs={3} className="px-0">
            <div
              className={`btn w-100 btn-${mainColor}${darkTheme ? "" : "l"} `}
              onClick={() => {
                dispatch(plusOne(product));
              }}
            >
              <Plus />
            </div>
          </Col>
        </div>
      </Col>

      {/* price and delete btn */}
      <Col xs={3} className="mb-0 d-flex flex-column align-items-center">
        <p className="text-center mb-0">
          <strong className="text-muted">${product.price.toFixed(2)}</strong>
        </p>
        <p className="text-center mb-1 fs-5">
          <strong>${(Number(product.price) * product.count).toFixed(2)}</strong>
        </p>
        <Button
          variant="danger"
          size="sm"
          className="cursor-pointer"
          data-mdb-toggle="tooltip"
          title="Remove item"
          onClick={() => {
            let i = cart.findIndex((object) => {
              return object.id === product.id;
            });
            if (i > -1) {
              dispatch(removeFromCart({ id: product.id }));
            } else {
              console.log("beeb! not found");
            }
          }}
        >
          <Trash className="fs-4" />
        </Button>
      </Col>
      <hr className="my-1" />
    </Row>
  );
}

export default CartItem;
