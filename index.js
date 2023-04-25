import express from "express" ;

import { engine } from 'express-handlebars';
import {students,name} from "./database/usersArray.js"
import studentroutes from "./routes/studentroutes.js";
import userroutes from "./routes/userroutes.js";
const app=express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './tem');
app.use('/student',studentroutes);
app.use('/user',userroutes);




app.get('/students', (req, res) => {
    res.render("students", {name:'Ahmed'});
});
app.get('/users', (req, res) => {
    res.render("users");
});

app.listen(8000);

