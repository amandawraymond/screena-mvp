angular.module('myApp')
.controller('QuestionaireCtrl', ["$http", "$scope", function($http, $scope){
  
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
  
  $scope.option = {
    selected: ""
  };

  var defaultForm = angular.copy($scope.option);

  $scope.resetForm = function () {
    $scope.option = angular.copy(defaultForm);
    $scope.questionaire.$setPristine();
  };
  
  $scope.goToNextQuestion = function() {
    $scope.selectedCounter = 0;

    if ($scope.currentQuestion.question_number < $scope.numQuestions()) {
      $scope.currentQuestion = $scope.questions[$scope.currentQuestion.question_number];
      $scope.resetForm();
    }
    console.log($scope.answers);
    console.log($scope.weights);
  };

  $scope.answers = [];
  $scope.weights = [];

  $scope.saveScore = function(answer, weight) {
    $scope.answers.push(answer);
    $scope.weights.push(weight);
  };


  $scope.addCheckedAnswers = function (answer, weight) {
    if (option.selected) {
      $scope.answers.push(answer);
      $scope.weights.push(weight);
    }
  };

  
  $scope.change = function(option) {
    $scope.selectedCounter = 0;
    if (option.selected) {
      $scope.selectedCounter++;
    } else {
      $scope.selectedCounter--;
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
  

}]);
