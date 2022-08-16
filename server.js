
const express = require("express");
const path = require("path");

//create app
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));


//grab the request and response
app.get("/*", (req,  res) => {
    res.sendFile(path.resolve(__dirname,"frontend", "index.html"));
});

//any path at all we go back to root (handler) send back index . html



app.listen(process.env.PORT || 5060, () => console.log("Server is running ..."));