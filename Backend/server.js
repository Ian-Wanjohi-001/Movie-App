import  express  from "express";
import config from "./src/database/config.js";
import movieRoutes from "./src/routes/movieRoutes.js";

const app = express ();

// my routes
movieRoutes (app);

app.get ('/' , ( req , res ) => {
    res.send ('Hello World 😁');
});

app.listen (config.port , () => {
    console.log (`Server running on port ${config.port}`);
});
