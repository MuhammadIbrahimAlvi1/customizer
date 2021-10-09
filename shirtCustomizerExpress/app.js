const express = require('express');
var cors = require('cors');
const {variants} = require('./variants');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
const port = 9000
app.use(cors())
app.get('/variant', (req, res) => {
    const selectedVariant =  variants.find((item)=>{
        return (item.id ===req.headers.id);
    })
    res.send(selectedVariant);
    res.end();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})