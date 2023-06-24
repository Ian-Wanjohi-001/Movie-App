import  cors  from "cors";
import  express  from "express";
import config from "./src/database/config.js";
import movieRoutes from "./src/routes/movieRoutes.js";

const app = express ();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

// my routes
movieRoutes (app);

app.get ('/' , ( req , res ) => {
    res.send ('Hello World 😁');
});

app.listen (config.port , () => {
    console.log (`Server running on port ${config.port}`);
});
