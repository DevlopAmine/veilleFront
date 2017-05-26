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
var alert_1 = require("../alert/alert");
var MentionComponent = (function () {
    function MentionComponent() {
        this.message = new alert_1.Alert("alert1", "opt1");
    }
    return MentionComponent;
}());
MentionComponent = __decorate([
    core_1.Component({
        /*templateUrl: '/app/mentions/mentions.component.html',
        styleUrls: [ '/app/mentions/mentions.component.css' ]*/
        template: "\n      <alert-form [message]></alert-form>\n  "
    }),
    __metadata("design:paramtypes", [])
], MentionComponent);
exports.MentionComponent = MentionComponent;
//# sourceMappingURL=mention.component.js.map