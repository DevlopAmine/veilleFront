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
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/concatMap");
let StatService = class StatService {
    constructor(http) {
        this.http = http;
        this.statisticUrl = 'http://localhost:8080/statics/'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    totalInsts() {
        return this.http.get(this.statisticUrl + 'totalInsts')
            .map(res => res.text())
            .catch(this.handleError);
    }
    totalAlerts() {
        return this.http.get(this.statisticUrl + 'totalAlerts')
            .map(res => res.text())
            .catch(this.handleError);
    }
    totalMts() {
        return this.http.get(this.statisticUrl + 'totalMts')
            .map(res => res.text())
            .catch(this.handleError);
    }
    handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
};
StatService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StatService);
exports.StatService = StatService;
//# sourceMappingURL=statistic.service.js.map