const express= require("express");
const app= express();
const http= require("http")
const port= process.env.PORT || 5000;
// console.log("APP", app);
// console.log("http", http);

app.get("/", (req,res)=>{
    res.send("<h1>Hello Brother</h1>")
})
app.get("/home", (req,res)=>{
    res.send("<h1>Hello Brother, Your on Home Page</h1>")
})
app.get("/contact", (req,res)=>{
    res.send("<h1>Hello Brother, Your on Contact Page</h1>")
})

app.get("/calculatesum", (req, res)=>{
    const n= req.query?.n || 0;

    let ans=0;

    for(let i=1; i<=n; i++){
        ans+=i;
    }

    res.send( ans.toString());
})

app.listen(port);

console.log("Listening on Port: {port}",port)



