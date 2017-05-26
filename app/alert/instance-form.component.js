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
var common_1 = require("@angular/common");
var instance_1 = require("./instance");
var instance_service_1 = require("./instance.service");
var InstanceFormComponent = (function () {
    function InstanceFormComponent(location, instanceService) {
        this.location = location;
        this.instanceService = instanceService;
        this.model = new instance_1.Instance("", "");
        this.errorMessage = '';
    }
    InstanceFormComponent.prototype.onSubmit = function () {
        console.log(this.model.descI + " " + this.model.customer_id);
        this.add(new instance_1.Instance(this.model.descI, this.model.customer_id));
    };
    InstanceFormComponent.prototype.add = function (instance) {
        var _this = this;
        if (!instance) {
            return;
        }
        this.instanceService.creat(instance)
            .subscribe(function (error) { return _this.errorMessage = error; }, function (log) { return console.log(instance); });
    };
    InstanceFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    return InstanceFormComponent;
}());
InstanceFormComponent = __decorate([
    core_1.Component({
        selector: 'newInstance',
        template: "\n<form #instanceForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"form-inline\">\n  <div class=\"form-group\">\n    <label class=\"sr-only\" for=\"instance\">Nom de l'instance</label>\n    <input type=\"text\" class=\"form-control\" id=\"descI\" name=\"descI\"\n     [(ngModel)]=\"model.descI\" placeholder=\"Nom de l'instance\">\n  </div>\n  <div class=\"form-group\">\n    <label class=\"sr-only\" for=\"Id\">Id</label>\n    <input type=\"text\" class=\"form-control\" id=\"customer_id\"  name=\"customer_id\"\n    [(ngModel)]=\"model.customer_id\" placeholder=\"Votre Id \">\n  </div>\n\n  <button class=\"btn btn-info\" (click)=\"goBack()\">Back</button>\n  <button type=\"submit\" class=\"btn btn-default\">Valider</button>\n</form>",
        providers: [instance_service_1.InstanceService]
    }),
    __metadata("design:paramtypes", [common_1.Location, instance_service_1.InstanceService])
], InstanceFormComponent);
exports.InstanceFormComponent = InstanceFormComponent;
//# sourceMappingURL=instance-form.component.js.map