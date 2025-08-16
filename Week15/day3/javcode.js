function playthegame(){

let x;
let y;
let count=1;
let answer;


    answer=confirm("Play the game?")
if(answer==false){
alert ("No problem, Goodbye.");


}

else{
   y= prompt("enter a number  between 0 and 10")
   
if (isNan(y)){
    //pther data type
alert( "Sorry Not a number, Goodbye")
playthegame()
}

else if(y<0 || y>10){

//number not bet 0 and 10 
console.log( "Sorry its not a good number, Goodbye")

playthegame()
}

else{
 y=round(math.random())

}
}

}


function compareNumbers(userNumber,computerNumber){
    if (count >3){
alert ("out of chances")
return;

    }
if (userNumber==computerNumber){
    alert("WINNER")
}

else if 
(userNumber>computerNumber){
alert("Greater than computer number")
userNumber=prompt("enter a new number ")

count++
compareNumbers(userNumber);
}


else {
alert("Smaller than computer number")
userNumber=prompt("enter a new number ")

count++;
compareNumbers(userNumber);
}

}

