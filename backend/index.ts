import express from "express"
import KosanDB from "./config/database"
import router from "./routes/index"
import cookieParser from "cookie-parser"
import cors from "cors"

require("dotenv").config()
const app = express()

app.use(cookieParser())
app.use(cors({
  credentials: true, 
  origin: ['http://localhost:3000'], 
  methods: ["GET", "POST", "UPDATE", "DELETE"]
}))
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