import React from "react";
import TextField from '@material-ui/core/TextField';
import { count } from "console";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme, createTheme, ThemeProvider } from '@material-ui/core/styles';
import useStore from "../../store/store";
import { Store } from "../../types/types";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dynamicForm: {
            flexGrow: 0,
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: theme.spacing(2)
        },
    }),
);

export default function TextBox() {
    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.dynamicForm}>
            <TextField id="standard-basic" label="Standard" disabled={true} />
        </Grid>
    )
}