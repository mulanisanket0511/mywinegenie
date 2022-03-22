import {
  Box,
  Button,
  Card,
  Checkbox,
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
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
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

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const names = ["Argentina", "Australia", "Austria", "Bulgaria", "Canada"];

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
  const handleDelete = (e,index) => {
      personName.splice(index,1)
      setPersonName([...personName])
  }
  const [checked, setChecked] = React.useState("");
  const navigate = useNavigate();
  const handlesubmitanswer = (e) => {
    
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
                  setPersonName(selected)
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
                  <button className="btn">Submit Answer</button>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="popular">
            <Button className="submit-answer"
              variant="contained"
              onClick={(e)=>(setPersonName([...personName,"France"]))}
              size="large"
            > france
            </Button>
          </div>
          {personName.map((value, index) => (
            value === undefined ? null : <Chip onDelete={(e) => (handleDelete(e, index))} key={value} label={value} />
          ))}
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