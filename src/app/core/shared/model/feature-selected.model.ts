import { FeaturesProductModel } from './product.model';

export interface FeaturesSelectedModel extends FeaturesProductModel {
    isSelected: boolean;
}