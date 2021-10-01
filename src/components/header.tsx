import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import useStore from "../store/store";
import { Store } from '../types/types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckBox from './form-components/checkBox';
import TextBox from './form-components/textBox';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            // padding: theme.spacing(2)
        },
    }),
);

export default function Header() {
    const title = useStore((state: Store) => state.form.title);
    const description = useStore((state: Store) => state.form.description);

    const classes = useStyles();

    return (
        <Box sx={{ width: '100%'}} className={classes.header}>
            <Typography variant="h3" gutterBottom component="div">
                {title}
            </Typography>
        </Box>
    )

}