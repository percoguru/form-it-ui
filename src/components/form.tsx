import React from 'react';
import { Grid } from '@material-ui/core';
import useStore from '../store/store';
import { Store } from '../types/types';
import CheckBox from './form-components/checkBox';
import TextBox from './form-components/textBox';
import Header from './header';
import { Box } from '@mui/system';

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
  for (let i = 0; i < form.components.length; i += 1) {
    const { type } = form.components[i];
    if (type === 'CheckBox') {
      arr.push(<CheckBox />);
    } else {
      arr.push(<TextBox />);
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        p: 2,
      }}
      className="dynamicForm"
    >
      <Header />
      {arr}
    </Box>
  );
}
