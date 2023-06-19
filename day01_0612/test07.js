//module 가져오기

const userName = require('./module');
                    //{userName,user} ;


const {userName : un, user:u}= require('./module');
console.log(un,u);