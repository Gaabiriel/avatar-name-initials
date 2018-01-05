"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AvatarNameInitialsComponent = /** @class */ (function () {
    function AvatarNameInitialsComponent() {
        this.initials = "";
    }
    AvatarNameInitialsComponent.prototype.ngOnInit = function () {
        this.initials = this.getNameInitials(this.name);
    };
    //Get names's initials
    AvatarNameInitialsComponent.prototype.getNameInitials = function (fullName) {
        if (fullName === null) {
            return "";
        }
        var splitedName = fullName.split(" ");
        //only show the first 3 initials
        var contador = splitedName.length > 3 ? 3 : splitedName.length;
        for (var i = 0; i < contador; i++) {
            //if the name has "de" preposition, it's not considered
            if (splitedName[i].toUpperCase() != "DE") {
                this.initials = this.initials + splitedName[i].charAt(0).toUpperCase() + ".";
            }
        }
        return this.initials;
    };
    __decorate([
        core_1.Input()
    ], AvatarNameInitialsComponent.prototype, "name", void 0);
    AvatarNameInitialsComponent = __decorate([
        core_1.Component({
            selector: 'avatar-name',
            template: '<span class="gavatar">{{initials}}</span>',
            styles: ["\n    .gavatar    {\n        color: white;\n        background-color: #c6c699;\n        display: inline-block;\n        font-family: Arial,\"Helvetica Neue\",Helvetica,sans-serif;\n        font-size: 14px;\n        border-radius: 80px;\n        width: 40px;\n        height: 36px;\n        line-height: 39px;\n        margin: 15px;\n        text-align: center;\n        }  \n  "]
        })
    ], AvatarNameInitialsComponent);
    return AvatarNameInitialsComponent;
}());
exports.AvatarNameInitialsComponent = AvatarNameInitialsComponent;
