import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Card,
  Checkbox,
  FormControlLabel,
  Input,
  Select,
  MenuItem,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import "./By_food.css";
import Title from "../titleview/Title";
import { useNavigate } from "react-router-dom";
import svgicon1 from "../../../asset/component/step2/bottle1step2.svg";
import svgicon2 from "../../../asset/component/step2/bottle2step2.svg";
import svgicon3 from "../../../asset/component/step3/bottle3step3.svg";
import svgicon4 from "../../../asset/component/step4/bottle4step4.svg";

const By_food = () => {
  const navigate = useNavigate();
  const [input, setinput] = useState("");
  const [select, setselect] = useState("");
  const foodvariety = ["mild", "medium", "spicy", "very spicy"];

  const foodtype = ["beef", "pork", "game", "chicken", "fish","vaggies"];
  const handlesubmitanswer = () => {
    localStorage.setItem("food-pairing",select)
    navigate("/result")
  };

  return (
    <div>
      <Box sx={{ maxWidth: 390 }}>
        <Card variant="outlined">
          <Title />
          <div className="icon-food">
            <img className="foodicon" src={svgicon1} alt="" srcset="" />
            <img className="foodicon" src={svgicon2} alt="" srcset="" />
            <img className="foodicon" src={svgicon3} alt="" srcset="" />
            <img className="foodicon" src={svgicon4} alt="" srcset="" />
          </div>
          <div className="questionfood">
            Name your food pairing
            <p classname="que">
              (please be as specific as possible [i.e. spicy chicken vinaloo])
            </p>
          </div>
          <div className="food-input">
            {input===""?
            <input className="form-control" value={input}/>
            :
            <FormControl sx={{ m: 0, width:280 }}>
              <Select
                id=""
                className="classSelect"
                label=""
                value={select===""?input:(select+".")}
                onChange={(e) => setselect(e.target.value)}
              >
                <MenuItem className="d-none" value={input}>Spicy {input}</MenuItem>
                <MenuItem className="d-none" value={select+"."}>{select}</MenuItem>
                {foodvariety.map((item) => (
                  <MenuItem value={item +" "+ input}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>

            }
          </div>
          <div className="popular">
            {foodtype.map((value, index) => (
              <Button
                className="col-5 submit-answer"
                variant="contained"
                onClick={(e) => setinput(value)}
                size="large"
              >
                {value}
              </Button>
            ))}
          </div>
          <Grid
            item
            container
            justify="center"
            md={6}
            style={{ margin: "0 auto" }}
          >
            <Button
              className="submit-answer-food"
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

export default By_food;
