import { OnInit } from '@angular/core';
export declare class AvatarNameInitialsComponent implements OnInit {
    name: string;
    initials: string;
    ngOnInit(): void;
    getNameInitials(fullName: string): string;
}
