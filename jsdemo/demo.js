var users=[]
var allusers='<hr/>'
function addUser(){
    var data=document.getElementById('username').value
    users.push(data);
    var ch=0;
    for(var a=0;a<users.length;a++){
        allusers+=users[a]+"<br/>"
        
    }
    //console.log(data);
    document.getElementById('show').innerHTML=users
}