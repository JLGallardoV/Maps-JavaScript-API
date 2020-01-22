//VARIABLE GLOBALES
var map; //representa el mapa
var arregloMarkers = []; //almacena los markers de esta practica
var marker;
var id = 0; //representa un id autoincrementable para cada marker
var inputOrigen = document.getElementById('idOrigen');//representa la ruta x
var inputDestino = document.getElementById('idDestino');//representa la ruta y



//INICIO - FUNCION PARA INICIALIZAR EL MAPA
function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  miUbicacion = {
    lat: 20.6786652,
    lng: -101.35449640000002
  } //objeto para especificar mi ubicacion
  //manipulacion del DOM para mostrar el mapa
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12, //nivel de zoom
    center: miUbicacion
  });

  //agregando marker cuando se inicia el mapa (invocando funcion)
  addMarker(miUbicacion, map);
  //autocompletando inputs (invocando funcion)
  autocompletarInputs();
  //en su momento permite que se muestre la ruta entre el punto a y el punto b
  directionsDisplay.setMap(map);

  //FUNCION PARA DETECTAR Y MANIPULAR LOS CAMBIOS HECHOS POR LA FUNCION INVOCADA EN LOS INPUTS
  var onChangeHandler = function() {
    console.log("hola");
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  }

  //invocamos la funcion onChangeHandler al momento de detectar un cambio en los inputs
  inputOrigen.addEventListener('change', onChangeHandler);
  inputDestino.addEventListener('change', onChangeHandler);

  //esta funcionalidad ejecuta una accion  una vez el usuario clickea el mapa
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map); //invocamos la funcion de agregar marker

    //una vez que el usuario clikea un marker elimina el ultimo marker geneado
    marker.addListener('click', function() {
      arregloMarkers[arregloMarkers.length-1].setMap(null); //ocultamos del mapa el ultimo marker generado
      arregloMarkers.pop(); //extraemos mediante un pop el ultimo elemento del arreglo
    })
  });
}//FIN - FUNCION PARA INICIALIZAR EL MAPA


//FUNCION PARA AGREGAR MARCADORES AL MAPA
function addMarker(location, map) {
  id++;
  marker = new google.maps.Marker({
    position: location, //posicion del marker
    map: map, //en el mapa en uso
    id: id,
    draggable: true,
  });
  arregloMarkers.push(marker); //agregamos los markers a un arreglo para poder manipularlos posteriormente
  console.log("longitud del arreglo contenedor de markers: ", arregloMarkers.length);
}


//FUNCION PARA AUTOCOMPLETAR LOS INPUTS
function autocompletarInputs(){
  //origen
  var autocompleteOrigen = new google.maps.places.Autocomplete(inputOrigen);
  autocompleteOrigen.bindTo('bounds', map); //restringe los resultados, los hace mas locales
  autocompleteOrigen.setFields(['address_components', 'geometry', 'icon', 'name']);//establece los campos que se van a ver en los detalles del lugar

  //destino
  var autocompleteDestino = new google.maps.places.Autocomplete(inputDestino);
  autocompleteDestino.bindTo('bounds', map);//restringe los resultados, los hace mas locales
  autocompleteDestino.setFields(['address_components', 'geometry', 'icon', 'name']);//establece los campos que se van a ver en los detalles del lugar
}


//FUNCION PARA TRAZAR UNA RUTA SEGUN UN PUNTO x Y UN PUNTO y
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  console.log("direccion: ",directionsService,"\n ruta: ",directionsDisplay);
   directionsService.route(
  {
    //recibimos las propiedades necesarias para que pueda trazar la ruta
     origin: inputOrigen.value,
     destination: inputDestino.value,
     travelMode: 'DRIVING'
   },
   (response, status) => {
     console.log("respuesta: ",response,"\n status: ",status);
     if (status === 'OK') {
       directionsDisplay.setDirections(response);
     } /*else {
       window.alert('Directions request failed due to ' + status);
     }*///CORREGIR ESTO, EL COMENTARIO ES TEMPORAL
   });
 }
