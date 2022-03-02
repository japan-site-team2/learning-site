import React from 'react';
import { Grid } from '@mui/material';
import Category from './category';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import ListCategory from '../listCategory';

// import { categoriesState$ } from '../../redux/selectors';

const filter = createFilterOptions();
const test=[
  {
    "_id": "6136223805530ee4f7690103", 
    "email": "thang5@gmail.com", 
    "name": "thang1", 
    "password": "sdsa"
  }, 
  {
    "_id": "613625f105530ee4f7690110", 
    "email": "thang5@gmail.com", 
    "name": "thang2", 
    "password": "sdsa"
  }, 
  {
    "_id": "6136270205530ee4f7690114", 
    "email": "thang5@gmail.com", 
    "name": "thang3", 
    "password": "sdsa"
  }, 
  {
    "_id": "6136281405530ee4f7690115", 
    "email": "thang5@gmail.com", 
    "name": "thang5", 
    "password": "sdsa"
  }
]

export default function Categories() {
  const [value, setValue] = React.useState(null);
 
  return (
    <Grid container>
      <Grid container style={{ alignItems: 'center'}}>
        <Grid item md={4} xs={9} >
          <div>
            <Stack spacing={2} sx={{ width: 'calc( 100% - 10px )'}}>
              <Autocomplete
                style={{marginLeft:'10px'}}
                value={value}
                onChange={(event, newValue) => {
                  if (typeof newValue === 'string') {
                    setValue({
                      name: newValue,
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setValue({
                      name: newValue.inputValue,
                    });
                  } else {
                    setValue(newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some((option) => inputValue === option.name);
                  if (inputValue !== '' && !isExisting) {
                    filtered.push({
                      inputValue,
                      name: `Add "${inputValue}"`,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                options={test.map((option) => option)}
                getOptionLabel={(option) => {
                  // Value selected with enter, right from the input
                  if (typeof option === 'string') {
                    return option;
                  }
                  // Add "xxx" option created dynamically
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  // Regular option
                  return option.name;
                }}
                renderOption={(props, option) => <li {...props}>{option.name}</li>}
                freeSolo
                renderInput={(params) => (
                  <TextField fullWidth {...params} label="Tìm kiếm chủ đề"  />   
                )}
              /> 
            </Stack>
          </div>
        </Grid>
        <Grid item md={8} xs={3} style={{display: 'flex', justifyContent: 'flex-end', position: 'relative'}}>
          <ListCategory/>
        </Grid>
      </Grid>
      <Grid container>
        {value ? 
          <Grid item lg={4} md={6} style={{padding: '10px'}} >
            <Category category={value} />
          </Grid>
          : test.map((category) => (<Grid item style={{padding: '10px'}} lg={4} md={6} key={category._id}>
            <Category category={category} nameCategory={category.name} />
          </Grid>))} 
      </Grid>
    </Grid>
  )
}