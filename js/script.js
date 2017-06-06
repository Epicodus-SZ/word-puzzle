//*************************
//BUSINESS LOGIC
//*************************

vowels = ["a","e","i","o","u","A","E","I","O","U"];

//A function to compare characters
function isVowel(char){
  var results = false; //assume false by default
  for (var vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    if (char === vowels[vowelIndex]) {
      results = true;
      break;
    }
  }
  return results;
}

//*************************
//UI LOGIC
//*************************

$(document).ready(function() {

  //create a click event handlers for the submit button
  $("#formPuzzle").submit(function(event){
    event.preventDefault(); // prevent the form from reloading page.
    var sentence = $("#inputSentence").val(); //get the value in the textarea
    var puzzle = "";
    for (var index = 0; index < sentence.length; index += 1) {
      //create a loop the length of the sentence
      if (isVowel(sentence.charAt(index))) puzzle+="-";
      else puzzle+=sentence.charAt(index);
    }
    $("#inputSentence").val(puzzle);
  });
});
