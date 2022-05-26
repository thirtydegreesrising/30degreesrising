// Create the scale
var anomaly = [];
let weightColor;

    weightColor = d3.scaleDiverging(t => d3.interpolateRdBu(1 - t))
    .domain([-2.0 , 0, 4.0]);
    //console.log(weightColor(extent[0]));
    //console.log(weightColor(extent[1]));
    //console.log(weightColor(0));

export {weightColor};