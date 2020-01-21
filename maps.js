//FUNCION PARA INICIALIZAR EL MAPA
function initMap(){
  //manipulacion del DOM para mostrar el mapa
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 20.6786652, lng: -101.35449640000002} //COORDENADAS DE IRAPUATO
  });


}
