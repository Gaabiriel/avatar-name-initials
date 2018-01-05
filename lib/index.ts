import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'avatar-name',
    template: '<span class="gavatar">{{initials}}</span>',
    styles: [`
    .gavatar    {
        color: white;
        background-color: #c6c699;
        display: inline-block;
        font-family: Arial,"Helvetica Neue",Helvetica,sans-serif;
        font-size: 14px;
        border-radius: 80px;
        width: 40px;
        height: 36px;
        line-height: 39px;
        margin: 15px;
        text-align: center;
        }  
  `]
})
export class AvatarNameInitialsComponent implements OnInit {
    @Input() name: string;
    initials: string = "";

    ngOnInit() {
        this.initials = this.getNameInitials(this.name);
    }

    //Get names's initials
    getNameInitials(fullName: string): string {

        if (fullName === null) { return ""; }

        let splitedName = fullName.split(" ");

        //only show the first 3 initials
        let contador = splitedName.length > 3 ? 3 : splitedName.length;

        for (let i = 0; i < contador; i++) {
            //if the name has "de" preposition, it's not considered
            if (splitedName[i].toUpperCase() != "DE") {
                this.initials = this.initials + splitedName[i].charAt(0).toUpperCase() + ".";
            }
        }
        return this.initials;
    }
}