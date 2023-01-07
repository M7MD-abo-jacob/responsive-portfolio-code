import axios from "axios";
import { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Item from "../components/item";
import Errors from "./errors";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productsSlice";
import FiltersMenu from "../components/filters/filtersMenu";
import FilterModal from "../components/filters/filterModal";
import { useTranslation } from "react-i18next";
import { setPageTop } from "../redux/generalSlice";

function Shop() {
  const { t } = useTranslation();
  const [err, setErr] = useState(null);
  const products = useSelector((state) => state.products.value);
  const filters = useSelector((state) => state.filters);
  const mainColor = useSelector((state) => state.general.mainColor);
  const darkTheme = useSelector((state) => state.general.isDarkTheme);
  const dispatch = useDispatch();

  const filterData = () => {
    let finalProducts = products;
    if (
      filters ===
      {
        category: "all",
        withRating: 0,
        searchQ: "",
        sortByName: false,
        sortByPrice: false,
      }
    ) {
      return products;
    }
    if (filters.category !== "all") {
      finalProducts = finalProducts.filter(
        (p) => p.category === filters.category
      );
    }
    if (filters.withRating > 0) {
      finalProducts = finalProducts.filter(
        (p) => Number(p.rating.rate) >= Number(filters.withRating)
      );
    }
    if (filters.searchQ.length > 0) {
      finalProducts = finalProducts.filter((p) =>
        p.title.toLowerCase().includes(filters.searchQ.toLowerCase())
      );
    }
    if (filters.sortByName) {
      finalProducts = finalProducts.slice().sort((p1, p2) => {
        return filters.sortByName === "a"
          ? p1.title < p2.title
            ? -1
            : p1.title > p2.title
            ? 1
            : 0
          : p1.title < p2.title
          ? 1
          : p1.title > p2.title
          ? -1
          : 0;
      });
    }
    if (filters.sortByPrice) {
      finalProducts = finalProducts.slice().sort((p1, p2) => {
        return filters.sortByPrice === "a"
          ? p1.price < p2.price
            ? -1
            : p1.price > p2.price
            ? 1
            : 0
          : p1.price < p2.price
          ? 1
          : p1.price > p2.price
          ? -1
          : 0;
      });
    }
    return finalProducts;
  };

  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(setProducts(response.data));
      })
      .catch((err) => {
        console.log(err);
        setErr(err.message);
      });
  };

  useEffect(() => {
    dispatch(setPageTop("nothing"));
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container id="shop" className="">
      <div
        className="position-fixed mb-3 mb-lg-5"
        style={{
          bottom: "0",
          left: "10%",
          zIndex: "1000",
          height: "",
        }}
      >
        <FilterModal />
      </div>
      <Row className="d-flex justify-content-end">
        <Col xs={12} lg={3} className="d-none d-lg-block">
          <div
            className="position-sticky"
            style={{
              top: "4rem",
              zIndex: "1000",
              height: "calc(100vh - 4rem)",
            }}
          >
            <FiltersMenu />
          </div>
        </Col>
        {err ? (
          <Errors message={err} />
        ) : !products ? (
          <Spinner
            animation="border"
            variant={`${mainColor}${darkTheme ? "" : "l"}`}
            style={{
              width: "30vw",
              height: "30vw",
              textAlign: "center",
              margin: "0 auto",
            }}
          />
        ) : (
          <Col xs={12} lg={9}>
            {filterData().length <= 0 ? (
              <Col>
                <h1 className="h1 text-center p-2 mt-5">
                  {t("no_products_found")}
                </h1>
              </Col>
            ) : (
              <Col>
                <Row>
                  {filterData().map((p) => {
                    return <Item item={p} key={p.id} />;
                  })}
                </Row>
              </Col>
            )}
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Shop;
