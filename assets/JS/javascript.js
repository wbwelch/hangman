// JavaScript Document

//create object with letter, lives, answer arrays, wins, message

var hangmanGame = {
	letters: ["abcdefghijklmnopqrstuvwxyz"],
	lives: 12,
	answers: [ "Freddy", "Jason", "Michael", "Leatherface", "Candyman", "Hannibal", "Norman", "Chucky", "Pennywise", "Cujo", "Pinhead" ],
	wins: 0,
	messages: {
            win: 'Winner, winner, chicken dinner!',
            lose: 'Death!',
            guessed: ' already guessed, please try again...',
            validLetter: 'Please enter a letter from A-Z'
		  },
		};
		

	//generate random word
	var gameWord = hangmanGame.answers[Math.floor(Math.random() * hangmanGame.answers.length)];

	//console tests
	console.log("test")
	console.log(gameWord),
	console.log(gameWord.length);	
	console.log(hangmanGame.wins);
	console.log(hangmanGame.lives);
	

//Why isn't the text jquery working?

$("#guess-remain").text(hangmanGame.lives);
$("#wins-display").text(hangmanGame.wins);


	
//create game function


		//generate underlines the length of gameWord
		//why did this stop working?
		for (i = 0; i < gameWord.length; i++) {
			var letterBox = $("<div>");
			console.log(gameWord[i]);
			letterBox.addClass("letter-box");
			letterBox.text(" ");
			$("#answer-reveal").append(letterBox);
			
		//correct guesses
		//$("answers-reveal").append("")

		//incorrect guesses
		//$("used-letters").append("")

		//how do i compare user input to a value of a property in an object
			//need .toLowerCase user input for accuracy
			for (k = 0; k < gameWord.length; k++) {
				//if onkeydown === gameWord[k]){
					//create div in #answer-reveal
					//add class
					//add text
					//append
				//can i add text to the existing created divs with the bottom borders?
				
				

				//else if onkeydown is !== letters && onkeydown !==gameWord 
					//create div in #used-letters
					//add class
					//add text
					//append
					//lives--
				
				//else if already guessed (compare to letters in guessed word area), do nothing
					//creat a temporary variable...change the index value?
					//max length is the length of the alphabet?
					
			};

	//for each win, ++wins
	
	//loop until user var value == gameWord value or lives value <1
			
	//display message

	//change image
	
	//play song
		
	//reset game(loop)
			
	//initiate game on keypress(call function)

			




	

	


	
