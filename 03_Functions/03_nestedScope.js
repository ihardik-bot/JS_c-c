function one(){
    const username = "Hardik"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //Here we are calling website out-side its scope hence it will give error.

     two()

}

one() //When we are calling one it will go into the function & faces two() , when it faces two() , funcn two will be called & Hardik will get printed

if (true) {
    const username = "HARDIK"
    if (username === "HARDIK") {
        const website = " GIT-HUB"
        console.log(username + website);
    }
    //console.log(website); //We are calling website outside its scope so it will give error.
}

//console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //We can call the function here even before initiALIZING it and it will execute normally..

function addone(num){
    return num + 1
}



// addTwo(5) //Here it will give error because we have had declared the function and stored it in varaible. Hence variable can not be called before getting declared.
// const addTwo = function(num){
//     return num + 2
// }
const add={
    Name : "Hardik",
    Age : 22
    
    
}
console.log(add.Age);
