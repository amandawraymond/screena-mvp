angular.module('myApp')
.controller('QuestionaireCtrl', ['$scope', "$http",  function ($scope, $http) {

  $scope.questions = [];

  $http.get('/questions.json').success(function(data){
    $scope.currentQuestion = data[0];
    return $scope.questions = data;
  });
  
  $scope.currentQuestion = {
    question_number: -1
  };

  
  $scope.numQuestions = function() {
    return $scope.questions.length;
  };
  
  $scope.answers = [];
  $scope.weights = [];
  
  $scope.goToNextQuestion = function (answer,weight) {
    if ($scope.currentQuestion.question_number < $scope.numQuestions()) {
      $scope.answers.push(answer);
      $scope.weights.push(weight);
      $scope.currentQuestion = $scope.questions[$scope.currentQuestion.question_number];
    }
  };
  
  $scope.isDone = function() {
    return $scope.currentQuestion.question_number === $scope.numQuestions();
  };
  
  $scope.isStepDone = function(stepNumber) {
    return stepNumber < $scope.currentQuestion.question_number;
  };

  var makeNumbers = function(numbers) {
    return _.map(numbers.split(','), function(number) {
      return { name: number , selected: false };      
    });
  };
  
  $scope.ProgressBar = function(guess) {
    guess.chosen = true;
    var found = false;
    _.each($scope.secretWord, function(letter) {
      if(guess.name.toUpperCase() === letter.name.toUpperCase()) {
        letter.chosen = true;
        found = true;
      };
    }); 
  };

  $scope.numbers = makeNumbers("1,2,3,4,5,6,7,8,9");

}]);
