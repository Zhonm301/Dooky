document.addEventListener("DOMContentLoaded", function() {
    // FEED
    const carrotButton = document.querySelector(".carrot");
    const fedTwoDiv = document.querySelector(".fed-two");
    const normOneDiv = document.querySelector(".norm-one");

    carrotButton.addEventListener("click", function() {
        // Show the .fed-two div and hide .norm-one div
        fedTwoDiv.style.display = "block";
        normOneDiv.style.display = "none";

        // Revert changes after 1 second
        setTimeout(function() {
            fedTwoDiv.style.display = "none";
            normOneDiv.style.display = "block";
        }, 1000); // 1000 milliseconds = 1 second
    });

    // HUG
    const heartButton = document.querySelector(".heart");
    const hugThreeDiv = document.querySelector(".hug-three");

    heartButton.addEventListener("click", function() {
        // Show the .hug-three div and hide .norm-one div
        hugThreeDiv.style.display = "block";
        normOneDiv.style.display = "none";

        // Revert changes after 1 second
        setTimeout(function() {
            hugThreeDiv.style.display = "none";
            normOneDiv.style.display = "block";
        }, 1000); // 1000 milliseconds = 1 second
    });

    // PLAY
    const snowButton = document.querySelector(".snow");
    const playFourDiv = document.querySelector(".play-four");

    snowButton.addEventListener("click", function() {
        // Show the .play-four div and hide .norm-one div
        playFourDiv.style.display = "block";
        normOneDiv.style.display = "none";

        // Revert changes after 1 second
         // Add jump animation class
    playFourDiv.classList.add("jump-once");

    // Remove jump class after animation ends so it can trigger again next time
    setTimeout(function () {
        playFourDiv.classList.remove("jump-once");
    }, 600); // match animation duration

    setTimeout(function () {
        playFourDiv.style.display = "none";
        normOneDiv.style.display = "block";
    }, 1000);  // 1000 milliseconds = 1 second
    });

    // POKE
    const pokeButton = document.querySelector(".poke");
    const pokesFiveDiv = document.querySelector(".pokes-five");
    const pokeSixDiv = document.querySelector(".poke-six");
    let clickCount = 0;

    pokeButton.addEventListener("click", function() {
        clickCount++;

        if (clickCount === 3) {
            pokesFiveDiv.style.display = "none";
            pokeSixDiv.style.display = "block";
            normOneDiv.style.display = "none";
            clickCount = 0;
        } else {
            pokesFiveDiv.style.display = "block";
            pokeSixDiv.style.display = "none";
            normOneDiv.style.display = "none";
        }

        // Revert changes after 1 second
        setTimeout(function() {
            pokeSixDiv.style.display = "none";
            pokesFiveDiv.style.display = "none";
            normOneDiv.style.display = "block";
        }, 1000); // 1000 milliseconds = 1 second
    });

    // HAT TOGGLE
    
    const hatButton = document.querySelector(".hat");
    const wearDiv = document.querySelector(".wear");
   
    
    hatButton.addEventListener("click", function() {
      // Toggle the wear div
      wearDiv.style.display = (wearDiv.style.display === "none" || wearDiv.style.display === "") 
        ? "block" 
        : "none";
    
      // Only jump if playFourDiv is visible
      if (playFourDiv.style.display === "block") {
        playFourDiv.classList.add("jump-once");
    
        setTimeout(() => {
          playFourDiv.classList.remove("jump-once");
        }, 600); // match the animation duration
      }
    });
});
