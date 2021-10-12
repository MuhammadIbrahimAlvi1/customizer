const styles = {
    footerContainer:{
        width:'90%',
        height:'20px',
        margin:'0 auto',
        marginTop:'50px',
        borderTop:'2px solid #e6e6e6'
    },
    footerPartOne:{
        width:'90%',
        height:'40px',
        display:'flex',
        margin:'0 auto',
        // marginTop:'20px',
        justifyContent:'start',
        // border:'1px solid black'
    },
    footerPartTwo:{
        width:'90%',
        height:'60px',
        margin:'0 auto',
        // marginTop:'20px',
        display:'flex',
        justifyContent:'start',
        
        // border:'1px solid black',
        alignItems:'top'
    },
    footerLogos:{
        width:'30%',
        height:'100%',
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    logo:{
       
        cursor:'pointer',
        backgroundColor:'transparent',
        // borderRadius:'50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        // '&:hover':{
        //     // opacity:'0.6',
        //     color:'white',
        //     backgroundColor:'black'
        // }
    },
    icon:{
        display:'flex',
        margin:'0 5px',
        borderRadius:'30px',
        border:'1px solid white',
        '&:hover':{
            opacity:'0.7',
        }
    }
}

export {
    styles
};