import { Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import React from 'react'

const DropDownWithChips = ({ grape }) => {
    const [topRed, setTopRed] = useState([])
    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">{grape}</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={topRed}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label={grape} />}
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
            {personName.map((value, index) => (
                value === undefined ? null : <Chip className="m-2" onDelete={(e) => (handleDelete(e, index))} key={value} label={value} />
            ))}
        </div>
    )
}

export default DropDownWithChips