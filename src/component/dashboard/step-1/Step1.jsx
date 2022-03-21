
import React, { useState } from 'react'
import { Box, Button, Grid, Card, Checkbox, FormControlLabel } from '@mui/material'
import './step1.css'
import Title from '../titleview/Title'
import svgicon from "../../../asset/component/step1/bottle.svg"
import { useNavigate } from "react-router-dom";

const Step1 = () => {
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
  const navigate = useNavigate()
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
          <div className='icon'>
            <img src={svgicon} alt="" srcset="" />
          </div>
          <div className="question">
            <p classname="que"> How much do you want to spend on a bottle of wine? (check all that apply)</p>
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

export default Step1