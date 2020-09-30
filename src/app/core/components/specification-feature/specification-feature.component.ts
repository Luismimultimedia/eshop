import { Component, Input } from '@angular/core';
import { specificationFeaturesModel } from '../../shared/model/product.model';

@Component({
    selector: 'specification-feature',
    templateUrl: './specification-feature.component.html',
    styleUrls: ['./specification-feature.component.scss']
})
export class SpecificationFeatureComponent {

    @Input()
    specificationFeatureItem: Array<specificationFeaturesModel>;

    constructor() {
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }


}