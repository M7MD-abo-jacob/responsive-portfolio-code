import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setPageTop } from "../redux/generalSlice";
import "../assets/css/support.css";
import { Button } from "react-bootstrap";

const CustomerService = () => {
  const { t } = useTranslation();
  const mainColor = useSelector((state) => state.general.mainColor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTop("customer"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h1 className="text-center fw-bold">{t("contact_us")}</h1>
      <div
        className={`container contact border border-3 border-${mainColor}l rounded-3`}
      >
        <div className="row">
          <div className={`col-md-3 bg-${mainColor}l text-light`}>
            <div className="contact-info">
              <img
                src="https://image.ibb.co/kUASdV/contact-image.png"
                alt="contact"
              />
              <h2>{t("contact_us")}</h2>
              <h4>{t("contact_us_sub")}</h4>
            </div>
          </div>
          <div className="col-md-9 main-contact-form">
            <div className="contact-form">
              <div className="form-group mb-3 w-100">
                <label className="control-label " for="fname">
                  {t("first_name")}
                </label>
                <div className=" ">
                  <input
                    type="text"
                    className="form-control w-100"
                    id="fname"
                    placeholder={t("enter_first_name")}
                    name="fname"
                  />
                </div>
              </div>
              <div className="form-group mb-3 w-100">
                <label className="control-label  " for="lname">
                  {t("last_name")}
                </label>
                <div className=" ">
                  <input
                    type="text"
                    className="form-control w-100"
                    id="lname"
                    placeholder={t("enter_last_name")}
                    name="lname"
                  />
                </div>
              </div>
              <div className="form-group mb-3 w-100">
                <label className="control-label  " for="email">
                  {t("email")}
                </label>
                <div className=" ">
                  <input
                    type="email"
                    className="form-control w-100"
                    id="email"
                    placeholder={t("enter_email")}
                    name="email"
                  />
                </div>
              </div>
              <div className="form-group mb-3 w-100">
                <label className="control-label  " for="comment">
                  {t("comment")}
                </label>
                <div className=" ">
                  <textarea
                    className="form-control w-100"
                    rows="5"
                    id="comment"
                  ></textarea>
                </div>
              </div>
              <div className="form-group mb-3 w-100">
                <div className="col-sm-offset-2  ">
                  <Button variant={mainColor}>{t("submit")}</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerService;
