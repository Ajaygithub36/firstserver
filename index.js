import express from 'express';

const app = express();

const port = 3000;


app.listen(port,()=>{
     console.log(`countinuos listning on port ${port}`);
});

app.get("/",(req,res)=>{
     res.send("my first server");
})

app.get('/login',(req,res)=>{
     res.send("<h1>i am login  page <h1>");
});

