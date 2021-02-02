const express = require("express");
const app = express();
const port = 5000;
//========================================================
app.use('/', express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());


const bookRoute = require("./book");
app.use("/", bookRoute);

//=========================================================
app.listen(port, () => {
    console.log("Server started at port: ", port);
})