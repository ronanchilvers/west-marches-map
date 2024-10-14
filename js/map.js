let map = null;
document.addEventListener("DOMContentLoaded",function(){
    map = L.map('map', {crs: L.CRS.Simple});
    L.tileLayer('tiles/{z}/{x}-{y}.jpg', {
      continuousWorld: false,
      noWrap: true,
      minZoom: 4,
      maxZoom: 6,
    }).addTo(map);

    // Add the scale bar
    let fnDisplayUnit = (value, factor) => ({
      unit: " miles",
      amount: value,
    });
    let fnUnitConversionFactor = (meters) => (
     ((meters * 0.00062137 >= 25) ? 0.00062137 : 3.28084)/8
    )
    L.control.graphicScale({
      fill: "double",
      doubleLine: true,
      showSubunits: true,
      unitPlacement: "label",
      position: "bottomright",
      getDisplayUnit: fnDisplayUnit,
      getUnitConversionFactor: fnUnitConversionFactor,
    }).addTo(map);
    L.control.resetView({
      position: "topleft",
      title: "Reset View",
      latlng: L.latLng([-50,46]),
      zoom: 4,
    }).addTo(map);

    //Coordinate Finder
    let marker = L.marker([-50, 50], {
      draggable: true,
    }).addTo(map);
    marker.bindPopup('LatLng Marker').openPopup();
    marker.on('dragend', function(e) {
      marker.getPopup().setContent(marker.getLatLng().toString()).openOn(map);
    });

    // Create marker groups
    let groups = {};
    for (const key in markerLayers) {
      groups[key] = [];
    }

    // Place markers
    // let markers = new Map();
    for (const key in markerData) {
        let deets = markerData[key];
        let opts = {};
        // console.log(key, deets);
        if (deets["icon"]) {
          opts["icon"] = icons[deets["icon"]]
        } else if (deets["type"]) {
          opts["icon"] = icons[deets["type"]]
        }
        // console.log(opts);
        if (deets["type"] == null) {
          L.marker(deets["pos"], opts)
            .bindPopup(deets["label"])
            .addTo(map);
        } else {
          groups[deets["type"]].push(
            L.marker(deets["pos"], opts)
              .bindPopup(deets["label"])
          );
        }
    }

    // Create the layer groups
    let layers = L.control.layers();
    for (const key in groups) {
      let markerLayerData = markerLayers[key];
      let layerGroup = L.layerGroup(groups[key]);
      layers.addOverlay(
        layerGroup,
        markerLayerData["name"]
      );
      if (markerLayerData["visible"]) {
        layerGroup.addTo(map);
      }
    }
    layers.addTo(map);

    map.setView([-50,46], 4);
    var mapSW = [-112,0], mapNE = [0,103];
    map.setMaxBounds(new L.LatLngBounds(mapSW, mapNE));
});