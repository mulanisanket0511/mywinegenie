import React from "react";
import logo from "../asset/image/headerlogo.png"
import "../component/header.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <div className="logo d-flex">
        <a title="thefront" href="/mywinegenie-react/">
          <img src={logo} style={{ height: 50, width: 50 }} />
        </a>
        {localStorage.getItem("user") ? (
          <div className="header-buttons text-end">
            <Button className="button mx-2" variant="contained">
              reset
            </Button>
            <Button
              className="button"
              variant="contained"
              onClick={handleLogout}
            >
              log out
            </Button>
          </div>
        ) : null}
      </div>
      <hr />
    </div>
  );
};

export default Header;
