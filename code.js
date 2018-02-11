//
// this is just a stub for a function you need to implement
//
function getStats(txt) {

    //find all the characters in the text
    function findChars(txt){
      let array = txt.split("");
      let sizeArray = array.length;
      return sizeArray;
    }
    
    //find all the words in the text
    function findWords(txt){
		//let str = txt.replace( /\n/g, " ");
		let array = txt.split(/\W+/);
		let sizeArray = array.length;
		
		//initalize counter 
		let counter = 0;
		
		
		//this is for debugging purposes
		for(let i = 0; i < sizeArray; i++){
			if(array[i] == ""){
			}
			else{
				counter ++;
				//console.log(array[i]);
			}
		
		}
		
		return counter;
	}
	
	//find the number of lines 
	function findLines(txt){
		let counter = 0;
		let array = txt.split("\n");
		counter = array.length;
		
		if(array.length == 1){
			if(array[0] == ""){
				counter = 0;
			}
		}
		
		return counter;
	}
	
	//find the non-empty lines
	function findNonEmpty(txt){
		let counter = 0;
		
		let array = txt.split("\n");
		
		
		for(let i = 0; i < array.length; i++){
			if (array[i] == ""){
				//do nothing, since we know its empty
			
			}
			else if(array[i] === "           	       "){
				//do nothing as we know its just a line with spaces 

			}
			else{
				//console.log(array[i]);
				//if the "if" statement did not execute update the counter 
				counter ++;
			}
		}
		
		
		return counter;
	}
	
	//find the max line length
	function findMLL(txt){
		//split by lines
		let array = txt.split("\n");
		let counter = 0; 
		
		for(let i = 0; i < array.length; i++){
			if(array[i].length > counter){
				counter = array[i].length;
			} 
		}
		
		return counter;
	}
	
	//find the average word length
	function findAvgWL(txt){
		let sum = 0;
		let counter = 0;
		
		//get rid of all puncuation and spaces 
		//let string = txt.replace(/[^A-Za-z0-9_]/g,"");
		
		let array = txt.split(/\W+/);
		
		for(let i = 0; i< array.length; i++){
			//if tis a new line ignore it 
			if(array[i] == ""){
			}
			else{
				counter ++;
				sum = sum + array[i].length;
				//console.log(array[i]);
			}
		}
		
		//now divide by the array length
		let total = sum/counter;
		//console.log(sum);
		//console.log(counter);
		//console.log(total);
		
		return total;
		
	}
	
	//find palidromes 
	function findPali(txt){
		let pali = [];
		let array = txt.split(/\W+/);
		
		for(let i = 0; i < array.length; i++){
			//check if the word is >2
			if(array[i].length > 2){
				let word = array[i];
				let lowerWord = word.toLowerCase();
				let reverse = lowerWord.split("").reverse().join("");
				//console.log(word);
				//check if the word is the same forward if it is reversed
				if( lowerWord == reverse){
					//add to our palidrome array 
					pali.push(lowerWord);
					
				}
			}
		}
		return pali;
	}
	
	//find the 10 most longest words
	function findLongWords(txt){
		let longWords = [];
		let array = txt.toLowerCase().split(/\W+/);
		
		//find longest word, store into "longWords" and erase from our "array".
		//repeat for 10 times
		for(let i = 0; i < 10; i++){
			let position = 0;
			let wordLength = 0;
			
			for(let j = 0; j < array.length; j++){
				if(array[j].length > wordLength){
					position = j;
					wordLength = array[j].length;
				}
			}
			
			//check for null
			if(array[position] != null){
				//store longest word then delete it 
				longWords.push(array[position]);
				array = array.filter(function(s){
					return s !== array[position];
				});	
			}
		}
		return longWords;
	}
	
	//find the most frequent words
	function mostFeqWords(txt){
		let array = txt.toLowerCase().split(/\W+/);
		let freqWords = [];
		let freqWordsAmount = [];
		let counter = 0;
		
		//pick an element
		for(let i = 0; i< array.length; i++){
			counter = 0;
			//store word 
			let word = array[i];
			freqWords.push(word);
			
			//check with other elements to see if "word" appears anywhere else 
			for(let j = 0; j < array.length; j++){
				//if the element appears again update our counter
				if(array[i] == array[j]){
					counter ++;
				}
			
			}
			//store how many times it has been recorded it appears
			freqWordsAmount.push(counter); 
			
			//erase this word from our array 
			array = array.filter(function(s){
					return s !== array[i];
				});	
		
		}

		//console.log(freqWords.length);
		
		
		let ten = 10
		let returnArray = [];
		let highest = -1;
		let pointer = "";
		let pos = 0;
		//pick 10 numbers  
		for(let s = 0; s < 10; s++){
			//select the highest 
			for(let x = 0; x < freqWordsAmount.length; x++){
				//check if it is higher then current
				//console.log(freqWords.length + freqWordsAmount.length);
				//console.log();
				if(freqWordsAmount[x] > highest){
					highest = freqWordsAmount[x];
					pointer = freqWords[x];
					pos = x;
					
				}
			
			}
			//store the highest 
			if(highest != -1){
				returnArray.push(pointer + "(" + highest + ")");
			}
			freqWordsAmount[pos]= -1;
			
			/*
			//remove the highest from the list 
			freqWords = freqWords.filter(function(s){
					return s !== freqWords[pos];
			});*/
			
			//reset the pointer and highest
			pointer = "";
			highest = -1;
			pos = 0;
			
			
		} 
		
		return returnArray;
	}
	
	

    let nChars = findChars(txt);
    let nWords = findWords(txt);
    let nLines = findLines(txt);
    let nNonEmptyLines = findNonEmpty(txt);
    let maxLineLength = findMLL(txt);
    let averageWordLength = findAvgWL(txt); 
    let palindromes = findPali(txt);
    let longestWords = findLongWords(txt);
    let mostFrequentWords = mostFeqWords(txt);
    
    return {
        nChars,
        nWords,
        nLines,
        nNonEmptyLines,
        averageWordLength,
        maxLineLength,
        palindromes,
        longestWords,
        mostFrequentWords
    };

}
