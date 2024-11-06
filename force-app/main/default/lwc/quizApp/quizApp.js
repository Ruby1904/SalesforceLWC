import { LightningElement, track } from "lwc";

export default class QuizApp extends LightningElement {
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
}
