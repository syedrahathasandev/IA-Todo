import e from "express";
import { dbConnect } from "./db/index.js";
const app = e()
app.use(e.json())


app.listen(8000, async()=>{
    await dbConnect()
    console.log("server is runnig at http://localhost:8000/")
})