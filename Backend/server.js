import  cors  from "cors";
import  express  from "express";
import config from "./src/DataBase/config.js";
import movieRoutes from "./src/routes/movieRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import bodyParser from "body-parser";
import reviewsRoute from "./src/routes/reviewRoutes.js";


const app = express ();


//setting cors
app.use(
    cors({
        origin:'http://localhost:5173',
    })
)

//middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.json());



// my routes
movieRoutes (app);
authRoutes(app);
reviewsRoute(app);


app.get ('/' , ( req , res ) => {
    res.send ('Hello World 😁');
});

app.listen (config.port , () => {
    console.log (`Server running on port ${config.port}`);
});
