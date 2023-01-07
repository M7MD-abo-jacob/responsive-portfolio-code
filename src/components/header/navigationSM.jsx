import React from "react";
import { Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { links } from "../../data/data";

const NavigationSM = ({ setExpanded, iconStyle }) => {
  const darkTheme = useSelector((state) => state.general.isDarkTheme);
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="d-block d-lg-none">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Nav.Item
            role="button"
            className={`py-2 d-flex w-100 ${
              darkTheme ? "text-light" : "text-dark"
            }`}
            onClick={() => {
              setExpanded(false);
              navigate(`${link.link}`);
            }}
          >
            <Icon icon={link.icon} style={iconStyle} />
            <h2 className="mx-3 mb-0">{t(`${link.name}`)}</h2>
          </Nav.Item>
        );
      })}
    </div>
  );
};

export default NavigationSM;
