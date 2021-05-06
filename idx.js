class Person{
    constructor(name,age,school){
        this.name=name
        this.age=age
        this.school=school
    }
   get greeting() {
        return `Hi ${this.name} welcome to ${this.school}`
    }
}
let person= new Person("HGSB",25,"AkiraChix");
console.log(person.greeting);

// import {student} from object.js
// console.log(`hello miss ${student}`);

function student(){
    var marks=90;
    if(marks>=80){
        console.log("grade A")
    }
    else if (marks>=60 && marks<=79){
         console.log("grade B")
    }
    else if (marks>=50 && marks<=59){
        console.log("grade C")
    }
    else{
        console.log("grade D")
    }
}
function result(firstName,lastName,callback){
    callback({f:firstName,l:lastName});
    
}
result("Sophia","Gerardine",student)
var people=result("Belyse","Hamdi",people=>{
    console.log(people.f);
    console.log(people.l);
});