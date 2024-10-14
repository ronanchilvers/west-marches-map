const markerLayers = {
    cities: {
        name: "Large Cities or City Ports",
        visible: true,
    },
    towns: {
        name: "Market Towns",
        visible: true,
    },
    villages: {
        name: "Villages",
        visible: true,
    },
    ports: {
        name: "Large Ports",
        visible: true,
    },
    // landscape: "Landscape Features",
}
const markerData = {
    // Key features
    "ka": {
        pos: [-47.3,44.75],
        label: "Kaer Artifakt",
        type: null,
        icon: "star",
        tooltip: true,
    },

    // Ports
    "osterholm": {
        pos: [-49.8,38.12],
        label: "Osterholm",
        type: "cities",
    },
    "portdarian": {
        pos: [-50.4,56.3],
        label: "Port Darian",
        type: "cities"
    },
    "canth": {
        pos: [-55.3, 38.2],
        label: "Canth",
        type: "ports"
    },
    "carm": {
        pos: [-52.04, 48.79],
        label: "Carm",
        type: "towns"
    },
    "kalathon": {
        pos: [-61.64, 29.6],
        label: "Kalathon",
        type: "towns"
    },
    "wickledroth": {
        pos: [-63.76, 32.39],
        label: "Wickledroth",
        type: "villages"
    },
    "ozryn": {
        pos: [-61.25, 35.9],
        label: "Ozryn",
        type: "villages"
    },
    "moorhome": {
        pos: [-59.8, 39.8],
        label: "Moorhome",
        type: "villages"
    },

    // cities
    "vilhof": {
        pos: [-37.6, 47.5],
        label: "Vilhof Stedding",
        type: "villages"
    },
    "dirsam": {
        pos: [-53.73, 28.39],
        label: "Dirsam",
        type: "towns"
    },
    "daletown": {
        pos: [-40.85, 30.68],
        label: "Daletown",
        type: "towns"
    },
}
