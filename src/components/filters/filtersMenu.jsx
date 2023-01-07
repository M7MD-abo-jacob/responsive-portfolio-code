import React from "react";
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Row,
  ToggleButton,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  Search,
  SortAlphaDown,
  SortAlphaUp,
  SortDownAlt,
  SortUpAlt,
  StarFill,
} from "react-bootstrap-icons";
import {
  categorize,
  sortByName,
  sortByPrice,
  withRating,
  clearFilters,
  setSearchQ,
} from "../../redux/filterSlice";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const FiltersMenu = ({ handleClose }) => {
  const { t } = useTranslation();
  const darkTheme = useSelector((state) => state.general.isDarkTheme);
  const mainColor = useSelector((state) => state.general.mainColor);
  const language = useSelector((state) => state.general.language);
  const products = useSelector((state) => state.products.value);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let categories = products
    ? products.map((p) => p.category).filter((v, i, a) => a.indexOf(v) === i)
    : [];

  return (
    <>
      {" "}
      <h3 className="d-none fw-bolder d-lg-block mb-3">
        {t("filter_and_sort")}
      </h3>
      <Row
        className="align-items-center d-flex justify-content-center mb-lg-4"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        {/* search */}
        <Col xs={12} className="align-self-center">
          <Form
            className="d-flex d-lg-none mb-3 align-self-center position-relative"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/shop");
              handleClose();
            }}
          >
            <Form.Control
              type="text"
              placeholder={t("search_placeholder")}
              className={`me-2 border-${mainColor}${darkTheme ? "" : "l"} `}
              aria-label="search"
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
                handleClose();
              }}
            >
              <Search className="fs-4" />
            </Button>
          </Form>
        </Col>
        {/* category */}
        <Col xs={12} md={6} lg={12}>
          <Form.Group className="mb-2">
            {t("category")}
            <DropdownButton
              variant={`outline-${mainColor}${darkTheme ? "" : "l"}`}
              className="d-inline mx-2"
              id="dropdown-basic-button"
              title={filters.category}
            >
              <Dropdown.Item
                onClick={() => {
                  dispatch(categorize("all"));
                }}
              >
                all
              </Dropdown.Item>
              {categories.map((obj, index, list) => (
                <Dropdown.Item
                  key={index}
                  onClick={(obj) => {
                    console.log(list[index]);
                    dispatch(categorize(list[index]));
                  }}
                >
                  {obj}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={12}>
          {/* by rating */}
          <Form.Label>
            {t("rating")}
            {[...Array(5).keys()].map((index, i) => {
              return (
                <span
                  role="button"
                  className="p-1"
                  key={index}
                  onClick={(index) => {
                    dispatch(withRating(i));
                  }}
                >
                  <StarFill
                    fontSize="15px"
                    className={
                      filters.withRating > i
                        ? `text-${mainColor}${darkTheme ? "" : "l"}`
                        : "text-muted"
                    }
                  />
                </span>
              );
            })}
          </Form.Label>
        </Col>
      </Row>
      {/* by name asc */}
      <Form dir={language === "ar" ? "rtl" : "ltr"}>
        <h4>{t("sort")}</h4>
        <Row>
          <ToggleButton
            type="radio"
            variant={`outline-${mainColor}${darkTheme ? "" : "l"}`}
            name="sort"
            id="n-asc"
            value={filters.sortByName === "a"}
            checked={filters.sortByName === "a"}
            onChange={() => dispatch(sortByName("a"))}
          >
            <SortAlphaDown className="fs-3" /> {t("by_name_a")}
          </ToggleButton>
          <ToggleButton
            type="radio"
            variant={`outline-${mainColor}${darkTheme ? "" : "l"}`}
            name="sort"
            id="n-des"
            value={filters.sortByName === "d"}
            checked={filters.sortByName === "d"}
            onChange={() => dispatch(sortByName("d"))}
          >
            <SortAlphaUp className="fs-3" /> {t("by_name_d")}
          </ToggleButton>
          <ToggleButton
            type="radio"
            variant={`outline-${mainColor}${darkTheme ? "" : "l"}`}
            name="sort"
            id="p-asc"
            value={filters.sortByPrice === "a"}
            checked={filters.sortByPrice === "a"}
            onChange={() => dispatch(sortByPrice("a"))}
          >
            <SortDownAlt className="fs-3" /> {t("by_price_a")}
          </ToggleButton>
          <ToggleButton
            type="radio"
            variant={`outline-${mainColor}${darkTheme ? "" : "l"}`}
            name="sort"
            id="p-des"
            value={filters.sortByPrice === "d"}
            checked={filters.sortByPrice === "d"}
            onChange={() => dispatch(sortByPrice("d"))}
          >
            <SortUpAlt className="fs-3" /> {t("by_price_d")}
          </ToggleButton>
        </Row>
      </Form>
      <Button
        variant={`${mainColor}${darkTheme ? "" : "l"}`}
        onClick={() => dispatch(clearFilters())}
        className="mt-2"
      >
        {t("reset_filters")}
      </Button>
    </>
  );
};

export default FiltersMenu;
