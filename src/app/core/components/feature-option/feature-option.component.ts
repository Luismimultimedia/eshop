import { Component, Input } from '@angular/core';
import { featuresProductModel } from '../../shared/model/product.model';

@Component({
    selector: 'feature-option',
    templateUrl: './feature-option.component.html',
    styleUrls: ['./feature-option.component.scss']
})
export class FeatureOptionComponent {

    @Input()
    featuresOptions: Array<featuresProductModel>;


    constructor() {
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }


}