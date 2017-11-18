// JavaScript Document

//.game-photo is class element when inserting new photos





function hangmanGame() {
	lives = 12;
	answers = [ "Freddy", "Jason", "Michael", "Leatherface", "Candyman", "Hannibal", "Norman", "Chucky", "Pennywise", "Cujo", "Pinhead" ];
	messages = {
            win: 'Winner, winner, chicken dinner!',
            lose: 'Death!',
            guessed: ' already guessed, please try again...',
            validLetter: 'Please enter a letter from A-Z'
		  };
	

	
	gameWord = answers[Math.floor(Math.random() * answers.length)];	

	
	for (i = 0; i <= gameWord.length; i++) {
		var letterBox = $("<div>");
		letterBox.addClass("letter-box");
		$("answer-revealed").append(letterBox);
	}
		//console.log(gameWord.length)


	
	$(document).keypress(function(e) {
    var userGuess = String.fromCharCode(e.which);
	for (k = 0; k <= gameWord.length; k++) {
			//console.log(userGuess)
		if (userGuess.match(gameWord[k])){
				var letterBtn = $("<button>");
				letterBtn.addClass("letters");
				letterBtn.attr("data-letter"), gameWord[k];
				letterBtn.text(gameWord[k]);
				$("answer-reveal").append(letterBtn);
			}
		else  if (userGuess !== gameWord[k]) {
				letterBtn2 = $("<button>");
				letterBtn2.addClass("letters");
				letterBtn2.attr("data-letter"), gameWord[k];
				letterBtn2.text(gameWord[k]);;
				$("used-letters").append(letterBtn2);

			}
	}

	});
	
	
	var wins = 0
	//for each win, wins++
	$("wins-display").html(wins);
	//console.log(wins);
 }
 
		
		
	//loop until word value == user var value
		//	for gameWord(k = 0; k < gameword.length; k++) {

	


$(document).keydown(hangmanGame)

	
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

//console.log(inAnswers(answers, "Michael"))
	
//for (k in answers) {
	//console.log(answers[k])
//}




		
		//if/else/if
		//correct answers
		//$("answers-reveal").append("")
		//incorrect answers
		//$("used-letters").append("")


	
