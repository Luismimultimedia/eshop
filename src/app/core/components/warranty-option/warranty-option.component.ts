import { Component, Input } from '@angular/core';
import { warrantyProductModel } from '../../shared/model/product.model';

@Component({
    selector: 'warranty-option',
    templateUrl: './warranty-option.component.html',
    styleUrls: ['./warranty-option.component.scss']
})
export class WarrantyOptionComponent {

    @Input()
    warrantyOptions: Array<warrantyProductModel>;


    constructor() {
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }


}