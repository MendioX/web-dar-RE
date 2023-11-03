import Express from "express";
import mysql from "mysql"
import cors from "cors"
import bodyParser from "body-parser";

import dotenv from "dotenv";


dotenv.config();

const App = Express()

App.use(cors())

const db = mysql.createConnection(
    {
        host: "127.0.0.1",
        user: "root2",
        password: "admin",
        database: "dar_db"

    }

)

App.use(bodyParser.json())

App.get("/campains",(req,res)=> {

    const sql = "SELECT * FROM campains"
    db.query(sql , (err , result) =>{
        if(err) return res.json({Message:"error inside the server"});

        return res.json(result)
    })
})




App.post("/newCampains", (req, res) => {
    const { name, location, date, manager, token } = req.body;
  
    // Verificar el token de autenticación
    if (token !== process.env.TOKEN_SERVER_EXPRESS) {
      return res.status(401).json({ Message: "Autenticación fallida" });
    }
  
    // Realizar la inserción en la base de datos
    const sql = "INSERT INTO campains (name, location, date, manager) VALUES (?, ?, ?, ?)";
    const values = [name, location, date, manager];
    db.query(sql, values, (err, result) => {
      if (err) return res.status(500).json({ Message: "Error en el servidor" });
  
      return res.status(201).json({ Message: "Registro exitoso" });
    });
  });


  App.post("/registrer/:id", (req, res) => {
    const { id } = req.params;
  
    // Realizar la actualización en la base de datos
    const sql = "UPDATE campains SET registered = registered + 1 WHERE id = ?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ Message: "Error en el servidor" });
      }
      return res.status(200).json({ Message: "Incremento exitoso" });
    });
  });



App.listen(8081, () => {
    console.log("listening")
})