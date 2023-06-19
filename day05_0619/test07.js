const math = require('./modues/math.js');
//math = {add,sub}


console.log(math.add(1,2));
console.log(math.sub(50,100));

const {mod} = require('./modues/math')
console.log(mod(50,9))