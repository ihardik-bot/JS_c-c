//When we assum something to be true then it is truthy value ... when we assume it to be false then it is falsy value..
const userName="Hardik"
//We are assuming userName to be true hence no matter what the userName will be it will always treated as true.
if(userName){
    console.log(userName);
    
}
else{
    console.log("Please enter username");
    
}
//The else condtion will be only executed when the const is empty.
//Falsy values : false , 0 , -0 , BigInt 0n , null , undefined , NaN
//Truthy values : "0",'false' , " "(anything under string) , empty array , objecct & func , function(){}



//-----Detecting empty object-----------
//Object.keys() gives array of all the keys of an object
//Object.key(object_name).length will give size ogf array if it is 0 then object is empty
const myObj={

}
console.log(Object.keys(myObj).length); //OP= 0
//false == 0 is true , false =="" is true , 0=="" is true