function getUser(username){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('getting the username');
           resolve({
                username=username
            })
        }, 1000);
    })
    }


function getemail(email){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('getting email');
            resolve({
                email:email
            })
        },1000);
    })
    
}

function getpassword(password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('getting password');
            resolve({
                password:password
            })
        },1000);
    })
    
}

function getCity(city){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('getting city');
            resolve({
                city:city
            })
        },1000);
    })
    
}


getUser(username)
.then(user => getemail(user.email))
.then(user => getpassword(password))
.then(user => getCity(city))
.catch(err => console.log('Error '+err.message))