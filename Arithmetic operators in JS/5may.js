//1.Arithmetic operators
let a=5
let b=5
console.log('add',a+b)
console.log('subtract',a-b)
console.log('Multiply',a*b)
console.log('Divide',a/b)
console.log('Modulo',a%b)
console.log('Power',a**b)
let c=++a
console.log('increment',c)
let c1=--a
console.log('decrement',c1)

//2.Comparison Operators(always returs true or false)
let a1=7
let b1=7
console.log('Equality',a1==b1)
console.log('Not Equal to',a1!=b1)
console.log('greater than',8>7)
console.log('less than',8<7)
console.log('greater than equal to',7>=7)
console.log('less than equal to',7<=7)
console.log('Strict equal to',a1===b1)
console.log('Strict notequal to',a1!==b1)


//3.Logical Operator
let l=7
let m=9
let l1=7
let m2=0
console.log('AND',(l==m)&&(l1==m1));
console.log('OR',(2==2)||(3==4))
const a3 = 3;
const b3 = -2;

console.log('Logical Not',!(a3 > 0 || b3 > 0));
// Jo bhi result aega Logical NOT se uska ulta hojega


//4.Assignment Operator
let x=10
var y=x
console.log('=',y)
y+=x 
//y=y+x
console.log('+=',y)
y-=x
//y=y-x aur y ki latest value 20 thi toh, y=20-10
console.log('-=',y)
y*=x
//y=y*x
console.log('*=',y)
y/=x
console.log('/=',y)
y%=x
console.log('%=',y)
y**=x
//y=y**x
console.log('y**=x',y)


//5.Conditional Operator(ternary)
var age=25
let res=age<30?true:false
console.log('res',res)

//6.Bitwise Operator
let z=1|2
console.log('|',z)
z1=1&2
console.log('&',z1)
z2=1^2
console.log('^',z2)
z3=~5
console.log('~',z3)
//Left shift (sabse left vali bit niche gir jaegi)
z4=1<<2
console.log('<<',z4)
//Right Sift(sabse right vali bit niche gir jaegi)
z5=1>>2
console.log('>>',z5)
//Unsigned right shift operator(shift hoke girjega right most aur left m jo empty spaces hai vha 0 aajegi)
z6=1>>>2
console.log('>>>',z6)



