const markerLayers = {
    kaers: {
        name: "Kaers",
        visible: true,
    },
    cities: {
        name: "Large Cities and City Ports (pop > 8,000)",
        visible: true,
    },
    ports: {
        name: "Large Ports (pop < 8,000)",
        visible: true,
    },
    towns: {
        name: "Towns (pop < 3,000)",
        zoom_threshold: 5,
    },
    villages: {
        name: "Villages (pop < 1,000)",
        zoom_threshold: 6,
    },
    discovery: {
        name: "Discoveries",
        zoom_threshold: 6,
    },
    other: {
        name: "Other features",
        zoom_threshold: 7,
    },
}
const markerData = {

    // Kaers
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

    // Ports and cities
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

    // Towns
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
    "halvikhead": {
        pos: [-55.43, 49.31],
        label: "Halviks Head",
        type: "towns"
    },
    "reemen": {
        pos: [-69.65, 54.35],
        label: "Reemen",
        type: "towns"
    },

    // Villages
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
        label: "Vilhof Stedding - potential lair of Crodan Nekros",
        type: "villages"
    },
    "briarwood": {
        pos: [-41.76, 44.81],
        label: "Stonegrasp (was Briarwood), The Palm and The Stacks",
        type: "villages"
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
    "lakeside": {
        pos: [-49.92, 39.81],
        label: "Lakeside",
        type: "villages"
    },
    "kellis": {
        pos: [-52.41, 39.53],
        label: "Kellis",
        type: "villages"
    },
    "sarrasand": {
        pos: [-51.98, 43.61],
        label: "Sarrasand",
        type: "villages"
    },
    "stenhof": {
        pos: [-38.64, 56.85],
        label: "Stenhof stedding - home of Boraal and Kresh",
        type: "villages"
    },
    "douhof": {
        pos: [-72.12, 41.78],
        label: "Douhof stedding",
        type: "villages"
    },
    "Lundy": {
        pos: [-45.835937, 48.90625],
        label: "Lundy",
        type: "villages"
    },

    // Other stuff
    "loggingcamp": {
        pos: [-47.3, 44.55],
        label: "Logging Camp",
        type: "other"
    },
    "spiggotsmill": {
        pos: [-43.61, 46.79],
        label: "Spiggot's Mill",
        type: "other"
    },
    "songhallow": {
        pos: [-46.96, 41.22],
        label: "Song Hallow",
        type: "other"
    },

    // Discoveries
    "spread-wing-pillar": {
        pos: [-45.51, 45.60],
        label: "Pillar of Spread Wings",
        type: "discovery"
    },
    "black-pillar-1": {
        pos: [-46.46875, 46.796875],
        label: "Black Pillar",
        type: "discovery"
    },
    "black-pillar-2": {
        pos: [-47.8125, 47.28125],
        label: "Black Pillar",
        type: "discovery"
    },
    "outcropping-camp": {
        pos: [-46.59, 42.71],
        label: "Shelter beneath rocky outcrop",
        type: "discovery"
    },
    "songhallow-campsite": {
        pos: [-47.0, 41.28],
        label: "Good camping on the edge of Song Hallow",
        type: "discovery"
    },
    "morrigans-ruined-altar": {
        pos: [-43.54, 45.46],
        label: "Ruined altar to the Morrigan",
        type: "discovery"
    },
    "ruined-homestead": {
        pos: [-42.515625, 45.40625],
        label: "Ruined homestead",
        type: "discovery"
    },
    "spider-lair": {
        pos: [-48.085937, 42.0625],
        label: "Phase spider lair",
        type: "discovery"
    },
    "swampland": {
        pos: [-44.52, 45.16],
        label: "Swamp land and skrell",
        type: "discovery"
    },
    "sinkhole-near-brassen": {
        pos: [-48.609375, 42.085938],
        label: "Ettercap Sinkhole and Ruin",
        type: "discovery"
    },
    "killians-camp": {
        pos: [ -36.9375, 38.234375 ],
        label: "Approximate location of Killian's Settlement",
        type: "discovery"
    },
    "significant-upheaval": {
        pos: [-50.804687, 44.335938],
        label: "Site of potential bioeruptive subsidence and subductive collapse",
        type: "discovery"
    },
    "arcanoclastic-shear": {
        pos: [-48.601562, 44.421875],
        label: "Site of potential arcanoclastic shearing",
        type: "discovery"
    }
}
