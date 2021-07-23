// Code your solution here


//This function takes an array of drivers' names and a string as arguments, 
//and returns the matching list of drivers. The function should be case insensitive.
// iterate through array of drivers names 
// case insensitive, string .toUpperCase()

//.push to create new array then .toUpperCase?..
function findMatching(drivers, string) {
    let matches = drivers.filter(name => name.toUpperCase() == string.toUpperCase());
    return matches;
 }

 function fuzzyMatch(drivers, string) {
     //console.log(drivers)
     let matches = drivers.filter(name => name[0])
     return matches;
 }


//  This function takes an array of drivers' names and a string as arguments 
//for querying the array, and returns all drivers whose names begin with the provided letters.
//const fuzzyMatch = (drivers, name) => {
//    return drivers.filter.subtring((0,1) === name)
//}