import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import useStore from "../store/store";import { Store } from '../types/types';
import CheckBox from './form-components/checkBox';
import TextBox from './form-components/textBox';
;

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
    const form = useStore((state: Store) => state.form)
    for (let i = 0; i < form.components.length; i += 1) {
        const { type } = form.components[i];
        if (type === 'CheckBox') {
            arr.push(<CheckBox/>)
        } else {
            arr.push(<TextBox/>)
        }
    }
    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.dynamicForm}>
            {arr}
        </Grid>
    )
}