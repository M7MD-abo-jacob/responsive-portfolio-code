import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { pages } from "../data/data";

const PageTop = () => {
  const i = useSelector((state) => state.general.pageTop);
  const { t } = useTranslation();

  return (
    <>
      {i === "nothing" ? (
        <></>
      ) : (
        <Container fluid className="page-top text-center mb-3">
          <Container>
            <Row className="align-items-center position-relative">
              <Col xs={4} className="page-top-text">
                <h1 className="fw-bold mb-3">{t(`${pages[i].title}`)}</h1>
                <h3>{t(`${pages[i].subtitle}`)}</h3>
              </Col>
              <Col xs={12} md={8}>
                <img
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className="w-75"
                  src={require(`../assets/img/${pages[i].img}.png`)}
                  alt="nothig of importance"
                />
              </Col>
            </Row>
          </Container>
        </Container>
      )}
    </>
  );
};

export default PageTop;
