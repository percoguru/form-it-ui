import React from "react";
import TextField from '@material-ui/core/TextField';
import { count } from "console";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme, createTheme, ThemeProvider } from '@material-ui/core/styles';

type Prop = {
    disabled: boolean
    count: number
}

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

export default function TextBox(props: Prop) {
    const arr = [];
    for (let i = 0; i < props.count; i += 1) {
        arr.push(<TextField id="standard-basic" label="Standard" disabled={props.disabled} />)
    }
    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.dynamicForm}>
            {arr}
        </Grid>
    )
}