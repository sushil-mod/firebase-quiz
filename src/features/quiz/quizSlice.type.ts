export type QuestionAndAnswerType = {
    question : string ;
    options : Array<string> ;
    answer : string ;
    points : number ;
    image : string ;
}

export type QuizType = {
    categoryName : string ;
    activeQuestion : number ;
    quizQuestions : Array<QuestionAndAnswerType>|[] ;
    score : number ;
    selectedAnswer : Array<string> ;
}