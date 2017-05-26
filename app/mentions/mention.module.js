"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var mention_component_1 = require("./mention.component");
var mention_service_1 = require("./mention.service");
var alert_module_1 = require("../alert/alert.module");
var platform_browser_1 = require("@angular/platform-browser");
//import { HttpModule } from '@angular/http';
var mention_detail_component_1 = require("./mention-detail.component");
var shared_module_1 = require("../shared/shared.module");
var MentionModule = (function () {
    function MentionModule() {
    }
    return MentionModule;
}());
MentionModule = __decorate([
    core_1.NgModule({
        imports: [
            alert_module_1.AlertModule,
            platform_browser_1.BrowserModule,
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'mentions', component: mention_component_1.MentionComponent },
                { path: 'mention/:ids',
                    component: mention_component_1.MentionComponent
                },
                { path: 'alert/:page', component: mention_component_1.MentionComponent }
            ])
        ],
        declarations: [
            mention_component_1.MentionComponent, mention_detail_component_1.MentionDetailComponent,
        ],
        providers: [
            mention_service_1.MentionService,
        ],
        bootstrap: [mention_component_1.MentionComponent]
    })
], MentionModule);
exports.MentionModule = MentionModule;
//# sourceMappingURL=mention.module.js.map