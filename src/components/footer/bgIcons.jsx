import React from "react";
import { Cart4 } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

function BgIcons() {
  const mainColor = useSelector((state) => state.general.mainColor);

  return (
    <div
      id="bg-icons"
      className="position-absolute overflow-hidden w-100 h-100 "
    >
      <Cart4
        className={`position-relative text-${mainColor}`}
        style={{
          width: "90px",
          height: "90px",
          left: "10%",
          top: "-40%",
          transform: "rotate(45deg)",
          opacity: "20%",
        }}
      />
      <Cart4
        className={`position-relative text-${mainColor}`}
        style={{
          width: "400px",
          height: "400px",
          left: "40%",
          top: "-30%",
          transform: "rotate(-25deg)",
          opacity: "20%",
        }}
      />
    </div>
  );
}

export default BgIcons;
