export interface ProductModel {
    idPorduct: number;
    new: boolean;
    nameProduct: string;
    subNameProduct: string;
    price: number;
    overview: string;
    features: string;
    containt: string;
    urlPhoto: Array<urlPhotoProductModel>;
    colorOptions: Array<colorProductModel>;
    warrantyOptions: Array<warrantyProductModel>;
    featuresOptions: Array<featuresProductModel>;
    specification: Array<specificationsProductModel>;
    specificationFeatures: Array<specificationFeaturesModel>;
}

export interface colorProductModel {
    idColor: number;
    title: string;
    description: string;
    colorPrice: number;
}

export interface warrantyProductModel {
    idWarranty: number;
    title: string;
    description: string;
    priceWarranty: number;
}

export interface featuresProductModel {
    idFeatures: number;
    title: string;
    priceFeature: number;
}

export interface specificationsProductModel {
    idSpecifications: number;
    title: string;
    description: string;
}

export interface urlPhotoProductModel {
    idPhoto: number;
    urlPath: string;
}

export interface specificationFeaturesModel {
    idSpecificationFeature: number;
    urlPath: string;
    description: string;
}