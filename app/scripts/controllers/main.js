'use strict';

/**
 * @ngdoc function
 * @name o365IconsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the o365IconsApp
 */

angular.module('o365IconsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.icons = [];
	
	//When document is loaded
	$(function() {
    	//var svgns = 'http://www.w3.org/2000/svg';
		var svgUrl = '//cdn.sharepointonline.com/15772/_layouts/15/fonts/Office365Icons.svg#web';

		$('#svg').load(svgUrl, function (svgUrl) {
			// Insert content of the SVG file in our invisible DOM node
			$('#svg').append(svgUrl);

			// Find all glyph nodes in the SVG file
			var svg = $('svg').find('glyph');
			var unicodePrefix = '\\'; // Add unicode escaping for CSS, JS escaped
			
			var _icons = [];
			var i = 0;

			for (i=0; i < svg.length; i++) {
				var unicode = svg[i].getAttribute('unicode').toString();

				_icons.push(unicode);
			}

			for (i=0; i < _icons.length; i++) {
				var iconChar = _icons[i].charCodeAt();

				iconChar = iconChar.toString(16); // Convert to string format
				$scope.icons.push({
					html: _icons[i],
					code: unicodePrefix + iconChar
				});
			}
			$scope.$digest();
		});
	});
  });