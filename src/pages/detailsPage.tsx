import { Box } from '@mui/system';
import React from 'react';
import { Grid } from '@mui/material';
import SelectionPane from '../components/selectionPane';
import Form from '../components/form';

export default function DetailsPage(): JSX.Element {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        minHeight: '100vh',
      }}
      className="root"
    >
      <Grid container xs={12}>
        <Grid container xs={8}>
          <Form />
        </Grid>
        <Grid container xs={4}>
          <SelectionPane />
        </Grid>
      </Grid>
    </Box>
  );
}
