import { Grid, TextField, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import TextBox from "./form-components/text-box";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sidePane: {
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center'
        }
    })
)

type Prop = {
    selectFn: Function
}

function SelectionPane(props: Prop) {
    const classes = useStyles();
    const isActive: boolean = false
    return (
        <Grid container xs={12} className={classes.sidePane}>
            <Grid item xs={12}>
                <TextBox disabled={!isActive} count={1} />
                <Button variant="contained" color="primary" onClick={() => { props.selectFn() }}>
                    Add Text Field
                </Button>
            </Grid>
        </Grid >

    )
}

export default SelectionPane;