"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alert = (function () {
    function Alert(nomA, optkw, frbKw, srcAuth, srcBl, lang, dI) {
        this.nomA = nomA;
        this.optkw = optkw;
        this.frbKw = frbKw;
        this.srcAuth = srcAuth;
        this.srcBl = srcBl;
        this.lang = lang;
        this.dI = dI;
        this.descA = nomA;
        this.optKeywords = optkw;
        this.forbidenKeywords = frbKw;
        this.srcAutorises = srcAuth;
        this.srcBloques = srcBl;
        this.langue = lang;
        this.descI = dI;
    }
    Object.defineProperty(Alert.prototype, "getNom", {
        get: function () {
            return this.descA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert.prototype, "getOptKey", {
        get: function () {
            return this.optKeywords;
        },
        enumerable: true,
        configurable: true
    });
    return Alert;
}());
exports.Alert = Alert;
//# sourceMappingURL=alert.js.map