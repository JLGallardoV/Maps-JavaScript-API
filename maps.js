//VARIABLE GLOBALES
var map; //representa el mapa
var arregloMarkers = []; //almacena los markers de esta practica
var marker;
var id = 0; //representa un id autoincrementable para cada marker

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

  //esta funcionalidad ejecuta una accion  una vez el usuario clickea el mapa
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map); //invocamos la funcion de agregar marker

    //una vez que el usuario clikea un marker elimina el ultimo marker geneado
    marker.addListener('click', function() {
      arregloMarkers[arregloMarkers.length-1].setMap(null); //ocultamos del mapa el ultimo marker generado
      arregloMarkers.pop(); //extraemos mediante un pop el ultimo elemento del arreglo
    })

  });
}


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
