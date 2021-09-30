import TextField from '@material-ui/core/TextField';
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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