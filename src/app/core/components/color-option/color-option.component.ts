import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { ColorProductModel } from '../../shared/model/product.model';
import { ColorSelectedModel } from '../../shared/model/color-selected.model';

@Component({
    selector: 'color-option',
    templateUrl: './color-option.component.html',
    styleUrls: ['./color-option.component.scss']
})
export class ColorOptionComponent {

    @Input()
    colorOptions: Array<ColorProductModel>;
    colorSelected: Array<ColorSelectedModel>;
    extraPrice: number;

    @Output()
    GetExtraPrice = new EventEmitter<number>();


    constructor() {
    }

    ngOnInit() {
        const colorOptionsTemp = this.colorOptions.map((color) => color);
        this.colorSelected = colorOptionsTemp.map((color: ColorProductModel, i) => {
            let isSelected = false;
            if (i === 0){
                isSelected = true;
            }
            return {...color, isSelected};
        });
    }

    selectColorOption(id: number) {
        this.colorSelected = this.colorSelected.map(color => {
            color.isSelected = false;
            if (color.idColor === id) {
                this.extraPrice = color.colorPrice;
                color.isSelected = true;
            }
            return color;
        });
    }


}
