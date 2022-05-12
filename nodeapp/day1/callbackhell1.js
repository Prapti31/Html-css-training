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
        cb(['Post-1','Post-2','Post-3']);
        //cb=data;
    },1000);
}

function loadComments(post,cb){
    setTimeout(()=>{
        console.log('getting the users from all the comments');
        for(var a=0;a<post.length;a++){
            cb(['Comments for'+post[a]])
        }
        

    },1000);
}
getUser(101,(user)=>{
    getBlogs(user.name,(blogs)=>{
        loadComments(blogs,(comments)=>{
            console.log(user,blogs[0],comments);
        })
    })
})