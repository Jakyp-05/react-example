import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

export default function SelectLabels() {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedOptions(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 420 }}>
        <Select
          multiple
          value={selectedOptions}
          onChange={handleChange}
          displayEmpty
          renderValue={(selected) => (
            selected.length === 0 ? <em>Все</em> : selected.map((item, index) => index + 1).join(', ')
          )}
          inputProps={{ 'aria-label': 'Without label' }}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 200,
              },
            },
          }}
        >
          <MenuItem value={1}>
            <Checkbox checked={selectedOptions.includes(1)} />
            <ListItemText primary="Ten" />
          </MenuItem>
          <MenuItem value={2}>
            <Checkbox checked={selectedOptions.includes(2)} />
            <ListItemText primary="Twenty" />
          </MenuItem>
          <MenuItem value={3}>
            <Checkbox checked={selectedOptions.includes(3)} />
            <ListItemText primary="Thirty" />
          </MenuItem>
          <MenuItem value={4}>
            <Checkbox checked={selectedOptions.includes(4)} />
            <ListItemText primary="Thirty" />
          </MenuItem>
          <MenuItem value={5}>
            <Checkbox checked={selectedOptions.includes(5)} />
            <ListItemText primary="Thirty" />
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
