goog.require('ngeo.filters');
goog.require('ngeo.Popup');

gmf.workshopDirective = function() {
  return {
    templateUrl: `${gmf.baseTemplateUrl}/workshop.html`,
    controller: 'gmfWorkshopController as ctrl',
    scope: {
      'map': '<'
    },
    bindToController: true
  };
};

gmf.workshopController = function(ngeoCreatePopup, $scope) {
  this.coordinates = [
		[730556, 5863720],
		[829500, 5933600],
		[950000, 6002000]
  ];

  this.messages = [];

  $scope.$on('ngeo-layertree-state', (event, tree, parent) => {
    //console.log(event, tree, parent);
    this.messages.push(tree);
    tree.setState(true);
  });

  gmf.workshopController.prototype.recenter = function(coordinate) {
    console.log(coordinate);
    const view = this.map.getView();
    const popup = ngeoCreatePopup();

    view.setCenter(coordinate);
    view.setZoom(10);

    popup.setTitle('Recenter');
    popup.setContent(String(coordinate), true);
    popup.setOpen(true);
  };
};

gmf.module.directive('gmfWorkshop', gmf.workshopDirective);
gmf.module.controller('gmfWorkshopController', gmf.workshopController);

goog.provide('gmf.workshop');
