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
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const alert_critere_service_1 = require("./alert-critere.service");
const alert_search_service_1 = require("./alert-search.service");
const fb_service_1 = require("../fbSection/fb.service");
const notifications_component_1 = require("../notifications/notifications.component");
const dialog_tst_component_1 = require("./tstFiles/dialog-tst.component");
let AlertFormComponent = class AlertFormComponent {
    constructor(alertCritereService, alertSearchService, router, _fbService) {
        this.alertCritereService = alertCritereService;
        this.alertSearchService = alertSearchService;
        this.router = router;
        this._fbService = _fbService;
        this.errorMessage = '';
        this.alert = new forms_1.FormGroup({});
        this.goodNotif = false;
        this.badNotif = false;
        this.isLoading = false;
        this.pages = [];
        this.submitted = false;
        let user = JSON.parse(localStorage.getItem('currentUser'));
        this.username = user.username;
    }
    filterPages(val) {
        return val ? this.pages.filter(s => s.pageName.toLowerCase().indexOf(val.toLowerCase()) === 0)
            : this.pages;
    }
    ngOnInit() {
        console.log("hyyyyyyy  " + this.username);
        this.alert = new forms_1.FormGroup({
            descA: new forms_1.FormControl(''),
            descI: new forms_1.FormControl(''),
            optKeywords: new forms_1.FormControl(''),
            forbidenKeywords: new forms_1.FormControl(''),
            srcAutorises: new forms_1.FormControl(''),
            srcBloques: new forms_1.FormControl(''),
            langue: new forms_1.FormControl(''),
            srcAutorisesTw: new forms_1.FormControl(''),
            srcBloquesTw: new forms_1.FormControl(''),
            fbPage: new forms_1.FormControl('')
        });
        this.getPages();
        this.filtredPages = this.alert.get('fbPage').valueChanges
            .startWith(null)
            .map(name => this.filterPages(name));
        this.getInstances();
        console.log(this.instances);
    }
    getInstances() {
        this.alertSearchService.getS()
            .subscribe(res => {
            this.instances = res;
            console.log(this.instances); // make sure you get data here.
        }, (err) => console.log(err), () => console.log("Done"));
    }
    onSubmit() {
        this.submitted = true;
        let tst;
        console.log(this.alert.value, this.alert.status);
        this.add(this.alert.value);
    }
    add(alert) {
        if (!alert) {
            return;
        }
        this.isLoading = true;
        this.alertCritereService.creat(alert)
            .subscribe(() => { this.isLoading = false; this.goodNotif = true; }, error => {
            this.badNotif = true;
        }, () => {
            this.isLoading = false;
            console.log(alert);
        });
    }
    getPages() {
        this._fbService._getFbPages()
            .subscribe(res => {
            this.pages = res;
            console.log(this.pages); // make sure you get data here.
        }, (err) => console.log(err), () => console.log("Done"));
    }
    openCustom() {
        this.router.navigate(['/newinstance']);
    }
    get registerData() {
        return null;
        // return JSON.stringify(this.model);
    }
    onEvent(event) {
        event.stopPropagation();
    }
};
AlertFormComponent = __decorate([
    core_1.Component({
        selector: 'alert-form',
        templateUrl: 'app/dashboard/alert/alert-form.component.html',
        styleUrls: ['app/dashboard/alert/alert-form.component.css'],
        entryComponents: [notifications_component_1.NotificationsComponent, dialog_tst_component_1.DialogOverviewExample],
        providers: [alert_critere_service_1.AlertCritereService, alert_search_service_1.AlertSearchService, fb_service_1.FBService]
    }),
    __metadata("design:paramtypes", [alert_critere_service_1.AlertCritereService, alert_search_service_1.AlertSearchService,
        router_1.Router, fb_service_1.FBService])
], AlertFormComponent);
exports.AlertFormComponent = AlertFormComponent;
//# sourceMappingURL=alert-form.component.js.map