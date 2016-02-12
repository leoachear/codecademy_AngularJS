app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {

	$scope.post = suggestions.posts[$routeParams.id];

	$scope.addCommnet = function() {

		if (!$scope.suggest || $scope.suggest === "") {
			return;
		}

		$scope.post.comments.push({
			body: $scope.suggest,
			upvotes: 0,
		});

		$scope.suggest = '';
	};

	$scope.upVote = function(comment) {
		comment.upvotes += 1;
	};
	
}]);