const express = require('express');

const app = express();
const port = 3000;

app.get('/get/:envVar', (req, res) => {
    const msg = `${req.params.envVar} = ${process.env[req.params.envVar] }`;
    console.log(msg);
    res.send(msg);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
