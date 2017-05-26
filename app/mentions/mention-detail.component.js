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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var mention_service_1 = require("./mention.service");
var MentionDetailComponent = (function () {
    function MentionDetailComponent(mentionService, route, location) {
        this.mentionService = mentionService;
        this.route = route;
        this.location = location;
    }
    /*ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.mentionService.getMention(params['ids']))
        .subscribe(mention => this.mention = mention);
    }
  */
    MentionDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return MentionDetailComponent;
}());
MentionDetailComponent = __decorate([
    core_1.Component({
        selector: 'mention-detail',
        templateUrl: 'app/mentions/mention-detail.component.html',
        styleUrls: ['app/mentions/mention-detail.component.css']
    }),
    __metadata("design:paramtypes", [mention_service_1.MentionService,
        router_1.ActivatedRoute,
        common_1.Location])
], MentionDetailComponent);
exports.MentionDetailComponent = MentionDetailComponent;
//# sourceMappingURL=mention-detail.component.js.map