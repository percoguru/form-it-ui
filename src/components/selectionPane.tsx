import React from 'react';
import { Button, Grid, IconButton } from '@mui/material';
import useStore from '../store/store';
import { Store } from '../types/types';
import CheckBox from './form-components/checkBox';
import TextBox from './form-components/textBox';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

function SelectionPane() {
  const addComponent = useStore((state: Store) => state.addComponent);
  return (
    <Box sx={{ p: 1, width: '100%' }}>
      <Grid container xs={12}>
        <Grid item xs={10}>
          <Box
            sx={{
              p: 1,
            }}
          >
            <TextBox />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              p: 1,
            }}
          >
            <IconButton aria-label="Example" onClick={() => addComponent('TextBox')}>
              <AddIcon></AddIcon>
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box
            sx={{
              p: 1,
            }}
          >
            <CheckBox />
          </Box>
        </Grid>

        <Grid item xs={2}>
          <Box
            sx={{
              p: 1,
            }}
          >
            <IconButton aria-label="Example" onClick={() => addComponent('CheckBox')}>
              <AddIcon></AddIcon>
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <IconButton>
          <SaveIcon></SaveIcon>
        </IconButton>
      </Grid>
    </Box>
  );
}

export default SelectionPane;
