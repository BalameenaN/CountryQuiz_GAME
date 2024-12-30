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


let op1 = document.querySelector(".option1");
let op2 = document.querySelector(".option2");
let op3 = document.querySelector(".option3");
let op4 = document.querySelector(".option4");
let options = [op1, op2, op3, op4];
let countryEl = document.querySelector(".country");
let optionEl = document.querySelector("#question");
let seperateBtn = document.querySelectorAll("#option");
let btnEl = document.querySelector("#next");
let startEl = document.querySelector("#start");
let answer = document.querySelector("#ans");
let s = document.querySelector(".sentence");
let num = Math.floor(Math.random() * 11);
let totalQuestions = 10;


//getting random capital as options

//console.log(options.length);
function valueGenerator(random) {
    //console.log(random);
    countryEl.textContent = inputValue[random].country;
    let randomArray = [];
    randomArray.push(random);//pushing index of answer into the array
    console.log(randomArray.length);
    do {
        let no1 = Math.floor(Math.random() * 10);
        if (randomArray.includes(no1)) {
            continue;
        }
        else {
            randomArray.push(no1);  //pushing index of other options
        }
    } while (randomArray.length < options.length)
    //console.log(randomArray);

    randomArray.sort((a, b) => a - b);//to shuffle the option values

    console.log(randomArray);

    for (let i = 0; i < options.length; i++) {
        let input = randomArray[i];
        options[i].textContent = inputValue[input].capital;
    }
}

function eventListener(num) {
    //optionEl.classList.add('active');
    optionEl.addEventListener('click', function (e) {
        console.log(e.target.textContent);
        console.log(seperateBtn);
       // if(optionEl.classList.contains('active')){
        if (e.target.textContent == inputValue[num].capital) {
            console.log("inside if");
            e.target.style.background = "green";
            seperateBtn.forEach(function (b) {
                if (e.target != b) {
                    b.disabled = true;
                }
            })
            answer.textContent = "CORRECT ANSWER!";
        }
        else {
            e.target.style.background = "red";
            seperateBtn.forEach(function (b) {
                if (e.target != b) {
                    b.disabled = true;
                }
            })
            s.textContent = "Correct Answer is:";
            answer.textContent = inputValue[num].capital;
        }
   // }

    })
}



valueGenerator(num);
eventListener(num);
btnEl.addEventListener('click', function (e) {
    let randomNo = Math.floor(Math.random() * 11);
    //optionEl.classList.remove('active');
   
    totalQuestions--;
    if(totalQuestions>0){
        seperateBtn.forEach(function (b) {
            b.disabled = false;
            b.style.background="rgb(198, 205, 227)";
    })
        valueGenerator(randomNo);
    eventListener(randomNo);
    }  
})


//function for listening the event

