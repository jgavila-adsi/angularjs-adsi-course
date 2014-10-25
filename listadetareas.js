function ControladorTareas ($scope) {
   $scope.tareas = [{texto: 'Ser Super Heroico con AngularJS', hecho: true},
    {texto: 'Crear una app con angulajs', hecho: true}]

    $scope.agregarTarea = function () {
    	$scope.tareas.push({texto: $scope.textoNuevaTarea, hecho: true});
    	$scope.textoNuevaTarea = '';
    };
}