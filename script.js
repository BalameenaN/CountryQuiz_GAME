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
let leftEl = document.querySelector("#player1");
let rightEl = document.getElementById("player2");
let qno = document.querySelector(".heading");
let results = document.querySelector("#result")
let message = document.getElementById("msg");
let playerTurn = document.querySelector("#turn");
let Box1 = document.getElementById("box1");
let Box2 = document.getElementById("box2");
let num1 = Math.floor(Math.random() * 11);
let totalQuestions = 1;
let player1 = 0;
let player2 = 0;
let ans = 1;
let isClicked = false;
let isPlayer1 = true;

// initial values while loading the page
valueGenerator(num1);
var num = num1;
//console.log("call1");
qno.textContent = `QUESTION NO. ${totalQuestions}`

// function to generate random country and capital
function valueGenerator(random) {

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
        //console.log(totalQuestions, "pointer1-call6");
    }
    else if (totalQuestions % 2 == 0 && a == 1) {
        player2++;
        //console.log(totalQuestions, "pointer2-call6");
    }

}
//Adding EventListener for the options through event bubbling
optionEl.addEventListener('click', function (e) {
    isClicked = true;

    if (e.target.textContent == inputValue[num].capital) {
        //console.log("inside if-call5");
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
        //console.log("inside else-call5");
    }
    // counting the number of points
    pointCounter(ans);
    leftEl.textContent = player1;
    rightEl.textContent = player2;

})

//adding EventListener for NEXT button
btnEl.addEventListener('click', function (e) {
    let randomNo = Math.floor(Math.random() * 11);
    //console.log(randomNo);
    //console.log("call3");

    //main if loop to check if any option is selected or not
    if (isClicked == true) {
        //to display which player need to play the current turn
        if (isPlayer1) {
            playerTurn.textContent = "Player 2's TURN";
            Box2.style.background = "rgb(153, 135, 247)";
            Box1.style.background = "rgb(199, 200, 205)";
        }
        else {
            playerTurn.textContent = "Player 1's TURN";
            Box1.style.background = "rgb(153, 135, 247)";
            Box2.style.background = "rgb(199, 200, 205)";
        }
        isPlayer1 = !isPlayer1;

        totalQuestions++;
        qno.textContent = `QUESTION NO. ${totalQuestions}`;
        //nested if to check if the chance has reached maximum no.
        if (totalQuestions <= 6) {

            seperateBtn.forEach(function (b) {
                b.disabled = false;
                b.style.background = "rgb(198, 205, 227)";
            })
            s.textContent = "";
            answer.textContent = "";
            console.log("call4", randomNo);
            valueGenerator(randomNo);
            //eventListener(randomNo);
            num = randomNo;
            isClicked = false;
        }
        //nested loop else
        else {
            btnEl.disabled = true;
            s.textContent = "";
            answer.style.color = "red";
            answer.textContent = "GAME OVER!";
            qno.style.color = "red";
            qno.textContent = "GAME OVER!"
            message.style.color = "red";
            playerTurn.textContent="";
            //Determining the winner
            if (totalQuestions == 7 && player1 > player2) {
                message.innerHTML = "<h2>PLAYER 1 is the winner</h2>";
            }
            else if (totalQuestions == 7 && player1 < player2) {
                //results.textContent = "PLAYER 2 is the winner"; 
                message.innerHTML = "<h2>PLAYER 2 is the winner</h2>";
            }
            else if (totalQuestions == 7 && player1 == player2) {
                //results.textContent = "It's a TIE";
                message.innerHTML = "<h2>It's a TIE</h2>";
            }
        }
    }
    //main loop else
    else {
        alert("Please select an option before clicking NEXT");
    }
})







