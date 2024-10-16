let icons = {};
document.addEventListener("DOMContentLoaded",function(){
    const iconData = {
        star: {
            file: "cityCapital.png",
        },
        kaers: {
            file: "mageTower.png",
        },
        cities: {
            file: "city.png",
        },
        ports: {
            file: "cityPort.png",
        },
        towns: {
            file: "town.png",
        },
        villages: {
            file: "townHalflings.png",
        },
        other: {
            file: "tradeCamp.png",
        },
    }

    // Build custom icon objects
    for (const key in iconData) {
        let deets = iconData[key]
        let iconSize = [25,41];
        if (deets["iconSize"]) {
            iconSize = deets["iconSize"];
        }
        icons[key] = L.icon({
            iconUrl: "icons/" + iconData[key]["file"],
            iconRetinaUrl: "icons/" + iconData[key]["file"],
            shadowUrl: "icons/shadow.png",
            iconSize: iconSize,
            iconAnchor: [12,41],
            popupAnchor: [1,-34],
            tooltipAnchor: [16,-28],
            shadowSize: [41,41],
        });
    }
});
