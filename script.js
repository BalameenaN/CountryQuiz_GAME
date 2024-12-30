let inputValue = [{
    country: "Angola",
    capital: "Luanda"
},
{
    country: "Bulgaria",
    capital: "Sofia"
},
{
    country: "Cuba",
    capital: "Havana"
},
{
    country: "Ethiopia",
    capital: "Addis Ababa"
},
{
    country: "Greece",
    capital: "Athens"
},
{
    country: "India",
    capital: "New Delhi"
},
{
    country: "Mauritius",
    capital: "Port Louis"
},
{
    country: "Nepal",
    capital: "Kathmandu"
},
{
    country: "Romaniaa",
    capital: "Bucharest"
},
{
    country: "United States of America",
    capital: "Washington, D.C"
},
{
    country: "Zimbabwe",
    capital: "Harare"
}
];

//getting random country as question
let randomNo = Math.floor(Math.random() * 11);
console.log(randomNo);

let countryEl = document.querySelector(".country");
console.log(countryEl);
countryEl.textContent = inputValue[randomNo].country;

//getting random capital as options
let op1 = document.querySelector(".option1");
let op2 = document.querySelector(".option2");
let op3 = document.querySelector(".option3");
let op4 = document.querySelector(".option4");

let options = [op1, op2, op3, op4];
//console.log(options.length);

let randomArray=[];
randomArray.push(randomNo);//pushing index of answer into the array
console.log(randomArray.length);
do{
    let no1 = Math.floor(Math.random() * 10);
    if(randomArray.includes(no1)){
       continue;
    }
    else{
        randomArray.push(no1);  //pushing index of other options
    }

}while(randomArray.length<options.length)
       

//console.log(randomArray);

randomArray.sort((a,b)=> a-b);//to shuffle the option values

console.log(randomArray);

for(let i=0; i < options.length; i++){
    let input = randomArray[i];
 options[i].textContent = inputValue[input].capital;
}

/*let totalQuestions = 10;
for(let i=1; i<=totalQuestions; i++){
    if (i%2==0){
        console.log("player2 need to play");
        
    }
}*/

let optionEl = document.querySelector("#question");
let seperateBtn = document.querySelectorAll("#option");
let btnEl = document.querySelector("#next");
let answer = document.querySelector("#ans");
let s = document.querySelector(".sentence");


btnEl.addEventListener('click',function(e){
    btnEl.textContent = "Next";

})

optionEl.addEventListener('click',function(e){
    console.log(e.target.textContent);
    console.log(seperateBtn);
    if(e.target.textContent == inputValue[randomNo].capital){
        console.log("inside if");
        e.target.style.background = "green";
        seperateBtn.forEach(function(b){
            if(e.target != b){
            b.disabled= true;}
    })
    answer.textContent = "CORRECT ANSWER!";
} 
    else{
        e.target.style.background = "red";
        seperateBtn.forEach(function(b){
            if(e.target != b){
            b.disabled= true;}
    })
    s.textContent = "Correct Answer is:";
    answer.textContent = inputValue[randomNo].capital;
    }
    
})

