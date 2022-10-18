var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything"],
};

var myDog = {
  name: "Vacak",
  legs: 4,
  tails: 1,
  friends: ["everything"],
};

var nameValue = ourDog.name;
var friendsValue = myDog.friends;

var accessBySquareBracket = ourDog["name"];

console.log(accessBySquareBracket);

let legs = "legs";
var accessByVariable = ourDog[legs];

console.log(accessByVariable);

//Updating properties of the object

myDog.name = "Happy coder";

//You can add new property with the dot notation or the brackets notation

myDog["hat"] = 1;

myDog.ears = 2;

console.log(myDog.hat);

console.log(myDog.ears);

//A delete segítségével ki tudjuk törölni a propertyt
delete myDog.ears;

console.log(myDog.ears);

//Objects for lookups
//Switch helyett lehet használni és így
//a bracket notationben meg lehet adni a bemeneti paramétert
var lookup = {
  alpha: "Adams",
  bravo: "Boston",
  charlie: "Chicago",
  delta: "Denver",
  echo: "Easy",
  foxtrot: "frank",
};

function phoneticLookup(val) {
  return lookup[val];
}

console.log(phoneticLookup("delta"));

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
};

function checkObj(checkProp) {
  //hasOwnProperty can check if object has the property that is passed in as parameter
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not found";
  }
}

console.log(checkObj("gift"));
console.log(checkObj("head"));

var myMusic = [
  {
    "id": "1",
    "name": "The Beatles",
    "artist": "John Harris",
    "relase_year": "2015",
    "formats": ["mp3", "wav", "CD-ROM"],
  },
  {
    "id": "2",
    "name": "The Beatles2",
    "artist": "John Harris2",
    "relase_year": "2015",
    "formats": ["mp3", "wav", "CD-ROM"],
  },
  {
    "id": "3",
    "name": "The Beatles3",
    "artist": "John Harris2",
    "relase_year": "2015",
    "formats": ["mp3", "wav", "CD-ROM"],
  },
  {
    "id": "4",
    "name": "The Beatles4",
    "artist": "John Harris2",
    "relase_year": "2015",
    "formats": ["mp3", "wav", "CD-ROM"],
  },
  { 
    "id": "5",
    "name": "The Beatles5",
    "artist": "John Harris2",
    "relase_year": "2015",
    "formats": ["mp3", "wav", "CD-ROM"],
  },
];


var myStorage = {
    "car":{
        "inside": {
            "glove box":"maps",
            "passenger seat": "crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};

//Bracket notations can be chained together in order to access nested object properties
var gloveBoxContents = myStorage["car"]["inside"]["glove box"];

console.log(gloveBoxContents);


var secondMusic = myMusic[1];

console.log(secondMusic.name);
console.log(secondMusic.formats[2]);

function checkById(music) {
    return music.id === "cherries";
  }


function updatePropById(id,prop,value){

    const foundMusic = myMusic.find((music)=> music.id === id );
    if(foundMusic && foundMusic.hasOwnProperty(prop) && value && value.length > 0){
            if(Array.isArray(foundMusic[prop]) && found){
                foundMusic[prop] = foundMusic[prop] || [];
                foundMusic[prop].push(value);
                return foundMusic;
            }else{
                foundMusic[prop] = value;
                return foundMusic;
            }
    }else{
        delete foundMusic[prop];
        return foundMusic;
    }   
}

console.log(updatePropById( "4","formats","new format"));