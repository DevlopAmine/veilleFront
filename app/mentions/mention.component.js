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
var mention_service_1 = require("./mention.service");
var router_1 = require("@angular/router");
var MentionComponent = (function () {
    function MentionComponent(router, mentionService, route) {
        this.router = router;
        this.mentionService = mentionService;
        this.route = route;
        this.title = 'Les Mentions';
        this.selectedAlert = false;
    }
    /*getMentions(): void {
      //this.heroes = this.heroService.getHeroes();
      this.mentionService.getMentions().then(mentions => this.mentions = mentions);//Act on Promise
    }*/
    MentionComponent.prototype.getMentions = function () {
        var _this = this;
        this.mentionService.getMentions()
            .subscribe(function (res) {
            _this.mentions = res;
            console.log(_this.mentions); // make sure you get data here.
        }, function (err) { return console.log(err); }, function () { return console.log("Done"); });
    };
    MentionComponent.prototype.ngOnInit = function () {
        //this.getMentions();
    };
    MentionComponent.prototype.anotherfunct = function (page) {
        var _this = this;
        this.selectedAlert = true;
        this.mentionService._getMentions(page)
            .subscribe(function (ms) {
            _this.mentions = ms;
            console.log(ms); // make sure you get data here.
        });
    };
    MentionComponent.prototype.onSelect = function (mention) {
        this.selectedMention = mention;
    };
    MentionComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/mention', this.selectedMention.ids]);
    };
    return MentionComponent;
}());
MentionComponent = __decorate([
    core_1.Component({
        selector: 'mentions',
        templateUrl: 'app/mentions/mentions.component.html',
        styleUrls: ['app/mentions/mentions.component.css']
        /*template: `<h1>{{title}}</h1>
                    <table class="table responsive">
                        <tr>
                            <th>Ids</th>
                            <th>Text</th>
                            <th>Link</th>
                            
                        </tr>
                        <tr *ngFor="let mention of mentions">
                            <td>{{mention.ids}}</td>
                            <td>{{mention.text}}</td>
                            <td>{{mention.link}}</td>
                        </tr>
                    </table>`*/
    }),
    __metadata("design:paramtypes", [router_1.Router, mention_service_1.MentionService, router_1.ActivatedRoute])
], MentionComponent);
exports.MentionComponent = MentionComponent;
//# sourceMappingURL=mention.component.js.map