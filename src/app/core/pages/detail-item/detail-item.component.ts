import { Component } from '@angular/core';
import { ProductModel, specificationFeaturesModel, urlPhotoProductModel } from '../../shared/model/product.model';

@Component({
  selector: 'detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent {

  product: ProductModel;
  urlPaths: Array<urlPhotoProductModel>;
  specificationFeatures: Array<specificationFeaturesModel>;

  constructor() {
    this.initProduct();
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  initProduct() {
    this.product = {
      idPorduct: 1,
      new: true,
      nameProduct: 'Momentum True Wireless 2',
      subNameProduct: 'Earbuds that put sound first',
      price: 295.95,
      overview: '',
      features: '',
      containt: '',
      colorOptions: [
        {
          idColor: 1,
          title: 'Ivory White',
          description: 'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True.',
          colorPrice: 0
        },
        {
          idColor: 2,
          title: 'Matte Black',
          description: 'Of all og the celestial bodies that capture out attention and fascination as astronomers.',
          colorPrice: 0
        }
      ],
      warrantyOptions: [
        {
          idWarranty: 1,
          title: '2 years coverage',
          description: 'For the past 75 years, Sennheiser has put sound first.',
          priceWarranty: 0
        },
        {
          idWarranty: 2,
          title: '3 years coverage',
          description: 'For the past 75 years, Sennheiser has put sound first.',
          priceWarranty: 75
        }
      ],
      featuresOptions: [
        {
          idFeatures: 1,
          title: '2 years coverage',
          priceFeature: 0
        },
        {
          idFeatures: 2,
          title: '3 years coverage',
          priceFeature: 75
        }
      ],
      specification: [
        {
          idSpecifications: 1,
          title: 'Dimensions',
          description: '76.8 x 43.8 x 34.7 mm (earbugs and charging case)'
        },
        {
          idSpecifications: 2,
          title: 'USB Standard',
          description: 'USB-C'
        },
        {
          idSpecifications: 3,
          title: 'Power Supply',
          description: 'Sennheiser 7mm dynamic driver'
        },
        {
          idSpecifications: 4,
          title: 'Frecuency response (Microphone)',
          description: '100 Hz to 10 kHz'
        },
        {
          idSpecifications: 5,
          title: 'Fecuency Response',
          description: '5 - 21,000 Hz'
        },
        {
          idSpecifications: 6,
          title: 'Noise cancellation',
          description: 'Single-Mic ANC per earbud side'
        }
      ],
      urlPhoto: [
        {
          idPhoto: 1,
          urlPath: '../../../../assets/img/momentum.png'
        },
        {
          idPhoto: 2,
          urlPath: '../../../../assets/img/earphones.png'
        },
        {
          idPhoto: 3,
          urlPath: '../../../../assets/img/momentumtech.png'
        }
      ],
      specificationFeatures: [
        {
          idSpecificationFeature: 1,
          urlPath: '../../../../assets/icon/touch.svg',
          description: 'Customizable Touch Controls'
        },
        {
          idSpecificationFeature: 2,
          urlPath: '../../../../assets/icon/equalizer.svg',
          description: 'Built-in Equalizer'
        },
        {
          idSpecificationFeature: 3,
          urlPath: '../../../../assets/icon/noise.svg',
          description: 'Active Noise Cancellation'
        }
      ]
    }

    this.urlPaths = this.product.urlPhoto;
    this.specificationFeatures = this.product.specificationFeatures;

  }

}