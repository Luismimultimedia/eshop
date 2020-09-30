export interface ProductModel {
    idPorduct: number;
    new: boolean;
    nameProduct: string;
    subNameProduct: string;
    price: number;
    overview: string;
    features: string;
    containt: string;
    urlPhoto: Array<UrlPhotoProductModel>;
    colorOptions: Array<ColorProductModel>;
    warrantyOptions: Array<WarrantyProductModel>;
    featuresOptions: Array<FeaturesProductModel>;
    specification: Array<SpecificationsProductModel>;
    specificationFeatures: Array<SpecificationFeaturesModel>;
}

export interface ColorProductModel {
    idColor: number;
    title: string;
    description: string;
    colorPrice: number;
}

export interface WarrantyProductModel {
    idWarranty: number;
    title: string;
    description: string;
    priceWarranty: number;
}

export interface FeaturesProductModel {
    idFeatures: number;
    title: string;
    priceFeature: number;
}

export interface SpecificationsProductModel {
    idSpecifications: number;
    title: string;
    description: string;
}

export interface UrlPhotoProductModel {
    idPhoto: number;
    urlPath: string;
}

export interface SpecificationFeaturesModel {
    idSpecificationFeature: number;
    urlPath: string;
    description: string;
}