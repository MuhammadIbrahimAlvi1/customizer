import { styles } from './MultiCard.style';
import { withStyles } from '@material-ui/styles';
import DraftsIcon from '@material-ui/icons/Drafts';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import Filter5Icon from '@material-ui/icons/Filter5';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const MultiCard = ({ classes }) => {
    return (<>
        <div className={classes.multiCardContainer}>
            {/* <div className={classes.multiDetails}>
                <DraftsIcon className={classes.logo}/>5 Jahre Garantie
            </div>
            <div className={classes.multiDetails}>
                <AssignmentReturnIcon className={classes.logo}/>Kostenlose Retoure
            </div>
            <div className={classes.multiDetails}>

                <Filter5Icon className={classes.logo}/> Kauf auf Rechnung

            </div>
            <div className={classes.multiDetails}>
                <ShoppingBasketIcon className={classes.logo}/>
                Lieferung in Fillialen
            </div> */}
            <Grid container spacing={2} >
                <Grid item xs={3} >
                    <Item className={classes.multiDetails} ><DraftsIcon className={classes.logo} />5 Jahre Garantie</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item className={classes.multiDetails}>  <AssignmentReturnIcon className={classes.logo} />Kostenlose Retoure</Item>
                </Grid>
                <Grid item xs={3} >
                    <Item className={classes.multiDetails}>     <Filter5Icon className={classes.logo} /> Kauf auf Rechnung</Item>
                </Grid>
                <Grid item xs={3} >
                    <Item className={classes.multiDetails}>   <ShoppingBasketIcon className={classes.logo} />
                        Lieferung in Fillialen</Item>
                </Grid>
            </Grid>
        </div>
    </>
    );
}

export default withStyles(styles)(MultiCard);