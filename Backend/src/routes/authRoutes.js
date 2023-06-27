import { loginUser, registerUser } from "../controllers/authRoutesControllers.js"




const authRoutes = (app) =>  {
    //register user
    app.route('/auth/register')
    .post(registerUser)

    //login user
    app.route('/auth/login')
    .post(loginUser)
}

export default authRoutes;