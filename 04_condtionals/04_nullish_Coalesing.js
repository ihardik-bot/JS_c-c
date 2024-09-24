let val;
val=null ?? 10
console.log(val);
//Read from cmdn
//Basically if a func is returning null or undefined we will forcely make the function to rteurn some other value thriugh this operartor
//it will take the first !null || !undefined value from the value present in the opeartor.
val=null??null??10??20??undefined //OP=10
val=undefined??20


//----------Terniary Opeartor-----------
//condition ? true:false
//Eg: Terniary Operator
const Price=200
Price>150 ? console.log("more than 150") :console.log("less than 150");


