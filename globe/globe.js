// Create the scale
var anomaly = [];
let weightColor;

d3.csv("https://raw.githubusercontent.com/thirtydegreesrising/30degreesrising/main/globe/anomaly_data/data_range.csv", function (text) { 
    anomaly.push(text.tas)
}).then(function (data) {
    anomaly = anomaly.map(Number); // Need to convert array entries from strings to floats or extent won't be correct
    var extent = d3.extent(anomaly);
    weightColor = d3.scaleDiverging(t => d3.interpolateRdBu(1 - t))
    .domain([extent[0], 0, extent[1]]);

});


// Create the first globe
fetch('https://raw.githubusercontent.com/thirtydegreesrising/30degreesrising/main/globe/anomaly_data/anomaly_1979.csv') // Fetch the csv data
.then(res => res.text()) // Transform into text
.then(csv => d3.csvParse(csv, ({ latitude, longitude, tas }) => ({ lat: +latitude, lng: +longitude, tas: +tas }))) // Parse the file
.then(data => // Create the globe and map locations using parsed data
{

    // Initial view for the globe 
    const MAP_CENTRE1 = { lat: 10, lng: 20, altitude: 1.75 };

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

// Create the second globe
fetch('https://raw.githubusercontent.com/thirtydegreesrising/30degreesrising/main/globe/anomaly_data/anomaly_1999.csv') // Fetch the csv data
.then(res => res.text()) // Transform into text
.then(csv => d3.csvParse(csv, ({ latitude, longitude, tas }) => ({ lat: +latitude, lng: +longitude, tas: +tas }))) // Parse the file
.then(data => // Create the globe and map locations using parsed data
{
    // Initial view for the globe 
    const MAP_CENTRE2 = { lat: 10, lng: 20, altitude: 1.75 };

    const world = Globe()
    (document.getElementById('globeViz2'))
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
    //.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
    .backgroundColor("rgba(0,0,0,0)") // Set to transparent to cancel loading of default background #000011
    .pointOfView(MAP_CENTRE2, 0)
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

// Create the third globe 
fetch('https://raw.githubusercontent.com/thirtydegreesrising/30degreesrising/main/globe/anomaly_data/anomaly_2019.csv') // Fetch the csv data
.then(res => res.text()) // Transform into text
.then(csv => d3.csvParse(csv, ({ latitude, longitude, tas }) => ({ lat: +latitude, lng: +longitude, tas: +tas }))) // Parse the file
.then(data => // Create the globe and map locations using parsed data
{
    // Initial and zoomed-in views for the globe
    //Zoomed in view centres on lat and lng for the North Pole
    const MAP_CENTRE_INITIAL = { lat: 10, lng: 20, altitude: 1.75 }; 
    const MAP_CENTRE_ZOOM = { lat: 90.0, lng: 0.0, altitude: 1.50 };

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
    .pointOfView(MAP_CENTRE_ZOOM, 3000), 8000);
})