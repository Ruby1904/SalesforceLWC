import { LightningElement, track } from "lwc";

export default class QuizApp extends LightningElement {
  selected = {}; //for storing answers
  correctAnswers = 0; //to show the no of correct answers
  isSubmitted = false; //to show the results
  @track myQuestions = [
    {
      id: "Question1",
      question: "Which one of the following is not a template?",
      answers: {
        a: "for:each",
        b: "iterator",
        c: "map loop"
      },
      correctAnswer: "c"
    },
    {
      id: "Question2",
      question:
        "Which of the following is invalid file in LWC component folder?",
      answers: {
        a: ".svg",
        b: ".apex",
        c: ".js"
      },
      correctAnswer: "b"
    },
    {
      id: "Question3",
      question: "Which of the following is not a directive?",
      answers: {
        a: "for:each",
        b: "lwc:if",
        c: "@track"
      },
      correctAnswer: "c"
    }
  ];

  //for diabling the button until all the answers are selected
  get notAllSelected() {
    return !(Object.keys(this.selected).length === this.myQuestions.length);
  }
  get isScoredFull() {
    return `slds-text-heading_large ${
      this.myQuestions.length === this.correctAnswers
        ? "slds-text-color_success"
        : "slds-text-color_error"
    }`;
  }
  checkAns(event) {
    console.log(event.target.name);
    console.log(event.target.value);
    const { name, value } = event.target;
    this.selected = { ...this.selected, [name]: value };
  }

  submitHandler(event) {
    event.preventDefault();
    let correct = this.myQuestions.filter(
      (item) => this.selected[item.id] === item.correctAnswer
    );
    this.correctAnswers = correct.length;
    this.isSubmitted = true;
    console.log(this.correctAnswers);
  }
  resetHandler() {
    this.isSubmitted = false;
    this.selected = {};
    this.correctAnswers = 0;
  }
}
