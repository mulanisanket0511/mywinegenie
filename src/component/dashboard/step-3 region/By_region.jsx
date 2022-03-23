import {
  Box,
  Button,
  Card,
  Chip,
  Grid,
} from "@mui/material";
import React from "react";
import Title from "../titleview/Title";
import { useNavigate } from "react-router-dom";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import svgicon1 from "../../../asset/component/step2/bottle1step2.svg";
import svgicon2 from "../../../asset/component/step2/bottle2step2.svg";
import svgicon3 from "../../../asset/component/step3/bottle3step3.svg";
import svgicon4 from "../../../asset/component/step4/bottle4step4.svg";
import "./By_region.css";
import { useTheme } from "@emotion/react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Argentina", "Australia", "Austria", "Bulgaria", "Canada"];
const PopularRegion = ["French", "Itly", "California", "Spain", "BC", "Australia"];

const By_region = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  console.log(personName);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleDelete = (e, index) => {
    personName.splice(index, 1)
    setPersonName([...personName])
  }
  const navigate = useNavigate();
  const handlesubmitanswer = (e) => {
    localStorage.setItem("region", JSON.stringify(personName))
    navigate("/step-3/result");
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
              What region are you’re looking to discover wines from?
            </p>
          </div>
          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label">Region</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Region" />}
                renderValue={(selected) => {

                }}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                  >
                    {name}
                  </MenuItem>
                ))}
                <MenuItem
                >
                  <Button className=" submit-answer dropdown-btn">Submit Answer</Button>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="popular">
            {PopularRegion.map((value) => (
              <>
                {personName.includes(value) ?
                  <Button className="col-5 submit-answer disabled"
                    variant="contained"
                    size="large"
                  > {value}
                  </Button>
                  :
                  <Button className="col-5 submit-answer"
                    variant="contained"
                    onClick={(e) => (setPersonName([...personName, value]))}
                    size="large"
                  > {value}
                  </Button>
                }
              </>
            ))}
          </div>
          <div className="px-4 mt-4">
            {personName.map((value, index) => (
              value === undefined ? null : <Chip className="m-2" onDelete={(e) => (handleDelete(e, index))} key={value} label={value} />
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
              className="submitanswerstep4"
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

export default By_region;
