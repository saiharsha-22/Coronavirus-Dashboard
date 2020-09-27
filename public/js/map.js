
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FpaGFyc2hhIiwiYSI6ImNrYWMyN2JsODFqaHkyeXFrOGtzZ2duZTUifQ.NPTlYadBblpKfSGdSMxdOw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10'
});
function updateMap() {
    console.log("Updating map with realtime data")
    fetch('data/data1.json')
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases>255){
                    color = "rgb(255, 0, 0)";
                }

                else{
                    color = `rgb(${cases}, 0, 0)`;
                }

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map); 
            });
        })
}

let interval = 20000;
setInterval( updateMap, interval);