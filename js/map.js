function mymap() {
    var mapcanvas = document.getElementById("map")
    var mapoptions = {
        center: new google.maps.LatLng(26.7922, 82.1998),
        zoom: 10
    }
    var map = new google.maps.Map(mapcanvas, mapoptions)
}