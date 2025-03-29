//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// take an object and return its values in an array
function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// take an object and return its keys as a string separated with a space
function keysToString(object) {
    return (Object.keys(object)).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// take an object and return its **string** values as a string separated with a space
function valuesToString(object) {
    //holder array for values ** that are strings **
    var stringy  = [];
    // for in loop + if statement to tell if the value is a string
    for (var key in object){
      if (typeof object[key] === 'string'){
      stringy.push(object[key]);
        //console.log(stringy);
      }
    }
    // return as a string with a space
    return stringy.join(" ");
  }

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// takes in an array or an object and returns array if array, object if object
function arrayOrObject(collection) {
    if (Array.isArray(collection) === true){
        return "array";
    } else if (collection instanceof Date === false && collection !== null && typeof collection === 'object') {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// takes in a string and returns it with the first letter capitalized
function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

// takes in a string of words and returns with all words first letter capitalized
function capitalizeAllWords(string) {
    //turn strings into an array of words with split method
    var arrayOfStrings = string.split(" ");
    //console.log(arrayOfStrings);

    // have holder array for capitalized and push each modified string into array
    var capitalArray = [];
    for (var i = 0; i < arrayOfStrings.length; i++){
        capitalArray.push(arrayOfStrings[i][0].toUpperCase() + arrayOfStrings[i].slice(1));
    }
    // return modified array as a string with join
    return capitalArray.join(" ");
}


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// takes an object with a name property then returns "Welcome <Name>!" - name must have capitalized first letter
function welcomeMessage(object) {
    // make a variable for the capitalized name
    var capitalName = object.name[0].toUpperCase() + object.name.slice(1); 
    // write welcome message with capitzlied name
    return "Welcome " + capitalName + "!"; 

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// should take in an object with name + species and return '<Name> is a <Species>'
function profileInfo(object) {
    // dot notation to access name and species
    // turn both values into uppercased version
    var capitalName = object.name[0].toUpperCase() + object.name.slice(1);
    var capitalSpecies = object.species[0].toUpperCase() + object.species.slice(1);
    return capitalName + " is a " + capitalSpecies;

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
I: An Object
O: If a noises array exists, return it as a string separated by a space
C: N/A
E: If noise array doesn't exist, return a string that says "there are no noises"
*/

function maybeNoises(object) {
    // if statement for checking whether noises exists
    if (object['noises']){
      return object['noises'].join(' ');
    // else return 'there are no noises'
    } else {
      return 'there are no noises';
    }
  }

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}