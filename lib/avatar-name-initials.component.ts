import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'avatar-names',
    template: '<span class="gavatar" [hidden]="isHidden">{{initials}}</span>',
    styles: [`
    .gavatar    {
        color: white;
        background-color: black;
        display: inline-block;
        font-family: Arial,"Helvetica Neue",Helvetica,sans-serif;
        font-size: 14px;
        border-radius: 23px;
        width: 44px;
        height: 39px;
        line-height: 39px;
        margin: 15px;
        text-align: center
        }  
  `]
})
export class AvatarNameInitialsComponent implements OnInit {
    @Input() name: string;
    initials: string = "";
    isHidden: boolean;
    ngOnInit() {
        this.initials = this.getNameInitials(this.name);
    }

    //Get names's initials
    getNameInitials(fullName: string): string {

        if (fullName === null || fullName === undefined || fullName === "") {
            this.isHidden = true;
            return "";

        } else {
            let splitedName = fullName.split(" ");

            //only show the first 3 initials
            let contador = splitedName.length > 2 ? 2 : splitedName.length;

            for (let i = 0; i < contador; i++) {
                if (splitedName[i] != "") {
                    //if the name has "de","dos","da" preposition, it's not considered
                    if (splitedName[i].toUpperCase() != "DE" && splitedName[i].toUpperCase() != "DOS" && splitedName[i].toUpperCase() != "DA") {
                        this.initials = this.initials + splitedName[i].charAt(0).toUpperCase() + "";
                    } else {
                        contador++;
                    }
                } else {
                    contador++;
                }
            }
            this.isHidden = false;
            return this.initials;
        }
    }
}