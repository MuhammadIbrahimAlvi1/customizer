import { styles } from './Dashboard.style';
import { withStyles } from '@material-ui/styles';
import CarouselSlider from '../carousel/Carousel';
import Variant from '../variants/Variant';
import MultiCard from '../multicard/MultiCard';
import ShopNow from '../shopnow/ShopNow';
import { variantData } from '../VariantData';
import VariantCard from '../variantCard/VariantCard';
import Footer from '../footer/Footer';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import DetailsModal from '../DetailModal/DetailsModal';
import  MaterialCollapse  from '../collapse/MaterialCollapse';
const Dashboard = ({ classes }) => {
    const [showVariants, setShowVariant] = useState(false);
    const state = useSelector((state)=>state.reducer.id);
    return (
     
           <div className={classes.dashboardParentContainer}> 

            <div className={classes.dashboardSlider}>
                <CarouselSlider />
            </div>
            <div className={classes.shopNowContainer}>
                <ShopNow />
            </div>
            <div className={classes.variantsContainer}>
                <Variant dataArray={variantData}/>
            </div>
            {(state !== -1) ?
                <div className={classes.variantCatergory} >
                    <VariantCard/>
                </div> : null
            }
            {/* <DetailsModal/> */}
            {/* <MultiCard /> */}
            <Footer />
        
         </div> 
    );
}
{/* <div className={classes.dashboardTop}>
    <div className={classes.dashboardTopLink}><a href="#" >HOME PAGE</a></div>
    <div>/
        Configure your made-to-measure shirt</div>
</div> */}

export default withStyles(styles)(Dashboard);