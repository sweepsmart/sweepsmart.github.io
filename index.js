
document.addEventListener("DOMContentLoaded", function(e) {

    var mymap = L.map('mapid').setView([37.804, -122.2712], 12);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYXBhOTE1NDM2IiwiYSI6ImNrOWhwNGxzZDEwcnczcGxscGtycGxhbzYifQ.09fx_d59zD6vCa0zpEoeFA'
    }).addTo(mymap);
});
