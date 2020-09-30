import { ColorProductModel } from './product.model';

export interface ColorSelectedModel extends ColorProductModel {
    isSelected: boolean;
}