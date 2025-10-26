//exercise 1

//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}
//exercise 2
function displayStudentInfo(person){
    const first = person.name.split(" ")[0];  //take first name from person above
    const last = person.name.split(" ")[1];
    console.log("Your full name is " + first + " " + last + ".");

}

displayStudentInfo(person);
    //exercise 3
    const users = { user1: 18273, user2: 92833, user3: 90315 }
//convert to array
userarray=Object.entries(users);
console.log(userarray);
//multiply the user ID by 2

for (let i=0;i<userarray.length;i++){
    userarray[i][1]=userarray[i][1]*2;
console.log(userarray[i]);
}   //output array
console.log(userarray);

//exerciese 4
//object


//exercise 5
class Dog {
  constructor(name) {
    this.name = name;
  }
};

//3 extends the class dog.  


//exercise 6
//challenges
//[2] === [2]  // false
//{} === {}  // false

