app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic,tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'Milanesa Napolitana',
      description: 'Cacho de carne con pan rallado, queso y tomate.',
      price: 8.95
    },
    {
      name: 'Pizza con Jamon y morrones',
      description: 'El nombre lo dice todo.',
      price: 6.99
    },
    {
      name: 'Pollo al disco.',
      description: 'Un pollo, un disco y varias cosas mas.',
      price: 10.80
    }
  ];
  
  $scope.extras = [
    {
      name: "Papas fritas",
      description: 'No necesita descripcion',
      price: 5.50
    },
    {
      name: "Papas a la crema",
      description: 'O sea....papas y crema.',
      price: 7.50
    },
    {
      name: "Batatas fritas",
      description: 'No necesita descripcion',
      price: 6.50
    }
    ];

}]);