template: `Hello Universe`,

styles:`
:hist{
color:#a144eb;
}`,


import{Component} from '@angular/core';
@Component({
    selector: 'app-root',
    template: `Hello`,
    styles:`
    :host{
        color:blue;

    }`,
})
export class App()