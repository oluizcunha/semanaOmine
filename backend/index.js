const express = require('express');

const app = express();

app.get('/', (request,response)=>{
    return response.json({
        evento: "oii"
    });
})

app.listen(3333);