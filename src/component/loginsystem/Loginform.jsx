import React, { useState } from "react";
import logotitle from "../../asset/image/logowithname.png"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./loginform.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  const [user, setuser] = useState({ name: "", email: "" });
  const [errorState, seterrorState] = useState({
    nameErr: false,
    emailErr: false,
  });
  const navigate = useNavigate()
  const handleError = (e) => {
    if (user.name === "") {
      seterrorState({ nameErr: true, emailErr: false });
    } else if (user.email === "") {
      seterrorState({ nameErr: false, emailErr: true });
    } else {
      seterrorState({ nameErr: false, emailErr: false });
    }
  };
  const handleSubmit = () => {
    if (user.name === "" && user.email === "") {
      seterrorState({ nameErr: true, emailErr: true });
    }
    else{
    const userData = JSON.stringify(user)
    localStorage.setItem("user",userData)
    navigate("/step-1")
    }
  };
  return (
    <>
      <div className="loginpage">
        <div className="titlelogo">
          <img className="textlogo" width={"100%"} src={logotitle} alt="logo" />
        </div>
        <div className="input">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              error={errorState.nameErr ? true : null}
              className="mb-4"
              id="outlined-error-helper-text"
              label="First Name"
              onChange={(e) => {handleError();setuser({ ...user, name: e.target.value })}}
              helperText={errorState.nameErr ? "First name is required" : null}
            />
            <TextField
              error={errorState.emailErr ? true : null}
              id="outlined-error-helper-text"
              label="E-mail Address"
              onChange={(e) => {handleError();setuser({ ...user, email: e.target.value })}}
              helperText={errorState.emailErr ? "Email is required" : null}
            />
          </Box>
          <Button
            className="button"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 4, mb: 4 }}
            onClick={handleSubmit}
          >
            Continue
          </Button>

          <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary MuiTypography-alignCenter">
            © 2021 MyWineGenie. All rights reserved.
            <a href="mailto:info@mywinegenie.com">Contact us</a>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Loginform;
