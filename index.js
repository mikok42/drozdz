import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("homepage.ejs")
});

app.get("/reservations", (req, res) => {
    res.render("reservations.ejs")
});

app.get("/menu", (req, res) => {
    res.render("menu.ejs")
});