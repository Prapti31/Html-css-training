var express=require('express')
var bp=require('body-parser')
var _=require('underscore')
var app=express()
//app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
var users=[
    
]
uid=1;

var dept=[
    
]
did=1;
app.get("/",(req,res)=>{
    res.render('index.ejs',{udata:users})
})
//app.use
app.get("/loadusers",(req,res)=>{
    res.send(users)
})

app.get("/loaddept",(req,res)=>{
    res.json(dept)
})

app.post('/addUser',(req,res)=>{
    var data=req.body
    data.id=uid++
    users.push(data)
    console.log(users)
   res.render('index.ejs',{udata:users});
});

app.post('/addDept',(req,res)=>{
    var data=req.body
    data.id=did++
    dept.push(data)
    res.send('Dept is added'+data)
})

app.get('/loadusers/:id',(req,res)=>{
    var lid=parseInt(req.params.id)
    var mtd;
    /*users.forEach(function(td){
        if(lid==td.id){
            mtd=td;
        }
    })*/

    var mtd=_.findWhere(users,{id:lid})

    if(mtd){
        res.json(mtd)
    }
    else{
        res.status(404).send()
    }
})

app.get('/loaddept/:id',(req,res)=>{
    var lid=parseInt(req.params.id)
    var mtd;
    dept.forEach(function(td){
        if(lid==td.id){
            mtd=td;
        }
    })
    if(mtd){
        res.json(mtd)
    }
    else{
        res.status(404).send()
    }
})

app.delete("/deleteuser/:id",(req,res)=>{
    var lid=parseInt(req.params.id)
    var mtd;
    var mtd=_.findWhere(users,{id:lid})
    if(mtd){
        users=_.without(users,mtd)
    }
    else{
        res.status(404).send()
    }
})

app.get("/login",(req,res)=>{
    res.render('login.ejs')
})

app.post("/login",(req,res)=>{
    var uname=req.body.uname
    var password=req.body.password
    //console.log(uname+" "+pass)
    //var data=_.findWhere(users,{uname:uname})

    if(uname==_.findWhere(users,{uname:uname}) && pass==_.findWhere(users,{password:password})){
        res.render('welcome.ejs')
    }
    else{
        res.render('login.ejs')
    }
})

app.listen(4000,()=>{
    console.log("server is ready");
})