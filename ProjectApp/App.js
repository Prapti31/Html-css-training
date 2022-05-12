var express=require('express')
var bp=require('body-parser')
var _=reqiure('underscore')


var app=express()
app.use(bp.json())
var project=[
    
]
pid=1;


app.use(express.static('public'))

app.get("/loadproject",(req,res)=>{
    res.json(project)
})



app.post('/addProject',(req,res)=>{
    var data=req.body
    document.write(data)
    data.id=pid++
    project.push(data)
    res.send('project info is '+data)
})



app.get('/loadproject/:id',(req,res)=>{
    var lid=parseInt(req.params.id)
    var mtd;
    /*users.forEach(function(td){
        if(lid==td.id){
            mtd=td;
        }
    })*/
    var mtd=_.findWhere(project,{id:lid})
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


app.listen(4000,()=>{
    console.log("server is ready");
})