// app.js

import people from "./data.mjs";

function calculateAverageAge(persons) {


  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / persons.length;
  console.log(`The average age is: ${averageAge.toFixed(1)} years.`);
  console.log(`Total number of people: ${persons.length}`);
 
}

calculateAverageAge(people);
