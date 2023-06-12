const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
const cors = require("cors");
const apiRoutes = require("./routes");
const errorRoutes = require("./routes/errors.routes");

const app = express();
const PORT = process.env.PORT || 8000;

db.authenticate()
    .then(()=>console.log("BD conectada"))
    .catch((err)=>console.log("Fallo al conectar BD"));

//db.sync({force: true})
db.sync()
    .then(()=>{
        console.log("Base de datos sincronizada");
    })
    .catch((error)=>console.log(error));
app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Servidor conectado");
});

apiRoutes(app);
errorRoutes(app);

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando puerto ${PORT}`);
});