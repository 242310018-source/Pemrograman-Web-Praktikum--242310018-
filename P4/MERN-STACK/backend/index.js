const express = require("express"); 
const mysql = require ("mysql2");
const app = express(); 

app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bebas"
});

db.connect ((err) => {
    if(err){
        console.error("Koneksi ke database gagal:", err.message)
        process.exit(1)
    }
    console.log("Koneksi ke database mySQL berhasil!")
})

app.get("/", (req, res) => { 
res.send("Server berjalan"); 
}); 
app.listen(3000, () => { 
console.log("Server running on port 3000"); 
}); 

 app.get("/api/info", (req, res) => {
     res.json({
         message: "API MERN Stack Build by Express JS",
         version: "1.0.0",
         status: "active",
         timestamp: new Date()
     });
 });