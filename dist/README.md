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
import { AvatarNameInitialsModule } from 'avatar-name-initials';

  imports: [
    AvatarNameInitialsModule
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

## Output 

![alt text](https://user-images.githubusercontent.com/35075988/34606447-8a4a2c00-f1f6-11e7-8414-10b0d4bc00b5.png)