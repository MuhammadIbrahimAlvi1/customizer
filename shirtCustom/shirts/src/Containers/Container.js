import { styles } from './Container.style';
import { withStyles } from '@material-ui/styles';
import Navbar from '../Components/navbar/Navbar';
import Dashboard from '../Components/dashboard/Dashboard';
import Footer from '../Components/footer/Footer';
import Measurement from '../Components/madetomeasure/Measurement';
import CartPagesContainer from '../Components/CartPages/CartPagesContainer';
import ThanksForShopping from '../Components/ThanksForShopping/ThanksForShopping';
// import ShoppingCart from '../Components/CartPages/ShoppingCart';
import SignUp from '../Components/CartPages/SignUp';
import Order from '../Components/CartPages/Order';
import Invoice from '../Components/CartPages/Invoice';
import BuyNow from '../Components/CartPages/BuyNow';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { useRoutes } from 'react-router-dom';
import ShoppingCart from '../Components/CartPages/ShoppingCart';
const Container = ({ classes }) => {



    return (

        <div className={classes}>
            <div className={classes.header}>
                <Router>

                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />

                        <Route path="/thanksforshop" element={<ThanksForShopping />} />

                        <Route path="/varity" element={<Measurement />} />
                        <Route path='/varity/cart' element={<CartPagesContainer/>}/>
                        <Route path='/varity/cart/:type' element={<CartPagesContainer />} />
                        <Route path='/invoice' element={<Invoice />} />
                        {/* <Route path='/thanksforshopping' element={<ThanksForShopping/>}/> */}
                    </Routes>
                </Router>

                {/* <CartPagesContainer/> */}

            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default withStyles(styles)(Container);