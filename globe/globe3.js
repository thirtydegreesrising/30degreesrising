import {weightColor} from './scale.js';

// Create the third globe 
fetch('https://raw.githubusercontent.com/thirtydegreesrising/30degreesrising/main/globe/anomaly_data/anomaly_2019.csv') // Fetch the csv data
.then(res => res.text()) // Transform into text
.then(csv => d3.csvParse(csv, ({ latitude, longitude, tas }) => ({ lat: +latitude, lng: +longitude, tas: +tas }))) // Parse the file
.then(data => // Create the globe and map locations using parsed data
{
    // Initial and zoomed-in views for the globe
    //Zoomed in view centres on lat and lng for the North Pole
    const MAP_CENTRE_INITIAL = { lat: 10, lng: 20, altitude: 2.7 }; 
    const MAP_CENTRE_PAN = { lat: 90.0, lng: 0.0, altitude: 2.7 };

    const world = Globe()
    (document.getElementById('globeViz3'))
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
    //.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
    .backgroundColor("rgba(0,0,0,0)") // Set to transparent to cancel loading of default background #000011
    .pointOfView(MAP_CENTRE_INITIAL, 0)
    .hexBinPointsData(data)
    .hexAltitude(0.01)
    .hexBinResolution(3.0)
    .hexMargin(0.2)
    .hexTopColor(data => weightColor(data.points[0].tas))
    .hexSideColor(data => weightColor(data.points[0].tas))
    .hexBinMerge(true)
    .enablePointerInteraction(false); // Apparently, this improves performance 

    world.controls().enableZoom = false;
    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 1.0;
    

    // Transition to North Pole view 
    setTimeout(() => world
    .pointOfView(MAP_CENTRE_PAN, 3000), 8000);
})