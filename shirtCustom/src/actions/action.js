const setVariantData = (data) => (
    {
        type: 'SET_VARIANT_DATA',
        payload: data
    }
)
const setID = (id) =>({
    type:'SET_ID',
    payload:id
})
export {
    setVariantData,
    setID
}