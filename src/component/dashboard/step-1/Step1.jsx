
import React from 'react'
import { Box, Button,Grid, Card, Checkbox, FormControlLabel } from '@mui/material'
import './step1.css'
import Title from '../titleview/Title'
import svgicon from "../../../asset/component/step1/bottle.svg"
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }
  const navigate = useNavigate()
  const handlesubmitanswer = (e) =>{
     navigate("/step-2")
  }
  return (
    <div>
      <Box sx={{ maxWidth: 390}}>
      <Card variant="outlined">
       <Title/>
       <div className='icon'>
       <img src={svgicon} alt="" srcset="" />
       </div>
       <div className="question">
         <p classname="que"> How much do you want to spend on a bottle of wine? (check all that apply)</p>
       </div>
       <div className='option'>
       <FormControlLabel control={<Checkbox color="primary"             
            />} 
            onChange={(e) => (handleChange)} 
            
            label="<$15"       
            name="wine_price"        
            />
            <FormControlLabel control={<Checkbox color="primary"             
            />} 
            onChange={(e) => (handleChange)} 
            
            label="$15-$25"       
            name="wine_price"        
            />
            <FormControlLabel control={<Checkbox color="primary"             
            />} 
            onChange={(e) => (handleChange)} 
            
            label="$25-$50"       
            name="wine_price"        
            />
            <FormControlLabel control={<Checkbox color="primary"             
            />} 
            onChange={(e) => (handleChange)} 
            
            label="$50+"       
            name="wine_price"        
            />
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