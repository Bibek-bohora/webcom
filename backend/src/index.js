import express from "express"
const PORT =8000;
import data from "./data.js"
import cors from "cors"
import productsapi from "./routes/products.js"


//middleWare
const app =express();
app.use(express.json())
app.use(cors())

import   connection from "./config/configDatabase.js"
//api routes
app.get("/",(req,res)=>{
    res.send("hello from home");
})


//productapi
app.use("/productapi",productsapi);

app.listen(PORT,()=>{
    console.log(`the server listen through🚀🚀🚀🚀🚀🚀 ${PORT}`)
    connection();
}
)