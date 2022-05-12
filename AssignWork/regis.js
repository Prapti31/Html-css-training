var users=[]
function addUSer(){
    var data=document.getElementById('username').value
    if(data==null || data==''){
        document.getElementById('unerror').innerHTML='name can not be empty'
    }
    var userobj=JSON.stringify({
        uname:document.getElementById('username').value,
        email:document.getElementById('email').value
    })
    users.push(userobj);
    document.getElementById('show').innerHTML=userobj
}