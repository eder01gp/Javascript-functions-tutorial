// Your code goes here:
var renderPerson = function(name,dateBirth,colorEyes,age,gender){
  return `${name} is a ${age} years old ${gender} born in ${dateBirth} with ${colorEyes} eyes`
};

console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));