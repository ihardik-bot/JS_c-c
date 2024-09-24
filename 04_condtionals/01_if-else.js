let score=400
if(score>200){
    let name="Hardik";
    console.log(`${name},"QUALIFIED"`);
    
}
else{
    console.log("DIS-Q")
    }
  //  console.log(`${name},"QUALIFIED"`);//This will give error here because its scope is inside the if-else conditional
    
//-------IMPLICIT-SCOPE-----------
//if(score==400) console.log("score is 400");//Wrong way to write if conditional we cam write more cases here by ptting comma & ending it with semicolon..


const userLoggedIn=true
const debitCard=true
if(userLoggedIn && debitCard){
    console.log("Allow to purchase");
    
}
else if(userLoggedIn && !debitCard){
    console.log("Please fill-up your debitCard details");
    
}
else{
    console.log("Please sign-up");
    
}