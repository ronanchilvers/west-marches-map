document.addEventListener("DOMContentLoaded",function(){
    let labelData = {
        "The Ashen Wastes": {
           points: [
            [-41.31, 22.31],
            [-35.81, 27.56],
            [-31.31, 32.81],
            [-29.43, 37.75],
           ],
           size: "large",
        },
        "Ironwood Mountains": {
           points: [
            [-41.5, 33.2],
            [-37.8, 37],
            [-35.7, 42],
            [-35.3, 47.2],
           ],
           size: "large",
        },
        "Blackstone Mountains": {
           points: [
            [-38.75, 57.81],
            [-43, 57.87],
            [-47.25, 60],
            [-50.75, 63.75],
            [-53.25, 67.37],
            [-55.12, 72.31],
            [-57, 76.68],
           ],
           size: "large",
        },
        "Bitterroot": {
           points: [
            [-40.03, 43.5],
            [-40.18, 46.7],
            [-41.1, 51.3],
           ],
           size: "medium",
        },
        "Steel Plains": {
           points: [
            [-46.5, 37.3],
            [-42.6, 44.2],
           ],
           size: "medium",
        },
        "Canthus Steppe": {
           points: [
            [-57.9, 34.54],
            [-51.45, 36.76],
           ],
           size: "small",
        },
        "River Karna": {
           points: [
            [-47.89, 36.85],
            [-47.48, 36.4],
            [-46.79, 36.4],
            [-46.2, 36.3],
            [-45.85, 36],
            [-45.29, 36.1],
            [-44.76, 36.4],
            [-44.71, 36.7],
            [-43.92, 37.37],
           ],
           size: "tiny",
        },
        "River Idros": {
           points: [
            [-43.98, 47.4],
            [-45.25, 49.4],
            [-46.78, 49.5],
            [-47.85, 48.68],
           ],
           size: "tiny",
        },
        "River Torva": {
           points: [
            [-42.14, 55.3],
            [-43.67, 54.9],
            [-45.87, 55.1],
            [-47.46, 54.6],
           ],
           size: "tiny",
        },
        "Mount Karra": {
           points: [
            [-48.25, 42.15],
            [-48.93, 43.6],
            [-49.18, 45.15],
            [-48.75, 46.71],
            [-48.34, 47.5],
           ],
           size: "small",
        },
        "Mount Haldros": {
           points: [
            [-41.9, 49.56],
            [-42.54, 50],
            [-44.1, 51.1],
            [-45.1, 52.1],
            [-46.9, 53.53],
            [-47.84, 53.75],
           ],
           size: "small",
        },
        "Mount Halvik": {
           points: [
            [-56.31, 49.53],
            [-57.76, 50.89],
            [-59.14, 50.79],
            [-60.82, 50.87],
            [-62.31, 50.81],
            [-63.39, 51.48],
           ],
           size: "small",
        },
        "The Great Marsh": {
           points: [
            [-65.09, 36.46],
            [-65.4, 40.06],
            [-64.46, 42.93],
            [-62.9, 45.81],
           ],
           size: "medium",
        },
        "Lake Saravesi": {
           points: [
            [-58.81, 37.28],
            [-56.4, 42.43],
            [-53.9, 45.15],
            [-53.56, 48.15],
            [-54.4, 51.12],
           ],
           size: "large",
        },
        "Lake Pasree": {
           points: [
            [-70.43, 52.31],
            [-71.25, 55.28],
            [-70.03, 57],
            [-68.59, 58.12],
            [-67.96, 60.43],
            [-68.43, 62.81],
           ],
           size: "large",
        },
    }

    // Create polylines
    for (const key in labelData) {
        let deets = labelData[key];
        let cssClass = "feature-text-" + deets["size"];
        let opts = {
            center: true,
            attributes: {class: cssClass}
        };
        if (deets["opts"]) {
            for (const optKey in deets["opts"]) {
                opts[optKey] = deets["opts"][optKey];
            }
        }
        L.polyline(
            deets["points"],
            {
                color: 'transparent'
                // color: 'red'
            }
        ).setText(
            key,
            opts
        ).addTo(map);
    }
});
