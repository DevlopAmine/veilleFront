"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var CustomModalContext = (function (_super) {
    __extends(CustomModalContext, _super);
    function CustomModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomModalContext;
}(bootstrap_1.BSModalContext));
exports.CustomModalContext = CustomModalContext;
/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
var CustomModal = (function () {
    function CustomModal(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
        dialog.setCloseGuard(this);
    }
    CustomModal.prototype.Submit = function (value) {
        this.descI = value;
        console.log(this.descI);
        this.dialog.close();
    };
    CustomModal.prototype.beforeDismiss = function () {
        return true;
    };
    return CustomModal;
}());
CustomModal = __decorate([
    core_1.Component({
        selector: 'modal-content',
        styles: ["\n        .custom-modal-container {\n            padding: 15px;\n        }\n\n        .custom-modal-header {\n            background-color: #219161;\n            color: #fff;\n            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            margin-top: -15px;\n            margin-bottom: 40px;\n        }\n    "],
        template: "\n         <div class=\"container-fluid custom-modal-container\">\n            <div class=\"row custom-modal-header\">\n                <div class=\"col-sm-12\">\n                    <h1>Saisir nouvelle instance</h1>\n                </div>\n            </div>\n            <div class=\"row\" [ngClass]=\"{'myclass' : shouldUseMyClass}\">\n                <div class=\"col-xs-12\">\n                    <div class=\"jumbotron\">\n                        <h1>Creer instance</h1>\n                        \n                         <input class=\"form-control\" type=\"text\" #answer  autofocus>\n                         <button type=\"button\" class=\"btn btn-primary\" (click)=\"Submit(answer.value)\">Send </button>\n                    </div>\n                </div>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [angular2_modal_1.DialogRef])
], CustomModal);
exports.CustomModal = CustomModal;
//# sourceMappingURL=custom-modal.js.map