import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Funnel } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import FiltersMenu from "./filtersMenu";

const FilterModal = () => {
  const { t } = useTranslation();
  const mainColor = useSelector((state) => state.general.mainColor);
  const darkTheme = useSelector((state) => state.general.isDarkTheme);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        variant={`${mainColor}${darkTheme ? "l text-white" : " text-dark"}`}
        className={`d-block d-lg-none border-${
          darkTheme ? "light" : "dark"
        } border border-2 d-flex align-items-center`}
        style={{
          bottom: "0",
          left: "10%",
          zIndex: "1000",
          height: "",
        }}
      >
        <Funnel className={`fs-1 display-1 fw-bolder mx-1`} />
        {/* <br /> */}
        {t("filters")}
      </Button>

      <Modal show={show} onHide={handleClose} className="py-4">
        <Modal.Header
          closeButton
          className={`
          bg-${mainColor}${darkTheme ? "l text-light" : " text-dark"}`}
        >
          <Modal.Title className="h2 mb-0 fw-bold">
            {t("filter_and_sort")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={`bg-${
            darkTheme ? "dark text-white" : ""
          } border border-${mainColor} rounded-bottom`}
        >
          <FiltersMenu handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FilterModal;
