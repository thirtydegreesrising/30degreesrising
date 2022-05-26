import {weightColor} from './scale.js';

// Create the first globe
fetch('https://raw.githubusercontent.com/thirtydegreesrising/30degreesrising/main/globe/anomaly_data/anomaly_1979.csv') // Fetch the csv data
.then(res => res.text()) // Transform into text
.then(csv => d3.csvParse(csv, ({ latitude, longitude, tas }) => ({ lat: +latitude, lng: +longitude, tas: +tas }))) // Parse the file
.then(data => // Create the globe and map locations using parsed data
{

    // Initial view for the globe 
    const MAP_CENTRE1 = { lat: 10, lng: 20, altitude: 2.7 };

    const world = Globe()
    (document.getElementById('globeViz'))
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
    //.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
    .backgroundColor("rgba(0,0,0,0)") // Set to transparent to cancel loading of default background #000011
    .pointOfView(MAP_CENTRE1, 0)
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
    
})

