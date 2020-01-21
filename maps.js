//FUNCION PARA INICIALIZAR EL MAPA
function initMap(){
  miUbicacion = {lat: 20.6786652, lng: -101.35449640000002} //objeto para especificar mi ubicacion
  //manipulacion del DOM para mostrar el mapa
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12, //nivel de zoom
    center: miUbicacion
  });

  var marker = new google.maps.Marker({
     position: miUbicacion, //objeto con mis coordenadas
     map: map, //el mapa en uso
     title: 'Aqui estoy' //msj marker
   });

}
