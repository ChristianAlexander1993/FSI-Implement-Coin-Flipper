// TODO: Declare any global variables we need
var heads = 0
var percentageOfHeads = 0
var tails = 0
var percentageOfTails = 0
var pennyImage = document.getElementById('penny-image')

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    let flipButton = document.querySelector('#flip') 
    flipButton.addEventListener('click', flipCoin);
        function flipCoin(){
        let flip = Math.floor(Math.random() * 2);
        if (flip === 0){
            heads+
            console.log("heads" + heads);
            pennyImage.setAttribute('src', './assets/images/penny-heads.jpg')
            document.getElementById('message').innerHTML = "It's Heads!"
            document.getElementById('heads').innerHTML = heads++
        }
        else {
            if (flip === 1){
                tails+
                console.log("tails" + tails);
                pennyImage.setAttribute('src', './assets/images/penny-tails.jpg')
                document.querySelector('#message').innerHTML = "It's Tails!"
                document.getElementById('tails').innerHTML = tails++
            }
        }
    }

    let clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', clearBoard);
    

    

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM
        

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})