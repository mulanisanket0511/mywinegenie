
import React, { useState } from 'react'
import { Box, Button, Grid, Card, Checkbox, FormControlLabel } from '@mui/material'
import './By_food.css'
import Title from '../titleview/Title'
import { useNavigate } from "react-router-dom";
import svgicon1 from "../../../asset/component/step2/bottle1step2.svg";
import svgicon2 from "../../../asset/component/step2/bottle2step2.svg";
import svgicon3 from "../../../asset/component/step3/bottle3step3.svg";
import svgicon4 from "../../../asset/component/step4/bottle4step4.svg";

const By_food = () => {
  const navigate = useNavigate()
  const [checked, setChecked] = useState({
    0: false,
    1: false,
    2: false,
    3: false
  });
  console.log(checked);
  const budget = ["<$15", "$15-$25", "$25-$50", "$50+"];
  const step1_value_arr = []
  const handleChange = (event, index) => {
    setChecked({ ...checked, [index]: event.target.checked })
  }
  const handlesubmitanswer = (e) => {
    for (let [key, value] of Object.entries(checked)) {
      if (value === true) {
        step1_value_arr.push(budget[key])
      }
    }
    localStorage.setItem("step1",JSON.stringify(step1_value_arr));
    navigate("/step-2")
  }
  return (
    <div>
      <Box sx={{ maxWidth: 390 }}>
        <Card variant="outlined">
          <Title />
          <div className='icon-food'>
            <img className="foodicon" src={svgicon1} alt="" srcset="" />
            <img className="foodicon" src={svgicon2} alt="" srcset="" />
            <img className="foodicon" src={svgicon3} alt="" srcset="" />
            <img className="foodicon" src={svgicon4} alt="" srcset="" />
          </div>
          <div className="question">
            <p classname="que"> Name your food pairing 
(please be as specific as possible [i.e. spicy chicken vinaloo])</p>
          </div>
          <div className='option'>
            {
              budget.map((value, index) => (
                <FormControlLabel key={index} control={<Checkbox color="primary"
                />}
                  onChange={(e) => (handleChange(e, index))}
                  value={value}
                  label={value}
                  name="wine_price"
                />
              ))
            }
          </div>
          <Grid item container justify="center" md={6} style={{ margin: "0 auto" }}>
            <Button
              className='submit-answer'
              variant="contained"
              type="submit"
              onClick={(e) => handlesubmitanswer(e)}
              size="large"
              fullWidth
            >
              <span className='submit'> Submit Answer </span>
            </Button>
          </Grid>
        </Card>
      </Box>
    </div>
  )

}

export default By_food