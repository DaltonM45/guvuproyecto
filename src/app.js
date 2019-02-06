const express = require('express');
const app = express();



//configurando puerto
app.set('port', process.env.PORT || 3000);

//inicializando servidor
app.listen(app.get('port'), () =>{
    console.log("servidor corriendo madafaca!...");
})



