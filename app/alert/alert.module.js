"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var alert_component_1 = require("./alert.component");
var alert_form_component_1 = require("./alert-form.component");
var alert_search_component_1 = require("./alert-search.component");
var instance_form_component_1 = require("./instance-form.component");
var alert_critere_service_1 = require("./alert-critere.service");
var alert_search_service_1 = require("./alert-search.service");
var instance_service_1 = require("./instance.service");
var AlertModule = (function () {
    function AlertModule() {
    }
    return AlertModule;
}());
AlertModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule, http_1.HttpModule,
            router_1.RouterModule.forChild([
                { path: 'alert', component: alert_component_1.AlertComponent },
                { path: 'data', component: alert_form_component_1.AlertFormComponent },
                { path: 'newinstance', component: instance_form_component_1.InstanceFormComponent }
            ])
        ],
        //This makes the HeroFormComponent component visible throughout this module.
        declarations: [
            alert_component_1.AlertComponent,
            alert_form_component_1.AlertFormComponent,
            alert_search_component_1.AlertSearchComponent,
            instance_form_component_1.InstanceFormComponent
        ],
        exports: [alert_form_component_1.AlertFormComponent],
        providers: [alert_critere_service_1.AlertCritereService, alert_search_service_1.AlertSearchService, instance_service_1.InstanceService],
    })
], AlertModule);
exports.AlertModule = AlertModule;
//# sourceMappingURL=alert.module.js.map