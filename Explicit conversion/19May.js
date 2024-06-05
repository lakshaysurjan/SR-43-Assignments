var num=1;
var boolean=true;
var nul=null;
var undef=undefined;
var str="A";

//Everything to String
var str_num=new String(num).valueOf()
var str_bool=new String(boolean).valueOf()
var str_nul=new String(nul).valueOf()
var str_undef=new String(undef).valueOf()

console.log("num",str_num,"-typeof",typeof(str_num))
console.log("boolean",str_bool,"-typeof",typeof(str_bool))
console.log("nul",str_nul,"-typeof",typeof(str_nul))
console.log("undef",str_undef,"-typeof",typeof(str_undef))

//Everything to bool
var bool_num=new Boolean(num).valueOf()
var bool_str=new Boolean(str).valueOf()
var bool_nul=new Boolean(nul).valueOf()
var bool_undef=new Boolean(undef).valueOf()

console.log("num",bool_num,"-typeof",typeof(bool_num))
console.log("boolean",bool_str,"-typeof",typeof(bool_str))
console.log("nul",bool_nul,"-typeof",typeof(bool_nul))
console.log("undef",bool_undef,"-typeof",typeof(bool_undef))


//everything to number
var num_str=new Number(str).valueOf()
var num_bool=new Number(boolean).valueOf()
var num_nul=new Number(nul).valueOf()
var num_undef=new Number(undef).valueOf()

console.log("str",num_str,"-typeof",typeof(num_str))
console.log("boolean",num_bool,"-typeof",typeof(num_bool))
console.log("nul",num_nul,"-typeof",typeof(num_nul))
console.log("undef",num_undef,"-typeof",typeof(num_undef))


// //Everything to null
// var nul_num=new null(num).valueOf()
// var nul_bool=new null(boolean).valueOf()
// var nul_str=new null(str).valueOf()
// var nul_undef=new null(undef).valueOf()

// console.log("num",nul_num,"-typeof",typeof(nul_num))
// console.log("boolean",nul_bool,"-typeof",typeof(nul_bool))
// console.log("nul",nul_str,"-typeof",typeof(nul_str))
// console.log("undef",nul_undef,"-typeof",typeof(nul_undef))


