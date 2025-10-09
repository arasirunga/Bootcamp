//EXERCISE1


function infoAboutMe(){
console.log("My name is Arasi. My hobbies consist of practising yoga, reading books and watching action/thriller movies" )

}
function infoAboutPerson(personName, personAge, personFavoriteColor)
{ console.log("You are " + personName + ", you are " + personAge + " years old, and your favorite color is " + personFavoriteColor + ".");


}


//EXERCISE 2
 function calculateTip(){
bill=prompt("How much is the bill?")
if (bill<50){
tip=bill*0.2;
}

else if(bill<50 && bill<200){
    tip=bill*0.15;

}
else if(bill>200){
    tip=bill*0.1;
}
console.log("THe tip amount is"+tip);
console.log("The total amount is " + ((bill) + tip) + ".");

}

//EXERCISE 3
function isDivisibleBy23() {
arraydiv
for (i=0;i++;i<500)
{
if (i % 23 === 0) {
    console.log(i + " is divisible by 23");
arraydiv.push(i);
}

}

for (y=0;y<arraydiv.length();y++){
sum=sum+ arraydiv[y];

}
console.log("The sum of all numbers divisible by 23 is " + sum + ".");
}

//EXERCISE 4


const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

function myBill() {
      let  shoppinglist=["banana","orange","apple"];
      let total=0;
for (i =0;i<shoppinglist.length();i++){ //for all element in shopping list array
    for(j=0;i<stock.length();j++){
if(stock[shoppinglist[i]]>0){ //checks if exists in list stock 
    total=total+prices[shoppinglist[i]]
    stock[shoppinglist[i]]--;

}

    }

}
return total;

}

  
//Exercise 5


function changeEnough(itemPrice, amountOfChange) {
let amount
    amount=(amountOfChange[0]*0.25) +(amountOfChange[1]*0.10+amountOfChange[2]*0.05+amountOfChange[3]*0.01)

    if (itemPrice<=amount){
        console.log("true")
    }
    else{

        console.log("false")
    }
}

//Exercise 6

function hotelCost(){
numberofnights=prompt ("How many nights would you like to stay?")

    


function rentalcarcost(){

    numberofdays=prompt("How many days would you like to rent the car?")
//answer not number or answer==""){
    if (isNaN(numberofdays) || numberofdays=="" ){
        numberofdays=prompt("Please enter a number")
    }
        cost=numberofdays*40
 if (numberofdays>10){
    cost=cost*0.95

}

return cost;
}

function totalVacationCost(){
  //add cost from all 3 functions
  total=hotelCost()+planeRideCost()+rentalcarcost()
  console.log("The total vacation cost is " + total + ".");
} 
