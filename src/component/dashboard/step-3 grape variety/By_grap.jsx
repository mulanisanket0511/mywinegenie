import {
  Box,
  Button,
  Card,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import Title from "../titleview/Title";
import { useNavigate } from "react-router-dom";
import svgicon1 from "../../../asset/component/step2/bottle1step2.svg";
import svgicon2 from "../../../asset/component/step2/bottle2step2.svg";
import svgicon3 from "../../../asset/component/step3/bottle3step3.svg";
import svgicon4 from "../../../asset/component/step4/bottle4step4.svg";
import "./By_grape.css";
import DropDownWithChips from "./DropDownWithChips";

const By_grape = () => {
  const [checked, setChecked] = React.useState("");

  const handleChange = (event) => {
    setChecked(event.target.value);
  };
  const navigate = useNavigate();
  const handlesubmitanswer = (e) => {
    const grapeData = {}
    JSON.parse(localStorage.getItem("step2")).map((value) => {
      grapeData[value] = localStorage.getItem(value)
      localStorage.removeItem(value)
    })
    console.log(grapeData);
    localStorage.setItem("grape-variety", JSON.stringify(grapeData))
    navigate("/result")
  };
  return (
    <div>
      <Box sx={{ maxWidth: 390 }}>
        <Card variant="outlined">
          <Title />
          <div className="iconstep2">
            <img className="iconimage" src={svgicon1} alt="" srcset="" />
            <img className="iconimage" src={svgicon2} alt="" srcset="" />
            <img className="iconimage" src={svgicon3} alt="" srcset="" />
            <img className="iconimage" src={svgicon4} alt="" srcset="" />
          </div>

          <div className="question">
            <p classname="questep2">
              Name popular grape varietals you’re looking to discover from
            </p>
          </div>
          {
            JSON.parse(localStorage.getItem("step2")).map((value) => (
              <DropDownWithChips grape={value} />
            ))
          }
          <Grid
            item
            container
            justify="center"
            md={6}
            style={{ margin: "0 auto" }}
          >
            <Button
              className="submit-answer3"
              variant="contained"
              type="submit"
              onClick={(e) => handlesubmitanswer(e)}
              size="large"
              fullWidth
            >
              <span className="submit"> Submit Answer </span>
            </Button>
          </Grid>
        </Card>
      </Box>
    </div>
  );
};

export default By_grape;
