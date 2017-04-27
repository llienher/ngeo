goog.require('ngeo.filters');
goog.require('ngeo.Popup');

ngeo.workshopDirective = function() {
	return {
		templateUrl: `${ngeo.baseTemplateUrl}/workshop.html`,
		controller: 'ngeoWorkshopController as ctrl',
		scope: {
			'map': '<'
		},
		bindToController: true
	};
};

ngeo.workshopController = function(ngeoCreatePopup) {
	this.coordinates = [
		[730556, 5863720],
		[829500, 5933600],
		[950000, 6002000]
	];

	ngeo.workshopController.prototype.recenter = function(coordinate) {
		const view = this.map.getView();
		const popup = ngeoCreatePopup();
		view.setCenter(coordinate);
		view.setZoom(10);
		popup.setTitle('Recenter');
		popup.setContent(String(coordinate), true);
		popup.setOpen(true);
	};
};

ngeo.module.directive('ngeoWorkshop', ngeo.workshopDirective);
ngeo.module.controller('ngeoWorkshopController', ngeo.workshopController);

goog.provide('ngeo.workshop');
