import sql from "mssql"; 
 import config from "../database/config.js"; 
 import bcrypt from "bcrypt"; 
 import jwt from "jsonwebtoken"; 
  

  
 //register user 
 export const registerUser = async (req, res) => { 
   const { username, email, password, preferences, confirm_password } = req.body; 
   const hashedPassword = bcrypt.hashSync(password, 10); 
   console.log(username, email, hashedPassword); 
   try { 
     // Check if user already exists 
     let pool = await sql.connect(config.sql); 
     let result = await pool 
       .request() 
       .input("email", sql.VarChar, email) 
       .query("SELECT * FROM Users WHERE email = @email"); 
     const user = result.recordset[0]; 
     if (user) { 
       return res.status(409).json({ error: "User already exists" }); 
     } else { 
       // If user does not exist, insert new user 
       await pool 
         .request() 
         .input("username", sql.VarChar, username) 
         .input("email", sql.VarChar, email) 
         .input("password", sql.VarChar, hashedPassword) 
         .input("preferences", sql.VarChar, preferences)
         .input("confirm_password", sql.VarChar, confirm_password) 
         .query(
            "INSERT INTO Users (username, email, password, preferences, confirm_password) VALUES (@username, @email, @password, @preferences, @confirm_password)"
          );
       res.status(200).json({ message: "User created successfully" }); 
     } 
   } catch (error) { 
     res.status(409).json(error.message); 
     console.log(error)
   } finally { 
     sql.close(); 
   } 
 }; 
  
 //login user 
  
 export const loginUser = async (req, res) => { 
   const {username, email, password } = req.body; 
    
   try { 
     // Check if user exists with the provided email 
     let pool = await sql.connect(config.sql); 
     let result = await pool 
       .request() 
       .input("email", sql.VarChar, email) 
       .query("SELECT * FROM Users WHERE email = @email"); 
     const user = result.recordset[0]; 
     if (!user) { 
       return res.status(401).json({ error: "User not found" }); 
     } 
      
     // Compare the provided password with the hashed password stored in the database 
     const isPasswordValid = bcrypt.compareSync(password, user.password); 
     if (!isPasswordValid) { 
       return res.status(401).json({ error: "Wrong credentials" }); 
     } 
      
     // Generate a JSON Web Token (JWT) for authentication 
     const token = jwt.sign({ email: user.email }, "your-secret-key"); 
      
     // Return the token as a response 
     res.status(200).json({username: user.username, userid: user.user_id, email: user.email,preferences: user.preferences, token: token }); 
   } catch (error) { 
     res.status(500).json({ error: "An error occurred while logging in", error }); 
     console.log(error)
   } finally { 
     sql.close(); 
   } 
 };