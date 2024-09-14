import express from "express"
import jwt from "jsonwebtoken"
import path from "path"
import { fileURLToPath } from 'url';

const JWT_SECRET = "thisissecure"
const app = express() 

app.use(express.json())
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
app.use(express.static(path.join(__dirname, 'public')))

//Use DB instead of in-memory storage
const users = []

app.get("/", (req, res) => {
    res.send("Up and Running")
})

app.post("/signin", (req, res) => {
    const username = req.body.un 
    const pwd = req.body.pwd 

    const user = users.find( u => u.username === username && u.pwd === pwd )
    if(user) {
        //generate JWT
        let token = jwt.sign({username}, JWT_SECRET)
        console.log(token)

        res.json({
            msg: "Successfully Signin as "+ username,
            token
        })
    } else {
        res.status(403).json({
            msg: "Invalid username or password"
        })
    }
})

app.post("/signup", (req, res) => {
    const email = req.body.em
    const username = req.body.un 
    const pwd = req.body.pwd 
    
    //add check to validate duplicacy of email, username 
    const user = users.find((u) => {
        if(u.email === email || u.username === username)
            return true
    })
    if(user != undefined) {
        res.status(400).json({
            "msg": "Email or username already Exists."
        })
    } else {
        const user = {email, username, pwd}
        users.push(user)
    
        res.json({
            "msg": "Successfully Signed up " + username
        })
    }
})

app.use((req, res, next) => {
    const token = req.headers.authorization 
    if(token) {
        jwt.verify(token, JWT_SECRET , (err, decoded) => {
            if(err) {
                res.status(401).json({
                    msg: "Unauthorized"
                })
            } else {
                req.user = decoded 
                next()
            }
        })
    } else {
        res.status(401).json({
            msg: "Unauthorized"
        })
    }
})

app.get("/me", (req, res) => {
    const username = req.user.username 
    console.log(username)

    const user = users.find(u => u.username === username)
    if(user) {
        res.json({
            username: user.username,
            email: user.email
        })
    } else {
        res.status(403).json({
            "msg": "unathorized"
        })
    }
})

app.listen(3000, () => {
    console.info("Server Running : 3000")
})