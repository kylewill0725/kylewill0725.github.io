window.state = {
    imgLayer: null,
    bounds: null,
    currentPin: null,
    currentArea: null,
    pins: [],
    areas: []
};

var loadMapImg = function (img, bounds) {
    if (bounds == undefined) {
        bounds = [[0, 0], [img.height, img.width]];
    }

    window.state.bounds = bounds;
    window.mapItem.setMaxBounds( [
        [bounds[1][0] * -1, bounds[1][1] * -1],
        [bounds[1][0] * 1.9, bounds[1][1] * 1.9]
    ]);
    if (window.state.imgLayer) {
        window.mapItem.removeLayer(window.state.imgLayer);
    }
    window.state.imgLayer = L.imageOverlay(img, bounds);
    window.state.imgLayer.addTo(window.mapItem);
    window.mapItem.fitBounds(bounds);
};

var updatePins = () => {
    var pinList = $("#pinList");
    pinList.empty();
    window.state.pins.forEach((a, i) => {
        pinList.append(`
        <div class="input-group p-0 m-2">
            <label class="input-group-text input-group-append" style="background: lightblue;" onclick="removeArea(this)">
                ${i+1}
            </label>
            <label class="btn btn-light input-group-text form-control" onclick="selectPin(this)">
                ${a.name}
            </label>
        </div>`);
    });
};

var updateAreas = () => {
    var areaList = $("#areaList");
    areaList.empty();
    window.state.areas.forEach((a, i) => {
        areaList.append(`
        <div class="input-group p-0 m-2">
            <label class="input-group-text input-group-append" style="background: gold;" onclick="removeArea(this)">
                ${i+1}
            </label>
            <label class="btn btn-light input-group-text form-control" onclick="selectArea(this)">
                ${a.name}
            </label>
        </div>`);
    });
};

var removeArea = (e) => {
    var name = e.feature.properties.name;
    var i = window.state.areas.map(a => a.name).indexOf(name);
    if (i > -1) {
        window.state.areas.splice(i, 1);
        updateAreas();
    }
};

var updateArea = (oldName, e) => {
    var i = window.state.areas.map(a => a.name).indexOf(oldName);
    if (i > -1) {
        window.state.areas[i].name = e.feature.properties.name;
        window.state.areas[i].polygon = e;
        updateAreas();
    }
};

var createArea = (e) => {
    var name = e.feature.properties.name;
    if (name && window.state.areas.map(a => a.name).indexOf(name.trim()) == -1) {
        window.state.currentArea = { name: name.trim(), polygon: e };
        window.state.areas.push(window.state.currentArea);
        updateAreas();
    }
};

var removePin = (e) => {
    var name = e.feature.properties.name;
    var i = window.state.pins.map(a => a.name).indexOf(name);
    if (i > -1) {
        window.state.pins.splice(i, 1);
        updatePins();
    }
};

var updatePin = (oldName, e) => {
    var i = window.state.pins.map(a => a.name).indexOf(oldName);
    if (i > -1) {
        window.state.pins[i].name = e.feature.properties.name;
        window.state.pins[i].marker = e;
        updatePins();
    }
};

var createPin = (e) => {
    var name = e.feature.properties.name;
    if (name && window.state.pins.map(a => a.name).indexOf(name.trim()) == -1) {
        window.state.currentPin = { name: name.trim(), marker: e };
        window.state.pins.push(window.state.currentPin);
        updatePins();
    }
};

var copyGeoJson = (e) => {
    var data = window.state.pins.map(p => p.marker);
    data = data.concat(window.state.areas.map(a => a.polygon));
    e.attributes["data-clipboard-text"].value = "["+data.map(p => JSON.stringify(p.toGeoJSON())).join(',')+"]";
};