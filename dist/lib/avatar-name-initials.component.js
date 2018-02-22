import { Component, Input } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'avatar-names',
                    template: '<span class="gavatar" [hidden]="isHidden">{{initials}}</span>',
                    styles: ["\n    .gavatar    {\n        color: white;\n        background-color: black;\n        display: inline-block;\n        font-family: Arial,\"Helvetica Neue\",Helvetica,sans-serif;\n        font-size: 14px;\n        border-radius: 23px;\n        width: 44px;\n        height: 39px;\n        line-height: 39px;\n        margin: 15px;\n        text-align: center\n        }  \n  "]
                },] },
    ];
    /** @nocollapse */
    AvatarNameInitialsComponent.ctorParameters = function () { return []; };
    AvatarNameInitialsComponent.propDecorators = {
        "name": [{ type: Input },],
    };
    return AvatarNameInitialsComponent;
}());
export { AvatarNameInitialsComponent };
//# sourceMappingURL=avatar-name-initials.component.js.map