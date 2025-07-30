var express = require("express");
var mongo = require("mongod");
const port = 8080;
const uri =
    "mongodb+srv://pratyakshkarmahe:<db_password>@cluster0.wl92lfz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var mongodb = new mongo(uri);
// mongodb connection
function run() {
    try {
        mongodb.connect();
        console.log("success");
    } catch {}
}
run();
var app = express();
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.sendFile(
        "/media/pratyaksh/New Volume/github/web/public/views/home.html",
    );
});
app.listen(port, () => {
    console.log("server is running");
});
