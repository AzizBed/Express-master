const express = require("express");

const app = express();
const port = 5000;
var n = new Date();
var d = n.getDay();
var h = n.getHours();
if (d === 0 || d === 6 || h < 9 || 17 < h) {
    app.get("*", (req, res) => {
        res.sendFile(__dirname + "/Views/ClosedPage.html");
    });
}
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Views/index.html");
    console.log("1");
});
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/Views/Contact-us.html");
});
app.get("/services", (req, res) => {
    res.sendFile(__dirname + "/Views/Our-services.html");
});

app.listen(port, () => console.log("Listening ..."));
