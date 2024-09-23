const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        const x=5
        console.log(x);
        
        console.log(this);
    }

}
//console.log(x);//Give error bc we are using it outside its scope.


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hardik"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hardik"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hardik"
    console.log(this);//give {}
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Hardik"})//We have to put paranthesis otherwise { } will be used hence it will be case of explicit return hence we will get a error.


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()