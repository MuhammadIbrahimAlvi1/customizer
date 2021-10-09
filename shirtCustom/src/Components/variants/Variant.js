import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './Variant.style';
import { useDispatch, useSelector } from 'react-redux';
import { setVariantData } from '../../actions/action';
import { useState } from 'react';
import { setID } from '../../actions/action';
const Variant = ({ classes, ...props }) => {
    // const [activeState, setActiveState] = useState('');
    const dispatch = useDispatch();
    const activeIndex = useSelector(state=>state.reducer.id);
    console.log(activeIndex)
    const getVariantData = async (id) => {
        const myRequest = new Request('http://localhost:9000/variant', {
            method: 'GET',
            headers: { id },
            mode: 'cors',
            cache: 'default',
        });
        await fetch(myRequest).then(res => res.json()).then(data => dispatch(setVariantData(data))).catch(err => console.log(err));
    }

    useEffect(() => {
        document.addEventListener('click', (_ev) => {
            // console.log("in document");
            // setActiveState(-1);
            dispatch(setID(-1))
        });
    }, [])
    
    return (
        <div className={classes.variant}>      
             { props.dataArray.map((item, ind) => <div key={ind} 
            onClick={(ev) => {
                // props.onclick();
                getVariantData(item.id);
                // setActiveState(ind)
                // console.log('variant')
                dispatch(setID(ind));
                ev.stopPropagation();
            }}>
            <div className={classes.variantPicture} >
                {(activeIndex === ind) ? <img src={item.activeImgSrc} /> : <img src={item.imgSrc} className={classes.variantimgActive} />}
            </div>
                <div className={classes.variantText}>{item.title}</div></div>

     

        )}
           </div>
    )
}


export default withStyles(styles)(Variant);