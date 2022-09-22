import express from "express"
import KosanDB from "./config/database"
import router from "./routes/index"
import cookieParser from "cookie-parser"
import cors from "cors"
import path from 'path';

require("dotenv").config()
const app = express()

app.use(cors({
  credentials: true, 
  methods: ["GET", "POST", "PATCH", "DELETE"]
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(router)

KosanDB.sync().then(() =>{
  console.log("Database Synced Succesfully")
}).catch((err) => {
  console.log("Error", err)
})

app.listen(process.env.PORT, () => {
  console.log("Server Running")
})