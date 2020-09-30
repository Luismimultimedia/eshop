import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FeaturesSelectedModel } from '../../shared/model/feature-selected.model';
import { FeaturesProductModel } from '../../shared/model/product.model';

@Component({
    selector: 'feature-option',
    templateUrl: './feature-option.component.html',
    styleUrls: ['./feature-option.component.scss']
})
export class FeatureOptionComponent {

    @Input()
    featuresOptions: Array<FeaturesProductModel>;
    featuresSelected: Array<FeaturesSelectedModel>;
    extraPrice: number;
    @Output()
    GetExtraPrice = new EventEmitter<{ extraPrice: number, name: string }>();


    constructor() {
    }

    ngOnInit() {
        const featuresOptionsTemp = this.featuresOptions.map((features) => features);
        this.featuresSelected = featuresOptionsTemp.map((features: FeaturesProductModel, i) => {
            let isSelected = false;
            if (i === 0) {
                isSelected = true;
            }
            return { ...features, isSelected };
        });
    }

    selectFeatureOption(id: number) {
        this.featuresSelected = this.featuresSelected.map(features => {
            features.isSelected = false;
            if (features.idFeatures === id) {
                this.extraPrice = features.priceFeature;
                features.isSelected = true;
                this.onGetExtraPrice();
            }
            return features;
        });
    }

    onGetExtraPrice() {
        this.GetExtraPrice.emit({ extraPrice: this.extraPrice, name: 'features' });
    }


}