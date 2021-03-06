(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.avatarnameinitials = {}),global.ng.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

var AvatarNameInitialsComponent = /** @class */ (function () {
    function AvatarNameInitialsComponent() {
        this.initials = "";
    }
    AvatarNameInitialsComponent.prototype.ngOnInit = function () {
        this.initials = this.getNameInitials(this.name);
    };
    //Get names's initials
    //Get names's initials
    AvatarNameInitialsComponent.prototype.getNameInitials = 
    //Get names's initials
    function (fullName) {
        if (fullName === null || fullName === undefined || fullName === "") {
            this.isHidden = true;
            return "";
        }
        else {
            var splitedName = fullName.split(" ");
            //only show the first 3 initials
            var contador = splitedName.length > 2 ? 2 : splitedName.length;
            for (var i = 0; i < contador; i++) {
                if (splitedName[i] != "") {
                    //if the name has "de","dos","da" preposition, it's not considered
                    if (splitedName[i].toUpperCase() != "DE" && splitedName[i].toUpperCase() != "DOS" && splitedName[i].toUpperCase() != "DA") {
                        this.initials = this.initials + splitedName[i].charAt(0).toUpperCase() + "";
                    }
                    else {
                        contador++;
                    }
                }
                else {
                    contador++;
                }
            }
            this.isHidden = false;
            return this.initials;
        }
    };
    AvatarNameInitialsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'avatar-name',
                    template: '<span class="gavatar" [hidden]="isHidden">{{initials}}</span>',
                    styles: ["\n    .gavatar    {\n        color: white;\n        background-color: black;\n        display: inline-block;\n        font-family: Arial,\"Helvetica Neue\",Helvetica,sans-serif;\n        font-size: 14px;\n        border-radius: 23px;\n        width: 44px;\n        height: 39px;\n        line-height: 39px;\n        margin: 15px;\n        text-align: center\n        }  \n  "]
                },] },
    ];
    /** @nocollapse */
    AvatarNameInitialsComponent.ctorParameters = function () { return []; };
    AvatarNameInitialsComponent.propDecorators = {
        "name": [{ type: core.Input },],
    };
    return AvatarNameInitialsComponent;
}());

var AvatarNameInitialsModule = /** @class */ (function () {
    function AvatarNameInitialsModule() {
    }
    AvatarNameInitialsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        AvatarNameInitialsComponent
                    ],
                    exports: [
                        AvatarNameInitialsComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    AvatarNameInitialsModule.ctorParameters = function () { return []; };
    return AvatarNameInitialsModule;
}());

exports.AvatarNameInitialsModule = AvatarNameInitialsModule;
exports.AvatarNameInitialsComponent = AvatarNameInitialsComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
