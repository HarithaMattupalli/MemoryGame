/*defines that code must be executed in strict mode.For example it doesn't allow the
  use of undeclared variables*/
"use strict";
var cnt; //used in displayRating() to display the star rating
var mins = 0; //to set minutes in timer
var secs = 0; //to set seconds in timer
var moves = 0; //to count number of moves made
var myvar; //used as returntype for setInterval for the use of clearInterval to stop timer.
var first_click = []; //to start timer
var temp = []; //to stop timer(to store cards that are opened/matched)
var ele_clicked = []; //items that are clicked are stored here

/* Create a list that holds all of your cards*/
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
var mycards = [...document.querySelectorAll(".card")]

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

/*The below code is used to implement shuffle function for cards in the deck when the
  player resets the game or wishes to play again*/
var deck = document.querySelector(".deck")
var sh_cards = shuffle(mycards)
for (var j = 0; j < sh_cards.length; j++) {
  [].forEach.call(sh_cards, function(i) {
    deck.appendChild(i);
  });
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

/* For each card an eventlistener is added whenever it is clicked and a function to show the clicked
  card is called named as showcard().*/
for (var i = 0; i < mycards.length; i++) {
  mycards[i].addEventListener("click", showcard(i));
}

/* The below function displays the card which is clicked with help of eventlistener added to card.*/
function showcard(i) {
  return function() {
    first_click.push(mycards[i]);
    if (first_click.length == 1) {
      myvar = setInterval(startTimer, 1000);
    }
    mycards[i].classList.add("open", "show", "onlyOneClick")
    ele_clicked.push(mycards[i])
    comparecard();
  }
}

/*The function compares whether two cards opened are equal or not,if they are equal the cards are made
  fixed to display otherwise they are closed.*/
function comparecard() {
  if (ele_clicked.length == 2) {
    starRating();
    setTimeout(function() {
      if (ele_clicked[0].children[0].className == ele_clicked[1].children[0].className) {

        ele_clicked.map((i) => {
          i.classList.remove("open", "show")
          i.classList.add("match")
          temp.push("abc")
          if (temp.length == 16) {
            stopTimer();
          }
        })
      } else {
        ele_clicked.map((i) => {
          i.classList.remove("open", "show", "onlyOneClick")
        })
      }
      ele_clicked = [];
    }, 200);
  }
}

/*Used to reset the game*/
function reset() {
  window.location.reload();
}

/*When user clicks any one card the timer starts,so the below function is called in showcard() */
function startTimer() {
  secs += 1;
  document.querySelector(".secs").innerHTML = secs;
  if (secs == 60) {
    mins += 1;
    secs = 0;
  }
  document.querySelector(".mins").innerHTML = mins;
}

var moveEle = document.getElementsByClassName("moves");
/*The function displays the number of stars used by the user to match all the cards
based on the number of moves made.*/
function starRating() {
  var starEle = [];
  var starEle = document.querySelectorAll(".fa-star");
  let i = starEle.length;

  moves += 1;
  moveEle[0].textContent = moves;
  if (moves == 10) {
    starEle[i - 1].className = "fa fa-star-o"
  } else if (moves == 20) {
    starEle[i - 1].className = "fa fa-star-o"
  }
}

/*The function displays star rating in sweetalert popup acquired by the user after completion of the game*/
function displayRating() {
  if (moves <= 10) {
    cnt = "3⭐⭐⭐";
  } else if (moves > 10 && moves <= 20) {
    cnt = "2⭐⭐";
  } else if (moves > 20) {
    cnt = "1⭐";
  }
  return cnt;
}

/*The function stops the timer when all the cards are matched and shows a congratulations popup
  displaying the number of moves made,time taken to complete and star rating acquired by the
  user.It also displays a button to play the game again based on users wish.*/
function stopTimer() {
  clearInterval(myvar);
  swal({
    title: "Congratulations...😃😃You won the game!!!👍👍",
    text: "\n Time : " + mins + " mins " + secs + " secs" + "\n Moves made : " + moves + "\n Rating : " + displayRating(),
    type: "success",
    confirmButtonColor: "brown",
    confirmButtonText: "Play Again"
  }, function() {
    location.reload();
  })
}
