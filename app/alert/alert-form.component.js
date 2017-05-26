"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var alert_1 = require("./alert");
var router_1 = require("@angular/router");
var alert_critere_service_1 = require("./alert-critere.service");
var alert_search_service_1 = require("./alert-search.service");
var AlertFormComponent = (function () {
    function AlertFormComponent(alertCritereService, alertSearchService, router) {
        this.alertCritereService = alertCritereService;
        this.alertSearchService = alertSearchService;
        this.router = router;
        this.errorMessage = '';
        this.model = new alert_1.Alert("", "", "", "", "", "", "");
        this.submitted = false;
    }
    AlertFormComponent.prototype.ngOnInit = function () {
        this.getMentions();
        console.log(this.instances);
    };
    AlertFormComponent.prototype.getMentions = function () {
        var _this = this;
        this.alertSearchService.getS()
            .subscribe(function (res) {
            _this.instances = res;
            console.log(_this.instances); // make sure you get data here.
        }, function (err) { return console.log(err); }, function () { return console.log("Done"); });
    };
    AlertFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.model.descA + " " + this.model.optKeywords + " " + this.model.forbidenKeywords + " " +
            this.model.srcAutorises + " " + this.model.srcBloques + " " + this.model.langue);
        this.add(new alert_1.Alert(this.model.descA, this.model.optKeywords, this.model.forbidenKeywords, this.model.srcAutorises, this.model.srcBloques, this.model.langue, this.model.descI));
    };
    AlertFormComponent.prototype.add = function (alert) {
        var _this = this;
        if (!alert) {
            return;
        }
        this.alertCritereService.creat(alert)
            .subscribe(function (error) { return _this.errorMessage = error; }, function (log) { return console.log(alert); });
    };
    AlertFormComponent.prototype.openCustom = function () {
        this.router.navigate(['/newinstance']);
    };
    Object.defineProperty(AlertFormComponent.prototype, "registerData", {
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    return AlertFormComponent;
}());
AlertFormComponent = __decorate([
    core_1.Component({
        selector: 'alert-form',
        templateUrl: 'app/alert/alert-form.component.html',
        styleUrls: ['app/alert/alert-form.component.css'],
        providers: [alert_critere_service_1.AlertCritereService, alert_search_service_1.AlertSearchService]
    }),
    __metadata("design:paramtypes", [alert_critere_service_1.AlertCritereService, alert_search_service_1.AlertSearchService, router_1.Router])
], AlertFormComponent);
exports.AlertFormComponent = AlertFormComponent;
//# sourceMappingURL=alert-form.component.js.map