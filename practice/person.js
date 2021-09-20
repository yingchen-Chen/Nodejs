class Person {
    constructor(name='noname',age=20){
        this.name = name;
        this.age = age;
    }
    toJSON(){
        return{
            name: this.name,
            age: this.age,
        }
    }
    toString(){
        return JSON.stringify(this.toJSON(),null,2); //2是字元縮排數目，null沒有要用字元取代
    }
}
module.exports = Person;
