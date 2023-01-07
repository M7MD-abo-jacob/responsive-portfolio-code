import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { links } from "../../data/data";

const Navigation = () => {
  const mainColor = useSelector((state) => state.general.mainColor);
  const { t } = useTranslation();
  return (
    <Container
      fluid
      className="mt-0 mb-3 d-none d-lg-block bg-secondary text-center"
    >
      <Container>
        <Row>
          {links.map((link) => (
            <Col xs={3} className="py-2 h5 mb-0">
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  isActive ? `text-${mainColor}` : "text-light"
                }
              >
                {t(`${link.name}`)}
              </NavLink>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Navigation;
