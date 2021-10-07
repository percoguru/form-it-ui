import React, { useState } from 'react';
import useStore from '../store/store';
import { Store } from '../types/types';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Header() {
  const title = useStore((state: Store) => state.form.name);
  const [currentTitle, setCurrentTitle] = useState(title);
  const setTitle = useStore((state: Store) => state.setTitle);

  const handleChange = (event: any) => {
    setCurrentTitle(event.target.value);
  };

  return (
    <Grid container xs={12}>
      <Grid item xs={10}>
        <Box
          sx={{
            p: 2,
          }}
        >
          <TextField
            id="outlined-basic"
            label="Title"
            placeholder="Enter Your Title"
            variant="outlined"
            fullWidth
            color="secondary"
            onChange={handleChange}
            value={currentTitle}
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box
          sx={{
            p: 2,
          }}
        >
          <Button
            variant="text"
            onClick={() => {
              setTitle(currentTitle);
            }}
          >
            Save
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
