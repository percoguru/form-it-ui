import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Form } from '../types/types';
import { Paper, Grid } from '@mui/material';

const defaultForms: Form[] = [];

export default function FormPage(): JSX.Element {
  // eslint-disable-next-line prettier/prettier
  const [forms, setForms] = useState<Form[]>(defaultForms)
  const arr: any[] = [];

  useEffect(() => {
    async function getData() {
      
      const response = await(await fetch('http://localhost:3010/api/form')).json();
      setForms(response.data);
     }
     getData();
  });

  for (let i = 0; i < forms.length; i += 1) {
    const form: Form = forms[i];
    arr.push(
      <Paper>
        <Grid container xs = {6} >
          <h2>Title</h2>
          <p>{form.name}</p>
          <h3>Description</h3>
          <p>{form.description}</p>
          <h3>Subtitle</h3>
          <p>{form.subtitle}</p>
        </Grid>
      </Paper>,
    );
  }

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        minHeight: '100vh',
      }}
      className="root"
    >
      {arr}
    </Box>
  );
}
