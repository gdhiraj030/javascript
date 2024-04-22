//array
const fruits = [apples,banana,kiwi]

//objects 
const userOne = {
    name : "dhiraj gurung",
    age : 30,
    city : "butwal"
    bio : function(){
        console.log(`my name is ${this.name} and my age is ${this.age} and i  am from ${this.city}`);
    }
}
userOne.bio