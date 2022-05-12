var weather=require('./weatherapp.js')
var argv=require('yargs')
.option('location',{
    type:'string',
    alias:'l'
}).help('help')
.argv

weather(argv.location,function(callback){
    console.log(callback);
})