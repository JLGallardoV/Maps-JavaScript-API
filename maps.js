//VARIABLE GLOBALES
var map; //representa el mapa
var arregloMarkers = []; //almacena los markers de esta practica


//FUNCION PARA INICIALIZAR EL MAPA
function initMap() {
  miUbicacion = {
    lat: 20.6786652,
    lng: -101.35449640000002
  } //objeto para especificar mi ubicacion
  //manipulacion del DOM para mostrar el mapa
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12, //nivel de zoom
    center: miUbicacion
  });

  /*agregando marker cuando se inicia el mapa (si no tuvieramos un metodo)
    var marker = new google.maps.Marker({
       position: miUbicacion, //objeto con mis coordenadas
       map: map, //el mapa en uso
       title: 'Aqui estoy' //msj marker
     });
  */
  //agregando marker cuando se inicia el mapa (invocando funcion)
  addMarker(miUbicacion, map);

  //esta funcionalidad agrega un marker una vez el usuario clickea el mapa
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map); //agrega el marker en el mapa mendiante un callback
  });

}


//FUNCION PARA AGREGAR MARCADORES AL MAPA
function addMarker(location, map) {
  var marker = new google.maps.Marker({
    position: location, //posicion del marker
    map: map //en el mapa en uso
  });
  arregloMarkers.push(marker); //agregamos los markers a un arreglo para poder manipularlos posteriormente
  console.log("longitud del arreglo contenedor de markers: ", arregloMarkers.length);
}
