import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AvatarNameInitialsComponent } from "./avatar-name-initials.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AvatarNameInitialsComponent
    ],
    exports: [
        AvatarNameInitialsComponent
    ]
})

export class AvatarNameInitialsModule { }