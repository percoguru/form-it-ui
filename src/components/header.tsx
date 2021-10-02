import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import useStore from '../store/store';
import { Store } from '../types/types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      // padding: theme.spacing(2)
    },
  }),
);

export default function Header() {
  const [currentTitle, setCurrentTitle] = useState('');
  const setTitle = useStore((state: Store) => state.setTitle);

  const classes = useStyles();

  const handleChange = (event: any) => {
    setCurrentTitle(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', flexGrow: 1, m: 2 }} className={classes.header}>
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
      <Button
        variant="text"
        onClick={() => {
          setTitle(currentTitle);
        }}
      >
        Save
      </Button>
    </Box>
  );
}
