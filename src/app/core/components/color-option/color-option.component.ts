import { Component, Input } from '@angular/core';
import { colorProductModel } from '../../shared/model/product.model';

@Component({
    selector: 'color-option',
    templateUrl: './color-option.component.html',
    styleUrls: ['./color-option.component.scss']
})
export class ColorOptionComponent {

    @Input()
    colorOptions: Array<colorProductModel>;


    constructor() {
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }


}