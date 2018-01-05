[![npm version](https://badge.fury.io/js/avatar-name-initials.svg)](https://badge.fury.io/js/avatar-name-initials)

# avatar-name-initials
A node.js component that return the name's initials inside an avatar  


## Installation 
```sh
npm install avatar-name-initials --save
```
## Usage

#### ExampleModule

```typescript
import { AvatarNameInitialsComponent } from 'avatar-name-initials';

  declarations: [
    AvatarNameInitialsComponent
  ],
  exports: [
    AvatarNameInitialsComponent
  ]
 ```
 
#### ExampleComponent.ts
```typescript

export class ExampleComponent {
    name: string;

    constructor() {
    this.name = 'Gabriel de Souza';
    }
}
```

#### ExampleComponent.html
```html

<avatar-name [name]="name"></avatar-name>

```

