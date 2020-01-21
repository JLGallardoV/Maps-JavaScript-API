//FUNCION PARA INICIALIZAR EL MAPA
function initMap(){
  miUbicacion = {lat: 20.6786652, lng: -101.35449640000002} //objeto para especificar mi ubicacion
  //manipulacion del DOM para mostrar el mapa
  var map = new google.maps.Map(document.getElementById('map'), {
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
addMarker(miUbicacion,map);

//esta funcionalidad agrega un marker una vez el usuario clickea el mapa
   google.maps.event.addListener(map, 'click', function(event) {
          addMarker(event.latLng, map);//agrega el marker en el mapa mendiante un callback
        });


}
