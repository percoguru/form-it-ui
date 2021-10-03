import React from 'react';
import useStore from '../store/store';
import { Store } from '../types/types';
import CheckBox from './form-components/checkBox';
import TextBox from './form-components/textBox';
import Header from './header';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Paper, IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const buildComponent = () => {
  <Grid item xs={12}></Grid>;
};

const buildForm = () => {
  const { components } = useStore((state: Store) => state.form);

  for (let i = 0; i < components.length; i += 1) {
    const component = components[i];

    const { type } = component;
  }
};

export default function Form() {
  const arr = [];
  const form = useStore((state: Store) => state.form);
  const removeComponent = useStore((state: Store) => state.removeComponent);
  for (let i = 0; i < form.components.length; i += 1) {
    const { type } = form.components[i];
    if (type === 'CheckBox') {
      arr.push(
        <Paper>
          <Grid container spacing={2} xs={12}>
            <Grid item xs={10}>
              <CheckBox />
            </Grid>
            <Grid item xs={2}>
              <IconButton aria-label="Example" onClick={() => removeComponent(i)}>
                <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
              </IconButton>
              {/* <Button variant="text" onClick={() => removeComponent(i)}>
                Remove
              </Button> */}
            </Grid>
          </Grid>
        </Paper>,
      );
    } else {
      arr.push(
        <Paper>
          <Grid container spacing={2} xs={12}>
            <Grid item xs={10}>
              <TextBox />
            </Grid>
            <Grid item xs={2}>
              <IconButton aria-label="Example" onClick={() => removeComponent(i)}>
                <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
              </IconButton>
            </Grid>
          </Grid>
        </Paper>,
      );
    }
  }

  return (
    <Grid container xs={12}>
      <Header />
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
          width: '100%',
        }}
        noValidate
        autoComplete="off"
      >
        {arr}
      </Box>
    </Grid>
  );
}
