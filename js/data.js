const markerLayers = {
    kaers: {
        name: "Kaers",
        visible: true,
    },
    cities: {
        name: "Cities and City Ports",
        visible: true,
    },
    ports: {
        name: "Independent Ports",
        visible: true,
    },
    towns: {
        name: "Market Towns",
        visible: true,
    },
    villages: {
        name: "Villages",
        zoom_threshold: 5,
    },
    other: {
        name: "Camps and other features",
        zoom_threshold: 6,
    },
}
const markerData = {
    "artifakt": {
        pos: [-47.3,44.75],
        label: "Kaer Artifakt",
        type: "kaers",
        icon: "star",
        tooltip: true,
    },
    "bhathag": {
        pos: [-12.93,32.81],
        label: "Kaer Bhathag",
        type: "kaers",
        icon: "kaers",
        tooltip: true,
    },
    "ravilious": {
        pos: [-92.18,47.37],
        label: "Kaer Ravilious",
        type: "kaers",
        icon: "kaers",
        tooltip: true,
    },

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
    "vilhof": {
        pos: [-37.6, 47.5],
        label: "Vilhof Stedding",
        type: "villages"
    },
    "briarhollow": {
        pos: [-41.76, 44.81],
        label: "Briarhollow",
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
    "slycross": {
        pos: [-47.75, 39.5],
        label: "Slycross",
        type: "villages"
    },
    "brassen": {
        pos: [-48.85, 41.98],
        label: "Brassen",
        type: "villages"
    },

    // Other stuff
    "kaercamp": {
        pos: [-47.4, 44.6],
        label: "Logging Camp",
        type: "other"
    },
    "spiggotsmill": {
        pos: [-42.5, 47.03],
        label: "Spiggot's Mill",
        type: "other"
    },
}
