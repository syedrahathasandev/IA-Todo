import e from "express";
const app = e()
app.use(e.json())


app.listen(8000,()=>{
    console.log("server is runnig at http://localhost:8000/")
})