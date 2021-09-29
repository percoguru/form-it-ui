import { Grid, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import useStore from "../store/store";import { Store } from "../types/types";
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

function SelectionPane() {
    const classes = useStyles();
    const addField = useStore((state: Store) => state.addField)
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