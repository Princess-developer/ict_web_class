let myinp = document.getElementById("myinp");

const btn2 = document.getElementById("btn2");


function show() {
    document.body.style.backgroundColor = myinp.value;
}

btn2.addEventListener("click", show)



const person = {
    Name: "Daniel",
    age: 16,
    gender: "M",
    friends: ["max", "john", "DY", "Gift"],
    fav_color: "Gold",
}

const fruits = ["apple", "mango", "cherry", "Berries", "PawPaw"]
console.log(`my favorite fruit is ${fruits[0]}`);


for (let i = 0; i < 10; i++){
    console.log(`I = ${i}`);
    
}

for (let i = 10; i >= 0; i--){
    console.log(`I = ${i}`);
    
}

for (let i = 0; i < 5; i++){
    console.log(`my favourite fruit is ${fruits[i]}`);
    
}