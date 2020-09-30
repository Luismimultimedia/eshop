import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WarrantyProductModel } from '../../shared/model/product.model';
import { WarrantySelectedModel } from '../../shared/model/warranty-selected.model';

@Component({
    selector: 'warranty-option',
    templateUrl: './warranty-option.component.html',
    styleUrls: ['./warranty-option.component.scss']
})
export class WarrantyOptionComponent {

    @Input()
    warrantyOptions: Array<WarrantyProductModel>;
    warrantySelected: Array<WarrantySelectedModel>;
    extraPrice: number;
    @Output()
    GetExtraPrice = new EventEmitter<{ extraPrice: number, name: string }>();


    constructor() {
    }

    ngOnInit() {
        const warrantyOptionsTemp = this.warrantyOptions.map((warranty) => warranty);
        this.warrantySelected = warrantyOptionsTemp.map((warranty: WarrantyProductModel, i) => {
            let isSelected = false;
            if (i === 0) {
                isSelected = true;
            }
            return { ...warranty, isSelected };
        });
    }

    selectWarrantyOption(id: number) {
        this.warrantySelected = this.warrantySelected.map(warranty => {
            warranty.isSelected = false;
            if (warranty.idWarranty === id) {
                this.extraPrice = warranty.priceWarranty;
                warranty.isSelected = true;
                this.onGetExtraPrice();
            }
            return warranty;
        });
    }

    onGetExtraPrice() {
        this.GetExtraPrice.emit({ extraPrice: this.extraPrice, name: 'warranty' });
    }


}
