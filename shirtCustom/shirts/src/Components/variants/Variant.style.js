const styles = {
    dashboardSlider: {
        width: '80%',
        height: '300px',
        margin: '30px auto',
        // border:'1px solid red',
    },
    variantPicture: {
        width: '100%',
        margin: '0 auto',
        marginBottom: '5px',
        // height: '140px',
        borderRadius: '50%',
        display: 'flex',
        // border:'1px solid red',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer',
        },'&:focus':{
            color:'white'
        }
      

    },
    variant:{
        // border:'1px solid black',
        width:'97%',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-evenly'
    },
    variants: {
        width: '20%',
        textAlign: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // border:'1px solid black',
        // border:'1px solid black',
        '&:active': {
            backgroundImage: "url(" + "../assets/extras.png" + ")",
            fontSize: '25px'
        }
        , '&:active': {
            fontSize: '65px',
            color: '#00abcc',
        },
    },
    // ,
    variantText: {
        textAlign: 'center',
        width:'100%',
        fontSize: '16px',
        // border:'1px solid black',
        '&:focus': {
            fontSize: '25px',
            color: '#00abcc',
        },
        '&:active': {
            fontSize: '25px',
            color: '#00abcc',
        },
        // '&:hover': {
        //     fontSize: '20px',
        //     color: '#00abcc',
        //     fontWeight:'bold'
        // }
    },
    variantimgActive: {
        '&:active': {
            backgroundImage: "url(" + "../assets/extras_active.png" + ")",
            fontSize: '25px'
        }
    }
}

export {
    styles
};
