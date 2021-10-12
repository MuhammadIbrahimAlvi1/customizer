import { styles } from './Navbar.style';
import { withStyles } from '@material-ui/styles';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchBox from '../searchfield/SearchBox';
import AndroidIcon from '@material-ui/icons/Android';
import Typography from '@mui/material/Typography';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom';
const Navbar = ({ classes }) => {
    return (
        <div className={classes.navParent}>

            {/* <div className={classes.navHeaderTop}>
                <div className={classes.headerSubTop}>News Letter</div>
                <div className={classes.headerSubTopLast}>Service-Hotline 0201-2120 1101</div>
            </div> */}

            <div className={classes.navHeaderMiddle}>
                <div className={classes.headerlogo}>
                    {/* <AndroidIcon className={classes.logo}/> */}
                    <Link to='/'>
                    WALBUSCH
                    </Link>
                </div>
                {/* <div className={classes.headersearchbar}>
                  <SearchBox/>
                </div> */}
                <div className={classes.headerUserParent}>
                    {/* <div className={classes.userInfo}>
                        <div className={classes.userLogo}><PersonIcon /></div>
                        <div className={classes.userText}>Anmeldan</div>
                    </div> */}
                    <div className={classes.userCart}>
                        <div className={classes.cartText}>
                            <Typography variant='h6' sx={{ fontSize: '13px', fontWeight: 'light' }}>
                                Lor Warkorab
                            </Typography>
                            <Typography variant='h6' sx={{ fontSize: '13px', fontWeight: 'light' }}>
                                Enta 0 aklt
                            </Typography>
                        </div>
                        <div className={classes.cartLogo}>
                            <LocalMallOutlinedIcon fontSize='large' />
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.navHeaderBottom}>
                {/* <div className={classes.navBottomLinks}>SHIRTS</div>
                <div className={classes.navBottomLinks}>MEN'S FASHION</div>
                <div className={classes.navBottomLinks}>LADIES FASHION</div>
                <div className={classes.navBottomLinks}>SALE</div>
                <div className={classes.navBottomLastLink}>MAGZINE</div> */}
            </div>
        </div>
    );
}

export default withStyles(styles)(Navbar);