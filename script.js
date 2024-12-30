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

let playerPoints = [
    {
        player: 1,
        point: 0
    },
    {
        player: 2,
        point: 0
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
let leftEl = document.querySelector("#player1");
let rightEl = document.getElementById("player2");
let qno = document.querySelector(".heading");
let results = document.querySelector("#result")
let num1 = Math.floor(Math.random() * 11);
let totalQuestions = 1;
let player1 = 0;
let player2 = 0;
let ans = 1;

valueGenerator(num1);
eventListener(num1);
console.log("call1");
qno.textContent = `QUESTION NO. ${totalQuestions}`
//getting random capital as options

//console.log(options.length);
function valueGenerator(random) {
    //console.log(random);
    countryEl.textContent = inputValue[random].country;
    let randomArray = [];
    randomArray.push(random);//pushing index of answer into the array
    //console.log(randomArray.length);
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

//function for counting the point secured by player

function pointCounter(a) {
    console.log(a, "a");
    if (totalQuestions % 2 != 0 && a == 1) {
        player1++;
        console.log(totalQuestions, "pointer1-call6");
    }
    else if (totalQuestions % 2 == 0 && a == 1) {
        player2++;
        console.log(totalQuestions, "pointer2-call6");
    }

}

function eventListener(num) {

    optionEl.addEventListener('click', function (e) {

        console.log("call2");
        console.log(e.target.textContent);
        console.log(inputValue[num].capital);
        console.log(num, "num");

        if (e.target.textContent == inputValue[num].capital) {
            console.log("inside if-call5");
            e.target.style.background = "green";
            seperateBtn.forEach(function (b) {
                if (e.target != b) {
                    b.disabled = true;
                }
            })
            s.textContent = "";
            answer.textContent = "CORRECT ANSWER!";
            ans = 1;
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
            ans = 0;
            console.log("inside else-call5");
        }

        pointCounter(ans);
        leftEl.textContent = player1;
        rightEl.textContent = player2;
        console.log(player1, "player1");
        console.log(player2, "player2");
        //num=0;

    })
}


btnEl.addEventListener('click', function (e) {
    let randomNo = Math.floor(Math.random() * 11);
    //optionEl.classList.remove('active');
    console.log(randomNo);
    console.log("call3");
    totalQuestions++;
    qno.textContent = `QUESTION NO. ${totalQuestions}`
    if (totalQuestions <= 6) {
        seperateBtn.forEach(function (b) {
            b.disabled = false;
            b.style.background = "rgb(198, 205, 227)";
        })
        s.textContent = "";
        answer.textContent = "";
        console.log("call4", randomNo);
        valueGenerator(randomNo);
        eventListener(randomNo);
    }
    else {
        btnEl.disabled = true;
        s.textContent = "";
        answer.style.color = "red";
        answer.textContent = "GAME OVER";
    }

})

/*// determining the winner
if(player1 > player2){
    results.textContent = "PLAYER 1 is the winner";
}
else{
   results.textContent = "PLAYER 2 is the winner"; 
}*/




