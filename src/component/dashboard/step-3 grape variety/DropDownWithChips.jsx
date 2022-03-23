import { Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import React, { useState } from 'react'


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
const DropDownWithChips = ({ grape }) => {
    const names = ["Chardonnay","Riesling","Sauvignon Blanc","Pinot Gris","White Bland"]
    const [top, setTop] = useState([])
    localStorage.setItem(grape,JSON.stringify(top))
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setTop(
          typeof value === 'string' ? value.split(',') : value,
        );
      };
      const handleDelete = (e, index) => {
        top.splice(index, 1)
        setTop([...top])
      
      }
    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">{grape}</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    placeholder={grape}
                    value={top}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label={grape} />}
                    renderValue={(selected) => {
                        setTop(selected)
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
            <div className='px-4'>
            {top.map((value, index) => (
                value === undefined ? null : <Chip className="m-2" onDelete={(e) => (handleDelete(e, index))} key={value} label={value} />
            ))}
            </div>
        </div>
    )
}

export default DropDownWithChips