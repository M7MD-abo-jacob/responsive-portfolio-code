import React, { useEffect } from "react";
import {
  ChevronDoubleLeft,
  ChevronDoubleRight,
  Facebook,
  Linkedin,
  Twitter,
} from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setPageTop } from "../redux/generalSlice";
import "../assets/css/about.css";
import { aboutIcons, aboutPeople } from "../data/data";

const About = () => {
  const { t } = useTranslation();
  const mainColor = useSelector((state) => state.general.mainColor);
  const darkTheme = useSelector((state) => state.general.isDarkTheme);
  const language = useSelector((state) => state.general.language);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTop("about"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <section className="our-webcoderskull padding-lg ">
        <div className="container">
          <div className="row heading heading-icon">
            <h2 className="text-center fw-bold">{t("our_team")}</h2>
          </div>
          <ul className="row d-flex px-0 align-items-center">
            {aboutPeople.map((i) => (
              <li key={i.name} className="col-12 col-md-6 col-lg-3">
                <div
                  className="cnt-block equal-hight"
                  style={{ height: "349px" }}
                >
                  <figure>
                    <img
                      src={i.img}
                      className="img-responsive  "
                      alt="team member"
                    />
                  </figure>
                  <h3>
                    <a href="/about">{i.name}</a>
                  </h3>
                  <p>{t("freelancer")}</p>
                  <ul className="follow-us clearfix px-0">
                    <li key={8}>
                      <a href="/about">
                        <Facebook />
                      </a>
                    </li>
                    <li key={9}>
                      <a href="/about">
                        <Twitter />
                      </a>
                    </li>
                    <li key={10}>
                      <a href="/about">
                        <Linkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="what-we-do">
        <div className="container-fluid">
          <h2
            className={`section-title mb-2 h1 text-${mainColor}${
              darkTheme ? "" : "l"
            }`}
          >
            {t("what_we_do")}
          </h2>
          <p className="text-center text-muted h5">{t("lorem20")}</p>
          <div className="row mt-5">
            {aboutIcons.map((i, index) => {
              const Icon = i;
              return (
                <div
                  key={index}
                  className={`col-xs-12 col-sm-${
                    (index + 1) % 3 === 0 ? "12" : "6"
                  } col-md-4 col-lg-4 col-xl-4`}
                >
                  <div className="card">
                    <div className="card-block block-2 row">
                      <div className="col-auto">
                        <Icon
                          icon={i.icon}
                          className={`text-${mainColor}l display-4`}
                        />
                      </div>
                      <div className="col d-flex flex-column">
                        <h3 className="card-title-about">
                          {t("special_title")}
                        </h3>
                        <p className="card-text-about">{t("lorem20")}</p>
                        <a
                          href="/about"
                          title="Read more"
                          className="read-more"
                        >
                          {t("read_more")}
                          {language === "ar" ? (
                            <ChevronDoubleLeft />
                          ) : (
                            <ChevronDoubleRight />
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
