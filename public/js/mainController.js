angular.module('app')
  .controller('mainController', function($scope, API, mainService) {

    $scope.getCity = function (zip) {
      console.log($scope);
      mainService.GetZip(zip)
      .then(function (response) {
        if (response.data.results[0].address_components[1].long_name == 'Commerce City') {
          $scope.invalid = 'Unknown City';
        } else {
        console.log(response.data.results[0].address_components[1].long_name);
        $scope.cityLookUp = response.data.results[0].address_components[1].long_name;
      }
      })
    };

    $scope.payment = {
      name: 'Austin Smythe',
      number: 4242424242424242,
      exp_month: 12,
      exp_year: 2017,
      cvc: 123
    };

    $scope.createCard = function (payment) {
      API.createCard(payment)
      .then(function (response) {
        $scope.activeToken = response.id;
        $scope.activeCard = response.card;
      })
      .catch(function (e) {
        console.error(e);
      })
    };

    $scope.chargeCard = function () {
      API.chargeCard($scope.activeToken, 2500000)
      .then(function (response) {
        console.info('STRIPE RESPONSE: ', response);
        $scope.orderSuccess = true;
        alertify.success('Order successfully placed!');
      })
      .catch(function (e) {
        alertify.error(e.data.message);
      })
    };

  });
