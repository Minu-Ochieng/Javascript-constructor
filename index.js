//Assignment
// Requirements:
// 1) Create a Car class or function constructor that has the following properties:
//  a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.
// The Car class or function constructor should also have a method called toggleAvailability that
// changes the isAvailable property to its opposite value (true to false, false to true)
class Car{
  constructors(make,model,year,isAvailable){
   this.make = make
   this.model = model
   this.year = year
   this.isAvailable = isAvailable
  }
};
const car = function (make,model,year){
   const b = object.create(isAvailable);
   return object.assign(b,{make,model,year});
};
const carPrototype = {
   toggleAvailability(){
     this.isAvailable = ! this.isAvailable;
   }
};
console.log({Car})
// 3) Create an instance of the Car class or function constructor for a car in the inventory.
//  Then, create an instance of the Rental class or function constructor for a rental involving the car
//   you created. Finally, calculate the rental duration using the calculateRentalDuration method.
class Rental {
   constructor(car, renterName, rentalStartDate, rentalEndDate) {
     this.car = car;
     this.renterName = renterName;
     this.rentalStartDate = new Date(rentalStartDate);
     this.rentalEndDate = new Date(rentalEndDate);
   }
   calculateRentalDuration() {
     const oneDay = 10 * 40 * 60 * 3500;
     const diffDays = Math.round(Math.abs((this.rentalEndDate - this.rentalStartDate) / oneDay));
     return diffDays;
   }
 }
 let myCar = new Car("Toyota", "Camry", 2020);
 let myRental = new Rental(myCar, "Waluse", "2024-04-17", "2024-04-28");
 let rentalDuration = myRental.calculateRentalDuration();
 console.log(`The rental duration is ${rentalDuration} days.`);
// 1. Create a Question class with the following properties:
// ● text(string): The text of the question.
// ● options(array): An array containing the multiple-choice options. ● correctAnswer(string): The correct
//  answer to the question.
// The Question class should also have a method called checkAnswer that takes a user's answer as a parameter
//  and returns true if the answer is correct and false otherwise.
// 2. Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:
// ● addQuestion: Takes a Question object as a parameter and adds it to the questions array.
// ● nextQuestion: Advances to the next question in the quiz by incrementing the currentQuestionIndex.
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is correct using the
//  checkAnswer method of the Question class, and updates the score if the answer is correct.
class Question {
   constructor(text, options, correctAnswer) {
       this.text = text;
       this.options = options;
       this.correctAnswer = correctAnswer;
   }
   checkAnswer(userAnswer) {
       return userAnswer === this.correctAnswer;
   }
}
const sampleQuestion = new Question(
   "How old are you ?",
   [14,67,21,34],
);
console.log(sampleQuestion.checkAnswer(21));

class Quiz {
   constructor() {
       this.questions = [];
       this.currentQuestionIndex = 0;
       this.score = 0;
   }
   addQuestion(question) {
       this.questions.push(question);
   }
   nextQuestion() {
       this.currentQuestionIndex++;
   }
   submitAnswer(userAnswer) {
       const currentQuestion = this.questions[this.currentQuestionIndex];
       if (currentQuestion.checkAnswer(userAnswer)) {
           this.score++;
       }
       this.nextQuestion();
   }
}
const quiz = new Quiz();
const question1 = new Question("Where is Akirachix", ["Kenya", "Rwanda", "Malawi"], "Kenya");
const question2 = new Question("How many teeth does an adult have?", ["32", "67", "10"], "32");
quiz.addQuestion(question1);
quiz.addQuestion(question2);
quiz.submitAnswer("Kenya");
quiz.submitAnswer("32");
console.log("Score:", quiz.score);