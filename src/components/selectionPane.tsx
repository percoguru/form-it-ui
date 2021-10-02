import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import useStore from '../store/store';
import { Store } from '../types/types';
import CheckBox from './form-components/checkBox';
import TextBox from './form-components/textBox';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidePane: {
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
    },
  }),
);

function SelectionPane() {
  const classes = useStyles();
  const addComponent = useStore((state: Store) => state.addComponent);
  return (
    <Grid container xs={12} className={classes.sidePane}>
      <Grid item xs={12}>
        <TextBox />
        <Button
          variant="contained"
          color="primary"
          onClick={() => addComponent('TextBox')}
          id="TextBox"
        >
          Add Text Field
        </Button>
      </Grid>
      <Grid item xs={12}>
        <CheckBox />
        <Button
          variant="contained"
          color="primary"
          onClick={() => addComponent('CheckBox')}
          id="CheckBox"
        >
          Add CheckBox
        </Button>
      </Grid>
    </Grid>
  );
}

export default SelectionPane;
