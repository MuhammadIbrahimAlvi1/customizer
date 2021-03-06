const styles = {
    // Parent Container
    dashboardParentContainer: {
        // border:'1px solid black',
        position: 'absolute',
        margin: '0px auto',
        width: '99%'
    },
    dashboardTop: {
        width: '80%',
        // border:'1px solid black',
        margin: '0 auto',
        marginTop: '7px',
        display: 'flex',
        fontFamily: 'Titillium Web sans-serif',
    },
    dashboardTopLink: {

    },
    dashboardSlider: {
        width: '95%',
        // height: '700px',
        // border:'1px solid red',
        margin: '0px auto',
        marginTop: '40px'
    },
    dashboardVariants: {
        width: '80%',
        // border: '1px solid black',
        margin: '20px auto'
    },
    shopNowContainer: {
        width: '20%',
        margin: '0 auto',
        position: 'relative',
        bottom: '800px',
        left: '25%'
    },
    variantsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexWrap: 'wrap',
        width: '90%',
        // border: '1px solid black',
        margin: '0px auto',
        fontFamily: 'Titillium Web sans-serif',
    },
    variantCatergory: {//data
        zIndex: '10',
        width: '100%',
        position: 'absolute',
        left: '10%',
        bottom: '34%',
        // border: '1px solid red',
        boxShadow: '3px 3px 3px 3px gray'
    },
    variantCatergoryTop: {
        // border: '3px solid e6e6e6',
        width: '100%',
        height: '15%',
        display: 'flex',
        alignItems: 'center'
    },
    variantName: {
        width: '50%',
        height: '100%',
        // border: '1px solid red'
    },
    variantCatergoryClose: {
        width: '50%',
        height: '100%',
        // border: '1px solid black',
        textAlign: 'right',
        paddingTop: '2px',
        paddingRight: '4px'
    },
    closeIcon: {
        cursor: 'pointer',
        '&:hover': {
            opacity: '0.9%',
            color: 'black'
        }
    },
    '@media only screen and (max-device-width : 360px) ': {
        variantCatergory: {
                    width: '350px',
                    bottom: '90%',
                    height:'250px',
                    left: '2%',
                },
        },
        '@media only screen and (min-device-width : 501px) and (max-device-width:699px) ': {
            variantCatergory: {
                        width: '350px',
                        bottom: '88%',
                        height:'250px',
                        left: '9%',
                    },
            },
        '@media only screen and (max-device-width : 500px) ': {
            variantCatergory: {
                        width: '370px',
                        bottom: '98%',
                        height:'180px',
                        left: '12%',
                       
                    },
            },
 
                '@media only screen and (max-device-width : 900px) and (min-device-width:700px)': {
                    variantCatergory: {
                                width: '370px',
                                bottom: '90%',
                                height:'180px',
                                left: '15%',
                               
                            },
                    },
                    //  ??? : Small screens, laptops.

                    '@media only screen and (max-device-width : 1024px) and (min-device-width:769px)': {
                        variantCatergory: {
                                    width: '370px',
                                    bottom: '90%',
                                    height:'180px',
                                    left: '15%',
                                   
                                },
                        },
                        //  ??? : Desktops, large screens.

                        '@media only screen and (max-device-width : 1200px) and (min-device-width:1025px)': {
                            variantCatergory: {
                                        width: '470px',
                                        bottom: '70%',
                                        height:'180px',
                                        left: '15%',
                                       
                                    },
                            },
                    '@media only screen and (min-device-width : 1201px ) and (max-device-width:1234px)': {
                        variantCatergory: {
                                    width: '600px',
                                    bottom: '85%',
                                    height:'180px',
                                    left: '15%',
                                   
                                },
                        },
                        '@media only screen and (min-device-width : 1235px ) and (max-device-width:1299px)': {
                            variantCatergory: {
                                        width: '600px',
                                        bottom: '84%',
                                        height:'180px',
                                        left: '15%',
                                       
                                    },
                            },
                            '@media only screen and (min-device-width : 1300px ) and (max-device-width:1350px)': {
                                variantCatergory: {
                                            width: '600px',
                                            bottom: '81%',
                                            height:'180px',
                                            left: '15%',
                                           
                                        },
                                },
                                '@media only screen and (min-device-width : 1351px ) and (max-device-width:1400px)': {
                                    variantCatergory: {
                                                width: '600px',
                                                bottom: '80%',
                                                height:'180px',
                                                left: '15%',
                                               
                                            },
                                    },
                                    '@media only screen and (min-device-width : 1401px ) ': {
                                        variantCatergory: {
                                                    width: '600px',
                                                    bottom: '70%',
                                                    height:'180px',
                                                    left: '15%',
                                                   
                                                },
                                        },
       

    }

export {
        styles
    };