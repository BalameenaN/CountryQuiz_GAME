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
console.log(options);
let no = Math.floor(Math.random() * 3)
console.log("capital no", no);
for (let i = 0; i < options.length; i++) {
    if (i == no) {
        options[i].textContent = inputValue[randomNo].capital;
    }
    else {
        options[i].textContent = inputValue[Math.floor(Math.random() * 11)].capital;
        console.log(options[i].textContent);
    }
}

