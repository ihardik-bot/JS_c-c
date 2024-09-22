function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("D");
    console.log("I");
    console.log("K");
}
//console.log(sayMyName());
//sayMyName()
//sayMyName is reference && sayMayName() is func calling 
function AddTwoNum(number1,number2){
    console.log(number1 + number2);
    
}
//Here func is not returning anything. Its just printing teh value.. Hence when we store the value in a variable and then print thr variable it will give teh value as undefined.
const result=AddTwoNum(3,4)
console.log("Result is:",result);

//AddTwoNum(4,5)
// AddTwoNum(3,
// "a"
// )
function AddTwoNums(num1,num2){
    return num1+num2
}
//But when we are returning thr value from teh func .. and we store the function o/p in a variable then we primt thr variable then it will not give undefined.
const result2=AddTwoNums(55,44)
console.log("Result is :",result2);

//console.log(AddTwoNums(56,75));
//Parameter are those which we give in the function while declaring it , while when we are calling the function the value hwich we pass in it is kniwn as argument. 



//CASE 1
function loggedin(username){
    return `${username} just logged in`
}
console.log(loggedin("Hardik"));
console.log(loggedin()); //This will give undefined just logged in because we did not passed any argument to function parameter.

// CASE 2 We dont want to print undefined just logged in then we will use a if statement that if username===undefined then return nothing.
function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());



//CASE 3
//PRINTING A DEFAULT NAME IF USER PROVIDES NO NAME
function loginUserMessage2(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2());
