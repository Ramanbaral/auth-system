import express from "express"
import 'dotenv/config'
import path from "path"

const app = express() 

app.use(express.json())
app.use(express.static(path.join(import.meta.dirname, 'public')))




app.listen(3000, () => {
    console.info("Server Running : 3000")
})