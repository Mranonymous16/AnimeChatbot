function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "bye") {
        return "Talk to you later!";}
      else if(input == "provide me access"){
        return "You don't have access bcz your Ankita!!.";}
        else if(input == "Mand"){
            return "You are Poonam !!";
    } else {
        return "Try asking something else!";
    }
}