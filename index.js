const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose');
const MovieRoutes = require('./routes/movie.routes');
env.config();

const app = express(); //express obj

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

MovieRoutes(app);

app.get('/home',(req,res)=>{
    console.log("Hitting/home")
    return res.json({
        success: true,
        message: 'Fetched home'
    });
});
app.listen(process.env.PORT, async () => {
    console.log(`Server Started on the port ${process.env.PORT}`);

    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Successfully connected to MongoDB");
        //await Movie.create({
        //    name: "Spider-Man: No Way Home",

        //    description: "Peter Parker's secret identity is revealed, turning his life upside down. Seeking help from Doctor Strange, he accidentally opens the multiverse, bringing dangerous villains from alternate realities into his world.",

        //   casts: [
        //        "Tom Holland",
        //        "Zendaya",
        //        "Benedict Cumberbatch",
        //        "Jacob Batalon",
        //        "Jon Favreau",
        //        "Jamie Foxx",
        //        "Willem Dafoe",
        //        "Alfred Molina"
        //    ],

        //    trailerurl: "https://www.youtube.com/watch?v=JfVOs4VSpmA",

        //    language: "English",

        //    releasedate: "2021-12-17",

        //    director: "Jon Watts",

        //    releaseStatus: "RELEASED"
        //});
    } catch (err) {
        console.log("Not able to connect mongo", err);
    }
});
