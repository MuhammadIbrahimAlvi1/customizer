const initialState={
    variants:{collection: []},
    id:-1
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case 'SET_VARIANT_DATA':
            return {...state,variants:action.payload}
        case 'SET_ID':
            return {...state,id:action.payload}
        default:
            return state;
        }
}
export default reducer;