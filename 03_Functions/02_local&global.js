var a=300
if(true){
    var a=50
    console.log("Local scope a has value",a);
    
}
console.log(a);
//Here we can see that the global scope has been changed to local scope and value a=300 has not been in consideration anymore.

//But for let the case is opposite
let b=5000
if(true){
    let b=49
    console.log("Local scope b has value :",b);
    

}
console.log(b);

//This is why it has been suggested that var has scope problem and it changes it value every time.. when we declare it in {},scope etc..
//But it is no the case with let keyword.