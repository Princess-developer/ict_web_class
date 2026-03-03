function add_number() {
    let x = 1
let y = 2

const add_number = x + y;

console.log(add_number);
}

let Username = "princess"
let age = "25"

console.log("Hello " + Username + " you are welcome");
console.log("You are " + age);
console.log(`hello ${Username} you are welcome`);

function Greet(Name , Age) {
    console.log("Hello " + Name);
    
    console.log("you are " + Age);
    console.log("Hello " + Name + " you are " + Age + " years old");
    
    
}
Greet("Princess" , "25")

alert("WELCOME")

let username = prompt("What is your name")
console.log("HELLO " + username + " WELCOME TO MY WEBSITE");

let P = prompt("pick a number")

    let result = P % 2
    console.log(result);
    if (result) {console.log("ODD");
    
        
    } else {console.log("EVEN");
    
        
    }

    const checker = (e) => {
        if (e <= 15) {
            console.log("you cannot enter this website");
        } else if (e > 15 && e <= 20){
            console.log("yo you can enter");
            
        } else {
            console.log("you are too old to enter this website");
            
        }
        
    }
    checker(prompt("Enter ur age"))
    
