import { Component, Input } from '@angular/core';
import { SpecificationsProductModel } from '../../shared/model/product.model';

@Component({
    selector: 'specification-option',
    templateUrl: './specification-option.component.html',
    styleUrls: ['./specification-option.component.scss']
})
export class SpecificationOptionComponent {

    @Input()
    specification: Array<SpecificationsProductModel>;

    constructor() {
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }


}