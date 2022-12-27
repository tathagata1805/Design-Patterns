// OPEN-CLOSE PRINCIPLE STATES THAT A FUNCTION OR MODULE IS CLOSED TO MODIFICATION AND OPEN TO EXTENSION

class BooleanQuestions {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("1. True");
    console.log("2. False");
  }
}

class MultipleChoiceQuestions {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestions {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("Answer: _____________");
  }
}

class RangeQuestions {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("Maximum: ______");
    console.log("Minimum: ______");
  }
}

// THIS FUNCTION IS CLOSED, WE DON'T HAVE TO TOUCH IT TO EXTEND IT
// WE ONLY ADD A QUESTION CLASS AND ADD ITS RESPECTIVE ANSWERS IN THE PRINT ANSWER FUNCTION
function printQuiz() {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log("");
  });
}

const questions = [
  new BooleanQuestions("This code is awesome!"),
  new MultipleChoiceQuestions("What is your favourite language?", [
    "Java",
    "HTML",
    "Javascript",
    "Python",
  ]),
  new TextQuestions("Describe your favourite JS feature."),
  new RangeQuestions("What is the speed limit in your city?"),
];

printQuiz(questions);
