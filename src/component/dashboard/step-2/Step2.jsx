import { Box, Button, Card, Checkbox, FormControlLabel, Grid, Radio } from '@mui/material'
import React, { useState } from 'react'
import Title from '../titleview/Title'
import { useNavigate } from 'react-router-dom'
import svgicon1 from '../../../asset/component/step2/bottle1step2.svg'
import svgicon2 from '../../../asset/component/step2/bottle2step2.svg'
import './step2.css'

const Step2 = () => {
  const [checked, setChecked] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false
  });
  const type_of_wine = ["Red", "White", "Rose", "Sparkling", "Fortfield"];
  const step2_value_arr = []
  const handleChange = (event, index) => {
    setChecked({ ...checked, [index]: event.target.checked });
  }
  const navigate = useNavigate()
  const handlesubmitanswer = (e) => {
    for (let [key, value] of Object.entries(checked)) {
      if (value === true) {
        step2_value_arr.push(type_of_wine[key])
      }
    }
    localStorage.setItem("step2",JSON.stringify(step2_value_arr));
    navigate("/step-3")
  }
  return (
    <div>
      <Box sx={{ maxWidth: 390 }}>
        <Card variant="outlined">
          <Title />
          <div className='iconstep2'>
            <img className="iconimage" src={svgicon1} alt="" srcset="" />
            <img className="iconimage" src={svgicon2} alt="" srcset="" />

          </div>

          <div className="question">
            <p classname="questep2">What type of wine are you looking for? (check all that apply)</p>
          </div>
          <div className='optionstep2'>
            {
              type_of_wine.map((value, index) => (
                <FormControlLabel key={index} control={<Checkbox color="primary"
                />}
                  onChange={(e) => (handleChange(e, index))}
                  value={value}
                  label={value}
                  name="wine_type"
                />
              ))
            }
          </div>
          <Grid item container justify="center" md={6} style={{ margin: "0 auto" }}>
            <Button
              className='submit-answer2'
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

export default Step2