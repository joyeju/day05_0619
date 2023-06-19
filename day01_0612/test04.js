const user = {
    firstname :"jemicom",
    lastname : 'kim'

}
const {firstname,lastname};
console.log(firstname,lastname);

const{firstname : fn,lastname:ln} = user;
console.log(fn,ln);

const{
    firstname : fname ='hello',
    lastname : lname,
    age = 30
    } = user;
    console.log(firstname,lname,age);

    const userTwo = {
        firstname : 'korea',
        address : {
            zipcode:'038569',
            city : 'seoul'
        }

    }

    const {address} = userTwo;
    console.log(address); //객체

    const {address : {city}} = userTwo;
    console.log(city); //객체
    
    const {x,...rest}={x :1 ,y:2,z:3}
    console.log(x,rest);// 1 y:2, z:6
    