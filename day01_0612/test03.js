//배열 
const [a,b]= [1,2];
console.log(a,b)

const [c,d]= [3];
console.log(c,d) // 3 undefined 모자라면 정의되지 않음

const [e,f]= [4,5,6];
console.log(e,f) //남는것은 문제 발생하지 않음

const [g,,i]= [7,8,9];
console.log(g,i) //7 9 남는것은 문제 발생하지 않음

const [j,k,l =12]= [10,11];
console.log(j,k,l) //10,11,12
//기본값은 전달되는 값이 없으면 사용하지만 전달되는 값이 있으면 전달되는 값을  사용 

const [m,.....other]= [ 4,5 , 6];
console.log(m,) 
// ...  : 나머지 연사자,스ㅍ스프레드 연사자