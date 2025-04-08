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
    res.render("menu.ejs", {items: data})
});

const data = 
    [ 
        {
            name: "Pepperoni",
            price: 35,
            ingredients: "ser, sos, salami",
            extraIngredients: "chilli miodek",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Punch_Neapolitan_Pizza_Margherita.jpg"
        },
        {
            name: "Margharita",
            price: 35,
            ingredients: "ser, sos",
            extraIngredients: "szynka",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Punch_Neapolitan_Pizza_Margherita.jpg"
        },
        {
            name: "Hawajska",
            price: 35,
            ingredients: "ser, sos, ananas, szynka",
            extraIngredients: "gówno",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Punch_Neapolitan_Pizza_Margherita.jpg"
        },
        {
            name: "Quatro Fromaggi",
            price: 35,
            ingredients: "ser, sos, inny ser, jeszcze inniejszy ser, ser taki wow",
            extraIngredients: "chilli miodek",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Punch_Neapolitan_Pizza_Margherita.jpg"
        },
        {
            name: "Pepperoni",
            price: 35,
            ingredients: "ser, sos, salami",
            extraIngredients: "chilli miodek",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Punch_Neapolitan_Pizza_Margherita.jpg"
        },
        {
            name: "Margharita",
            price: 35,
            ingredients: "ser, sos",
            extraIngredients: "szynka",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Punch_Neapolitan_Pizza_Margherita.jpg"
        },
        {
            name: "Hawajska",
            price: 35,
            ingredients: "ser, sos, ananas, szynka",
            extraIngredients: "gówno",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Punch_Neapolitan_Pizza_Margherita.jpg"
        },
        {
            name: "Quatro Fromaggi",
            price: 35,
            ingredients: "ser, sos, inny ser, jeszcze inniejszy ser, ser taki wow",
            extraIngredients: "chilli miodek",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Punch_Neapolitan_Pizza_Margherita.jpg"
        },
        {
            name: "Pepperoni",
            price: 35,
            ingredients: "ser, sos, salami",
            extraIngredients: "chilli miodek",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Punch_Neapolitan_Pizza_Margherita.jpg"
        },
        {
            name: "Margharita",
            price: 35,
            ingredients: "ser, sos",
            extraIngredients: "szynka",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Punch_Neapolitan_Pizza_Margherita.jpg"
        },
        {
            name: "Hawajska",
            price: 35,
            ingredients: "ser, sos, ananas, szynka",
            extraIngredients: "gówno",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Punch_Neapolitan_Pizza_Margherita.jpg"
        },
        {
            name: "Quatro Fromaggi",
            price: 35,
            ingredients: "ser, sos, inny ser, jeszcze inniejszy ser, ser taki wow",
            extraIngredients: "chilli miodek",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Punch_Neapolitan_Pizza_Margherita.jpg"
        }
    ]