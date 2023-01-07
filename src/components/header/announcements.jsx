import { useState } from "react";
import { CloseButton, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Announcements = () => {
  const { t } = useTranslation();
  const [displayed, setDisplayed] = useState(true);

  return (
    <Container
      fluid
      className={`${
        displayed ? "d-block" : "d-none"
      } text-bg-secondary py-0 text-center fs-6 text-light`}
    >
      <Container>
        <Row className="w-100 align-items-center">
          <Col xs={10}>
            <small className="flex-grow-1">{t("announcement")}</small>
          </Col>
          <Col xs={1}>
            <CloseButton
              className="ps-auto flex-shrink-1"
              onClick={() => {
                setDisplayed(false);
              }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Announcements;
