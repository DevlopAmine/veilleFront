"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var star_component_1 = require("./star.component");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var menu_component_1 = require("./menu.component");
var ng2_material_dropdown_1 = require("ng2-material-dropdown");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, platform_browser_1.BrowserModule, material_1.MdMenuModule, material_1.MdButtonModule, material_1.MdIconModule, animations_1.BrowserAnimationsModule,
            ng2_material_dropdown_1.Ng2DropdownModule,
        ],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            star_component_1.StarComponent,
            menu_component_1.MenuComponent
        ],
        declarations: [star_component_1.StarComponent, menu_component_1.MenuComponent
        ],
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map