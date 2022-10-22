const createPerson = (name,age,gender) =>({name,age,gender});

const createPersonOldWay = (name,age,gender) =>{
    
return{
    name:name,
    age:age,
    gender:gender 
}

};

//Old way
const bike ={
    gear: 2,
    setGear: function(gear) {
        "use strict";
        this.gear = gear;
    }
}
//new way
const bikeNew ={
    gear: 2,
    setGear(gear) {
        "use strict";
        this.gear = gear;
    }
}

bike.setGear(3);
console.log(bike.gear);