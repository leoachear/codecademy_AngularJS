app.factory('suggestions', [function() {
	var demoSuggestions = {
		posts: [
			{
				title: 'Free pizza at club meetings',
				upvotes: 15,
				comments: [
							{
								body:"hola",
								upvotes: 2,
							},
						],
			},
			{
				title: 'End all club emails with Laffy Taffy jokes',
				upvotes: 9,
				comments: [
							{
								body:"Gordo Pelusa",
								upvotes: 22,
							}
						],
			},
			{
				title: 'Retrofit water fountain with Gatorade',
				upvotes: 7,
				comments: [],
			},
			{
				title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
				upvotes: 3,
				comments: [],
			},
			{
				title: 'Maxi',
				upvotes: 33,
				comments: [],
			},
		]
	};
	return demoSuggestions;
}]);