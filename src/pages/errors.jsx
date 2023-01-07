import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setPageTop } from "../redux/generalSlice";

function Errors(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTop("error"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container text-center d-flex flex-column p-5 g-5">
      <h1 className="fw-bold h1">{props.message}</h1>
      <h1 className="fw-bold h1">{t("err_title")}</h1>
      <h3>{t("err_subtitle")}</h3>
      <h3>{t("err_subtitle2")}</h3>
    </div>
  );
}

export default Errors;
