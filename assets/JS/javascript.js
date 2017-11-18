// JavaScript Document

//.game-photo is class element when inserting new photos


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
		


	var gameWord = hangmanGame.answers[Math.floor(Math.random() * hangmanGame.answers.length)];
	console.log("test")
	console.log(gameWord),
	console.log(gameWord.length);	
	console.log(hangmanGame.wins);
	console.log(hangmanGame.lives);
	



$("#guess-remain").text(hangmanGame.lives);
$("#wins-display").text(hangmanGame.wins);

//if/else/if
		//if userinput is in gameWord and letters

		//correct answers
		//$("answers-reveal").append("")

		//incorrect answers
		//$("used-letters").append("")
	
	function fullGame(e)	{
		var pressedKey;
			if (document.all)   { e = window.event; }
			if (document.layers || e.which) { pressedKey = e.which; }
			pressedCharacter = String.fromCharCode(pressedKey).toLowerCase();
			move(pressedCharacter);

		}

		
		
		for (i = 0; i < gameWord.length; i++) {
			var letterBox = $("<div>");
			console.log(gameWord[i]);
			letterBox.addClass("letter-box");
			letterBox.text(" ");
			$("#answer-reveal").append(letterBox);

			for (k = 0; k < gameWord.length; k++) {
				//if onkeydown === gameWord[k]){
					//create div in #answer-reveal
					//add class
					//add text
					//append
					var letterBox = $("<div>");
					console.log(gameWord[k]);
					letterBox.addClass("letter-box");
					letterBox.text(gameWord[k]);
					$("#answer-reveal").append(letterBox);
				}

				//else if (pressedKey === hangmanGame.letters && pressedKey !== gameWord[k]) { 
					//create div in #used-letters
					//add class
					//add text
					//append
					console.log(gameWord[k]);
					letterBox.addClass("letter-box");
					letterBox.text(hangmanGame.letter);
					$("#answer-reveal").append(letterBox);
				}
		//	};


		//};
//	};
	//for each win, wins++


uniCharCode(onkeydown)
	
	//loop until gameWord value == user var value, then reset
	//	for gameWord(k = 0; k < gameword.length; k++) {




	
//$(document).keypress(function(e) {
    //var s = String.fromCharCode(e.which);
  //  if (s.match(/[a-zA-Z\.]/))
      //  console.log(s + ' is a match!');
//});

//function inAnswers(x,y) {
	//for(i = 0; i < x.length; i++){
		//if(answers[i] === y){
		//return true;
		//}
	//}
	//return false
//}
	
//for (k in answers) {
	//console.log(answers[k])
//}




	


	
