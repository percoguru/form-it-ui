import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Checkbox } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dynamicForm: {
      flexGrow: 0,
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: theme.spacing(2),
    },
  }),
);

export default function CheckBox() {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.dynamicForm}>
      <Checkbox {...label} disabled />
    </Grid>
  );
}
