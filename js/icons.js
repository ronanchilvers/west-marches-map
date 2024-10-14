let icons = {};
document.addEventListener("DOMContentLoaded",function(){
    const iconData = {
        stars: {
            file: "cityCapital.png",
        },
        cities: {
            file: "city.png",
        },
        towns: {
            file: "town.png",
        },
        villages: {
            file: "townHalflings.png",
        },
        ports: {
            file: "cityPort.png",
        },
    }

    // Build custom icon objects
    for (const key in iconData) {
        icons[key] = L.icon({
            iconUrl: "icons/" + iconData[key]["file"],
            iconRetinaUrl: "icons/" + iconData[key]["file"],
            shadowUrl: "icons/shadow.png",
            iconSize: [25,41],
            iconAnchor: [12,41],
            popupAnchor: [1,-34],
            tooltipAnchor: [16,-28],
            shadowSize: [41,41],
        });
        console.log(icons[key]);
    }
});
