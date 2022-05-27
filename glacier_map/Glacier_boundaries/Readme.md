# Processing of glacier boundary shapefiles from RGI version 6

## Data source: https://nsidc.org/data/nsidc-0770 nsidc0770_00.rgi60.complete.zip

## Software to process: QGIS

## Process:

### Right click on the shapefile layer of the glacier outlines - Export - Save Features As - Extent: {West:-180; East:180; South:60; North:90}

### Right click on the shapefile layer of the spatial domain - Export - Save Features As - Extent: {West:-180; East:180; South:60; North:90}

### Execute Simplify in toolset on extracted glacier outlines. Distance: 1 km.

