function initMap() {
  var location = {lat: 44.970643, lng: 19.636793};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: location
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
