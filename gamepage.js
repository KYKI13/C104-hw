// generation of random value
var y = Math.floor(Math.random() * 10 + 1);
// count of attempts
// until hit
var guess = 1;
playername = localStorage.getItem("player_name");
function send(){


// function for the number sent by the user
var x = document.getElementById("guessField").value;

if (x == y)
 {
    alert("CONGRATUALATIONS!! " + playername + " YOU GUESSED IT RIGHT IN "
     + guess + "GUESS");
    guess = 1;
} else if (x > y) {
    guess++;
    alert("OOPS SORRY !! TRY A SMALLER NUMBER");
} else {
    guess++;
    alert("OOPS SORRY !! TRY A GREATER NUMBER");
}

}
function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}