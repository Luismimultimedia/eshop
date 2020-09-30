import { WarrantyProductModel } from './product.model';

export interface WarrantySelectedModel extends WarrantyProductModel {
    isSelected: boolean;
}