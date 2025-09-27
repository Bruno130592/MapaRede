const map = L.map('map').setView([-22.0, -47.9], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

fetch("meusdados.kml")
  .then(res => res.text())
  .then(kmltext => {
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmltext, "text/xml");
    const track = new L.KML(kml);
    map.addLayer(track);
    map.fitBounds(track.getBounds());
  });
