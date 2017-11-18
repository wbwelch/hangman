// JavaScript Document

//.game-photo is class element when inserting new photos





function hangmanGame() {
	letters = [ "abcdefghijklmnopqrstuvwxyz" ];
	lives = 12;
	answers = [ "Freddy", "Jason", "Michael", "Leatherface", "Candyman", "Hannibal", "Norman", "Chucky", "Pennywise", "Cujo", "Pinhead" ];
	messages = {
            win: 'Winner, winner, chicken dinner!',
            lose: 'Death!',
            guessed: ' already guessed, please try again...',
            validLetter: 'Please enter a letter from A-Z'
		  };

	
	lettersGuessed = lettersMatched = '';
        numLettersMatched = 0;
	
	gameWord = answers[Math.floor(Math.random() * answers.length)];	
	//console.log(gameWord);
	
 	answerReveal = document.getElementById("answer-revealed");
	guessRemain = document.getElementById("guess-remain");
	usedLetters = document.getElementById("used-letters");


	man.innerHTML = 'You have ' + lives + ' lives remaining';
        output.innerHTML = ''
	
}


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


	
