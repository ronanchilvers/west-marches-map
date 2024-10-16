(function (factory, window) {
    if (typeof define === "function" && define.amd) {
        define(["leaflet"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("leaflet"));
    }
    if (typeof window !== "undefined" && window.L) {
        factory(L);
    }
})(function (L) {

    L.Control.ZoomManager = L.Control.extend({
        options: {
            layers: {},
        },

        initialize: function (options) {
            L.Util.setOptions(this, options);
            this._thresholds = {};
        },

        bind: function (map) {
            this._map = map;
            let that = this;
            map.on("zoomend", function () {
                that.update();
            });
            return this;
        },

        pushLayer: function (tag, layer, threshold) {
            this._thresholds[tag] = {
                layer: layer,
                threshold: threshold,
            }
        },

        update: function () {
            let zoom = this._map.getZoom();
            for (const key in this._thresholds) {
                let threshold = this._thresholds[key]["threshold"];
                let layer = this._thresholds[key]["layer"];
                this._map[(zoom >= threshold) ? "addLayer" : "removeLayer" ](layer);
            }
        }
    });

    L.control.zoomManager = L.control.ZoomManager = function (options) {
        return new L.Control.ZoomManager(options);
    };
}, window);
