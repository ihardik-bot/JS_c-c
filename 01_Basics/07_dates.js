// let myDate= new Date()
// console.log(myDate.toString());
// //This will print date day timezone current time
// console.log(myDate.toDateString());
// //This will give day date 
// console.log(myDate.toLocaleDateString());
// //This will priont in format of mm/dd/yyyy
// //Date is a object
// let myCreatedDate=new Date(2024 , 12 , 31)
// //In javascript month start from 0 , i.e 0 means jan so when we will give month= 12 it will take it as Jan and upgrade the year by 1.
// console.log(myCreatedDate.toDateString());
// //We can give time also..
// let myCreatedDate2=new Date(2024 , 12 , 31 , 13, 45)
// console.log(myCreatedDate2.toLocaleString());
// //But when we want to give date in dd/mm//yyyy format the month would start from 1.. Month will only start from 0 when we will give the date in array
// let myCreatedDate3=new Date("01-13-2024")
// console.log(myCreatedDate3.toLocaleDateString());

//-----------------------------------THIS WAS ALL ABOUT DATE ------------------------------------------------
// -----------------------------------------------TIMESTAMp------------------------------------------------------

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})



