import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 2100;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const items =[];

app.get("/", (req, res) => {

    res.render("index.ejs" , {items});
  });


 
  
  app.post("/work", (req, res) => {
    const inpp = req.body["inputt"];
    items.push(inpp);

    res.render("index.ejs", {items });

  });


  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });