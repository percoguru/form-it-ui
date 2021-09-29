import TextField from '@material-ui/core/TextField';
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import useStore from "../../store/store";;

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

export default function Form() {
    const arr = [];
    const numberOfFields = useStore((state: any) => state.numberOfFields)
    for (let i = 0; i < numberOfFields; i += 1) {
        arr.push(<TextField id="standard-basic" label="Standard" />)
    }
    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.dynamicForm}>
            {arr}
        </Grid>
    )
}