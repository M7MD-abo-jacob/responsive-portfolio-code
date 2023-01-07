import axios from "axios";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { Facebook, Twitter } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLoggedIn, setPageTop } from "../redux/generalSlice";

function LogIn() {
  const { t } = useTranslation();
  const [err, setErr] = useState(null);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  let [username, setUsername] = useState("johnd");
  let [password, setPassword] = useState("m38rmF$");
  const [showErr, setShowErr] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const signin = (e) => {
    e.preventDefault();
    setloading(true);
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
        setloading(false);
        dispatch(setLoggedIn(true));
      })
      .catch((err) => {
        setErr(err);
        setloading(false);
        setShowErr(true);
      });
  };

  useEffect(() => {
    dispatch(setPageTop("nothing"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid className="p-3 my-5">
      {showErr && (
        <Alert
          dismissible
          variant="danger"
          onClose={() => setShowErr(false)}
          className="position-fixed top-25 start-25 end-25"
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <hr />
          <p>{err.message}</p>
          <p>reload the page and don't change the usename or password</p>

          <Button onClick={() => setShowErr(false)} variant="outline-danger">
            Close
          </Button>
        </Alert>
      )}
      <Row>
        <Col col="10" md="6" className="mb-3">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="log in"
          />
        </Col>

        <Col col="4" md="6">
          <Form onSubmit={(e) => signin(e)}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>{t("username")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("username_placeholder")}
                value={username}
                onChange={(e) => handleUsernameChange(e)}
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{t("password")}</Form.Label>
              <Form.Control
                type="password"
                placeholder={t("password_placeholder")}
                value={password}
                onChange={(e) => handlePasswordChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                className="messed-up-checkbox"
                type="checkbox"
                label={t("remember_me")}
                checked
                onChange={() => {}}
              />
              <Button
                variant="link"
                type="submit"
                onClick={function () {
                  alert("TOO BAD! LOL");
                }}
              >
                {t("forgot_password")}
              </Button>
            </Form.Group>
            <Button variant="primary" type="submit">
              {loading ? (
                <div className="d-flex align-items-center">
                  <Spinner
                    className="me-2"
                    animation="border"
                    variant="light"
                    size="sm"
                  />
                  {"  "}
                  {t("loadig")}
                </div>
              ) : (
                t("login")
              )}
            </Button>
          </Form>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">{t("or")}</p>
          </div>

          <Button
            className="mb-4 w-100"
            size="lg"
            style={{ backgroundColor: "#3b5998" }}
            onClick={function () {
              alert("You can't, sorry!");
            }}
          >
            <Facebook className="fs-3 mx-2" /> {t("continue_facebook")}
          </Button>

          <Button
            className="mb-4 w-100"
            size="lg"
            style={{ backgroundColor: "#55acee" }}
            onClick={function () {
              alert("I said you can't!");
            }}
          >
            <Twitter className="fs-3 mx-2" /> {t("continue_twitter")}
          </Button>
          <p className="mb-0">
            {t("dont_have_acc")}
            <Button
              variant="link"
              className="fw-bold"
              onClick={function () {
                alert("Haven't done that as well.");
              }}
            >
              {t("sign_up")}
            </Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default LogIn;
