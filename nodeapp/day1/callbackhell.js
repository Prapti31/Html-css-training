function getUser(id,cb){
    setTimeout(()=>{
        console.log('getting the users from social platforms');
        cb({
            id:id,
            name:'Prapti'
        })
    },1000);
}

function getBlogs(username,cb){
    setTimeout(()=>{
        console.log('calling rest apis to load the posts');
        cb(['Post-1','Post-2','Post-3'])
    },1000);
}

function loadComments(post,cb){
    setTimeout(()=>{
        console.log('getting the users from all the comments');
        cb(['Comments for'+post])

    },1000);
}
getUser(101,(user)=>{
    getBlogs(user.name,(blogs)=>{
        loadComments(blogs[0],(comments)=>{
            console.log(user,blogs[0],comments);
        })
    })
})