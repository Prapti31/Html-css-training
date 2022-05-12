function getUser(id,){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('getting the users from all social platforms');
           resolve({
                id:id,
                name:'Amar'
            })
        }, 1000);
    })
    }


function getBlogs(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('calling rest apis to load the posts');
            resolve(['Post-1','Post-2','Post-3'])
        },1000);
    })
    
}

function loadComments(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('getting the users from all the comments');
            resolve(['Comments for'+post])
    
        },1000);
    })
    
}
getUser(101)
.then(user => getBlogs(user.name))
.then(blogs => loadComments(blogs))
.then(comments => console.log(comments))
.catch(err => console.log('Error '+err.message))