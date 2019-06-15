# Memory Matching Game

The basic idea of the project is to immune the memory power of all people irrespective of their age. The game showcases the talents of users i.e. how faster they are able to grasp a symbol and match it.

## Table of Contents

-   [Download the Scratch](#downloadthescratch)
-   [How to Run](#howtorun)
-   [How to Play](#howtoplay)
-   [Game Features](#gamefeatures)
-   [Project Dependencies](#projectdependencies)
-   [Contributing](#contributing)

## Download the Scratch

-   It's not necessary to develop the project from scratch. The basic starter code for HTML,CSS,JS is available in the following links:
    -   Memory Game project repository on GitHUB: <https://github.com/udacity/fend-project-memory-game>
    -   The Zipped File : <https://github.com/udacity/fend-project-memory-game/archive/master.zip>
-   For completion of the project you need to edit only app.js  file.
-   Initially I have downloaded the scratch project from GitHub repository and edited app.js based on the game's functionality.

## How to Run

-   After downloading the scratch from either GitHub repository or through a zipped file from given links above ,open index.html file in a browser.

## How to Play

-   The game board consists of total 16 cards ,the deck is made up of eight different pairs of cards, each with different symbols on one side facing down.
-   The basic functionality of the game is:
    -   The player clicks on a random card to reveal its underlying symbol.
    -   Then the player continues to find out the card with same symbol by clicking on remaining cards.
    -   If corresponding matching symbol card is found the 2 cards freeze.
    -   If not found the cards get flipped down( i.e. same as they were in beginning).

## Game Features

1.  Timer

-   A timer is set to display the total time taken by the player to complete the game. The timer starts as soon as the player clicks the first card. In order to call timer for every second I have used `setInterval()` method.
-   The `setInterval()` method calls a function or evaluates an expression at specified intervals (in milliseconds).
-   For example, `setInterval`(abc,1000) calls abc for every 2 seconds.

2.  Star Rating

-   The total number of stars required by the player to complete the game is shown here. I have displayed the star rating based on the number of moves made. The ranges of moves associated with each star are shown below:

    -   3⭐️⭐️⭐️ If the moves are less than or equal to 10.
    -   2⭐️⭐️ If the moves are between 11 and 20.
    -   1⭐️ If the moves are greater than 20.

3.  Congrats Popup

-   As soon as the player matches all the cards the timer stops and a congratulations popup is raised displaying the number of moves made, time taken, star rating. To stop the timer I used `clearInterval()` method.
-   The `clearInterval()` method clears a timer set with the `setInterval()` method. The ID value returned by `setInterval()` is used as the parameter for the `clearInterval()` method.
-   Usage of `clearInterval()` is as follows:
      temp = `setInterval`(abc,1000);
      `clearInterval`(temp);

## Project Dependencies

-   Coda font family : [Google Fonts](https://fonts.google.com)
-   Font Awesome     : [Font Awesome](https://fontawesome.com)
-   Sweet Alert      : [Sweet Alert](https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css)

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
