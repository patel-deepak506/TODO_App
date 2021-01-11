const express = require("express");
const app = express();
const DB = require('./database')


app.use(express.json());
app.set('view engine','pug');
app.set('views','../views');


//for gatting data end point

app.get('/',(req,res)=>{
    res.render('layout')
    DB.select().from("anand").then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
})

// for inserting data end point

app.get('/post',(req,res)=>{
    const {Task , Descripction} = req.body;
    DB('anand').insert({ Task:Task , Descripction:Descripction}).then(data=>{
        res.render('layout.pug',{title:"jshuhswj"});
        console.log(data);
    }).catch(err=>{
        console.log(err);
    });
});

// for updating data  of end point

app.put('/update/:Task',(req,res)=>{
    DB('anand').where({Task:req.params.Task}).update({Task:req.body.Task , Descripction:req.body.Descripction}).then(data=>{
        res.status(404);
        console.log(data);
    }).catch(err=>{
        console.log(err);
    });
});

// for deleting data

app.delete('/delete/:Task',(req,res)=>{
    DB.select().from('anand').where({Task:req.params.Task}).del().then(data=>{
        res.send("data successful daleted");
        console.log("data successful daleted",data);
    })
})

const PORT = 44444;
app.listen(PORT,()=>{
    console.log(`server is working port on ${PORT}`);
})
