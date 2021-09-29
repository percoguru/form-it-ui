import { Grid, TextField, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import useStore from "../store/store";
import { Store } from "../types/types";
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

function SelectionPane() {
    const classes = useStyles();
    const isActive: boolean = false
    const addField = useStore((state: any) => state.addField)
    return (
        <Grid container xs={12} className={classes.sidePane}>
            <Grid item xs={12}>
                <TextBox/>
                <Button variant="contained" color="primary" onClick={addField}>
                    Add Text Field
                </Button>
            </Grid>
        </Grid >

    )
}

export default SelectionPane;